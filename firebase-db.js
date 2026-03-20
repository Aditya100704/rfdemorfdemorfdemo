// ── RenterFinder Firestore DB Layer ──────────────────────────
// Shared by chat.html, mod-dashboard.html, dashboard.html, mods/*.html
// Provides async read/write wrappers for every data type.
// Falls back to localStorage if Firestore is unavailable.

// ── FIRESTORE HELPERS ─────────────────────────────────────────
const RF = (() => {
  const chatDoc  = id  => db.collection('chats').doc(id);
  const msgsCol  = id  => db.collection('chats').doc(id).collection('messages');
  const merge    = obj => ({ merge: true });

  // ── MESSAGES ─────────────────────────────────────────────────
  async function saveMessage(chatId, msg) {
    const full = { ...msg, chatId };
    // Dual-write localStorage
    try {
      const key = `rf_chat_${chatId}`;
      const msgs = JSON.parse(localStorage.getItem(key)) || [];
      if (!msgs.find(m => String(m.id) === String(msg.id))) {
        msgs.push(full);
        localStorage.setItem(key, JSON.stringify(msgs));
      }
    } catch {}
    // Write to Firestore
    await msgsCol(chatId).doc(String(msg.id)).set(full);
  }

  function onMessages(chatId, callback) {
    return msgsCol(chatId)
      .orderBy('ts', 'asc')
      .onSnapshot(snap => {
        callback(snap.docs.map(d => d.data()));
      });
  }

  // ── CHAT META ─────────────────────────────────────────────────
  async function registerChat(chatId, data) {
    const ref = chatDoc(chatId);
    const snap = await ref.get();
    if (!snap.exists) {
      await ref.set({ chatId, ...data, started: Date.now() });
    }
    // Dual-write chats index to localStorage
    try {
      const idx = JSON.parse(localStorage.getItem('rf_chats_index')) || [];
      if (!idx.find(c => c.chatId === chatId)) {
        idx.push({ chatId, ...data, started: Date.now() });
        localStorage.setItem('rf_chats_index', JSON.stringify(idx));
      }
    } catch {}
    return snap.exists ? snap.data() : data;
  }

  async function updateChatMeta(chatId, data) {
    // Dual-write lastMessage/lastTs to localStorage chats index
    try {
      if (data.lastMessage !== undefined || data.lastTs !== undefined) {
        const idx = JSON.parse(localStorage.getItem('rf_chats_index')) || [];
        const chat = idx.find(c => c.chatId === chatId);
        if (chat) {
          if (data.lastMessage !== undefined) chat.lastMessage = data.lastMessage;
          if (data.lastTs !== undefined) chat.lastTs = data.lastTs;
          localStorage.setItem('rf_chats_index', JSON.stringify(idx));
        }
      }
    } catch {}
    await chatDoc(chatId).set(data, { merge: true });
  }

  function onChatMeta(chatId, callback) {
    return chatDoc(chatId).onSnapshot(snap => {
      if (snap.exists) callback(snap.data());
    });
  }

  // ── VIOLATIONS ───────────────────────────────────────────────
  async function saveViolations(chatId, v) {
    await chatDoc(chatId).set({ violations: v }, { merge: true });
  }

  // ── DEAL ─────────────────────────────────────────────────────
  async function saveDeal(chatId, deal) {
    await chatDoc(chatId).set({ deal }, { merge: true });
    await db.collection('deals').doc(chatId).set(deal);
  }

  // ── MEETING ──────────────────────────────────────────────────
  async function saveMeeting(chatId, meeting) {
    await chatDoc(chatId).set({ meeting }, { merge: true });
  }

  // ── JOIN SLOTS ───────────────────────────────────────────────
  async function saveJoinSlots(chatId, slots) {
    await chatDoc(chatId).set({ joinSlots: slots }, { merge: true });
  }

  // ── MOD LOG ──────────────────────────────────────────────────
  async function appendModLog(entry) {
    // Dual-write to localStorage
    try {
      const log = JSON.parse(localStorage.getItem('rf_modlog')) || [];
      log.unshift(entry);
      if (log.length > 500) log.splice(500);
      localStorage.setItem('rf_modlog', JSON.stringify(log));
    } catch {}
    await db.collection('modlog').doc(String(entry.id)).set(entry);
  }

  async function updateModLogEntry(id, patch) {
    await db.collection('modlog').doc(String(id)).update(patch);
  }

  function onModLog(callback) {
    return db.collection('modlog').orderBy('ts', 'desc')
      .onSnapshot(snap => callback(snap.docs.map(d => d.data())));
  }

  // ── APPEALS ──────────────────────────────────────────────────
  async function saveAppeal(appeal) {
    await db.collection('appeals').doc(String(appeal.id)).set(appeal);
  }

  async function updateAppeal(id, patch) {
    await db.collection('appeals').doc(String(id)).update(patch);
  }

  function onAppeals(callback) {
    return db.collection('appeals').orderBy('ts', 'desc')
      .onSnapshot(snap => callback(snap.docs.map(d => d.data())));
  }

  // ── ASSIGNMENTS ──────────────────────────────────────────────
  async function saveAssignment(chatId, modId) {
    try {
      const map = JSON.parse(localStorage.getItem('rf_chat_assignments')) || {};
      map[chatId] = modId;
      localStorage.setItem('rf_chat_assignments', JSON.stringify(map));
    } catch {}
    await db.collection('assignments').doc(chatId).set({ modId, chatId, assignedTs: Date.now() });
  }

  async function deleteAssignment(chatId) {
    await db.collection('assignments').doc(chatId).delete();
  }

  async function getAssignment(chatId) {
    const snap = await db.collection('assignments').doc(chatId).get();
    return snap.exists ? snap.data().modId : null;
  }

  function onAssignments(callback) {
    return db.collection('assignments').onSnapshot(snap => {
      const map = {};
      snap.docs.forEach(d => { map[d.id] = d.data().modId; });
      callback(map);
    });
  }

  // ── MODS ACTIVE ──────────────────────────────────────────────
  async function setModActive(modId, active) {
    await db.collection('modsActive').doc(modId).set({ active, id: modId });
  }

  function onModsActive(callback) {
    return db.collection('modsActive').onSnapshot(snap => {
      const map = { 'mod-1': true, 'mod-2': true };
      snap.docs.forEach(d => { map[d.id] = d.data().active; });
      callback(map);
    });
  }

  // ── BANNED USERS ─────────────────────────────────────────────
  async function banUser(uid, data) {
    await db.collection('banned').doc(uid).set(data);
  }

  async function unbanUser(uid) {
    await db.collection('banned').doc(uid).delete();
  }

  function onBanned(callback) {
    return db.collection('banned').onSnapshot(snap => {
      const map = {};
      snap.docs.forEach(d => { map[d.id] = d.data(); });
      callback(map);
    });
  }

  // ── ALL CHATS (for dashboard) ────────────────────────────────
  function onAllChats(callback) {
    return db.collection('chats').onSnapshot(snap => {
      callback(snap.docs.map(d => ({ chatId: d.id, ...d.data() })));
    });
  }

  // ── DEALS ────────────────────────────────────────────────────
  function onDeals(callback) {
    return db.collection('deals').onSnapshot(snap => {
      callback(snap.docs.map(d => d.data()));
    });
  }

  // ── USER CHATS ───────────────────────────────────────────────
  async function getUserChats(userId) {
    const snap = await db.collection('userChats').doc(userId).get();
    return snap.exists ? (snap.data().chats || []) : [];
  }

  async function saveUserChats(userId, chats) {
    await db.collection('userChats').doc(userId).set({ chats, updatedTs: Date.now() });
  }

  // ── SYSTEM MESSAGE ───────────────────────────────────────────
  async function postSystemMsg(chatId, text, extra) {
    const msg = { id: Date.now(), senderIdentity: 'SYS', senderId: 'system', senderName: 'System', text, ts: Date.now(), isSystem: true, chatId, ...extra };
    await saveMessage(chatId, msg);
    return msg;
  }

  return {
    saveMessage, onMessages,
    registerChat, updateChatMeta, onChatMeta,
    saveViolations, saveDeal, saveMeeting, saveJoinSlots,
    appendModLog, updateModLogEntry, onModLog,
    saveAppeal, updateAppeal, onAppeals,
    saveAssignment, deleteAssignment, getAssignment, onAssignments,
    setModActive, onModsActive,
    banUser, unbanUser, onBanned,
    onAllChats, onDeals,
    getUserChats, saveUserChats,
    postSystemMsg
  };
})();
