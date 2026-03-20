// RenterFinder Firebase DB Layer
// ADDITIVE ONLY — all localStorage logic in chat.html/mod-dashboard.html stays intact
// This file only provides the RF namespace for Firestore reads/writes

const RF = (function() {

  function chatDoc(id)  { return db.collection('chats').doc(id); }
  function msgsCol(id)  { return db.collection('chats').doc(id).collection('messages'); }

  // ── MESSAGES ─────────────────────────────────────────────────
  async function saveMessage(chatId, msg) {
    try {
      await msgsCol(chatId).doc(String(msg.id)).set({ ...msg, chatId });
    } catch(e) { console.error('[RF] saveMessage', e); }
  }

  function onMessages(chatId, cb) {
    return msgsCol(chatId).orderBy('ts','asc').onSnapshot(
      snap => cb(snap.docs.map(d => d.data())),
      e => console.error('[RF] onMessages', e)
    );
  }

  // ── CHAT META ────────────────────────────────────────────────
  async function registerChat(chatId, data) {
    try {
      const snap = await chatDoc(chatId).get();
      if (!snap.exists) await chatDoc(chatId).set({ chatId, ...data, started: Date.now() });
      return snap.exists ? snap.data() : data;
    } catch(e) { console.error('[RF] registerChat', e); return data; }
  }

  async function updateChatMeta(chatId, data) {
    try { await chatDoc(chatId).set(data, { merge: true }); }
    catch(e) { console.error('[RF] updateChatMeta', e); }
  }

  function onChatMeta(chatId, cb) {
    return chatDoc(chatId).onSnapshot(
      snap => { if (snap.exists) cb(snap.data()); },
      e => console.error('[RF] onChatMeta', e)
    );
  }

  // ── VIOLATIONS ───────────────────────────────────────────────
  async function saveViolations(chatId, v) {
    try { await chatDoc(chatId).set({ violations: v }, { merge: true }); }
    catch(e) { console.error('[RF] saveViolations', e); }
  }

  // ── DEAL ─────────────────────────────────────────────────────
  async function saveDeal(chatId, deal) {
    try {
      await chatDoc(chatId).set({ deal }, { merge: true });
      await db.collection('deals').doc(chatId).set(deal);
    } catch(e) { console.error('[RF] saveDeal', e); }
  }

  // ── MEETING ──────────────────────────────────────────────────
  async function saveMeeting(chatId, meeting) {
    try { await chatDoc(chatId).set({ meeting }, { merge: true }); }
    catch(e) { console.error('[RF] saveMeeting', e); }
  }

  // ── JOIN SLOTS ───────────────────────────────────────────────
  async function saveJoinSlots(chatId, slots) {
    try { await chatDoc(chatId).set({ joinSlots: slots }, { merge: true }); }
    catch(e) { console.error('[RF] saveJoinSlots', e); }
  }

  // ── MOD LOG ──────────────────────────────────────────────────
  async function appendModLog(entry) {
    try { await db.collection('modlog').doc(String(entry.id)).set(entry); }
    catch(e) { console.error('[RF] appendModLog', e); }
  }

  async function updateModLogEntry(id, patch) {
    try { await db.collection('modlog').doc(String(id)).update(patch); }
    catch(e) { console.error('[RF] updateModLogEntry', e); }
  }

  function onModLog(cb) {
    return db.collection('modlog').onSnapshot(
      snap => {
        const data = snap.docs.map(d => d.data());
        data.sort((a,b) => (b.ts||0)-(a.ts||0));
        cb(data);
      },
      e => console.error('[RF] onModLog', e)
    );
  }

  // ── APPEALS ──────────────────────────────────────────────────
  async function saveAppeal(appeal) {
    try { await db.collection('appeals').doc(String(appeal.id)).set(appeal); }
    catch(e) { console.error('[RF] saveAppeal', e); }
  }

  function onAppeals(cb) {
    return db.collection('appeals').onSnapshot(
      snap => {
        const data = snap.docs.map(d => d.data());
        data.sort((a,b) => (b.ts||0)-(a.ts||0));
        cb(data);
      },
      e => console.error('[RF] onAppeals', e)
    );
  }

  async function updateAppeal(id, patch) {
    try { await db.collection('appeals').doc(String(id)).update(patch); }
    catch(e) { console.error('[RF] updateAppeal', e); }
  }

  // ── ASSIGNMENTS ──────────────────────────────────────────────
  async function saveAssignment(chatId, modId) {
    try { await db.collection('assignments').doc(chatId).set({ modId, chatId, assignedTs: Date.now() }); }
    catch(e) { console.error('[RF] saveAssignment', e); }
  }

  async function deleteAssignment(chatId) {
    try { await db.collection('assignments').doc(chatId).delete(); }
    catch(e) { console.error('[RF] deleteAssignment', e); }
  }

  async function getAssignment(chatId) {
    try {
      const snap = await db.collection('assignments').doc(chatId).get();
      return snap.exists ? snap.data().modId : null;
    } catch(e) { console.error('[RF] getAssignment', e); return null; }
  }

  function onAssignments(cb) {
    return db.collection('assignments').onSnapshot(
      snap => {
        const map = {};
        snap.docs.forEach(d => { map[d.id] = d.data().modId; });
        cb(map);
      },
      e => console.error('[RF] onAssignments', e)
    );
  }

  // ── MODS ACTIVE ──────────────────────────────────────────────
  async function setModActive(modId, active) {
    try { await db.collection('modsActive').doc(modId).set({ active, id: modId }); }
    catch(e) { console.error('[RF] setModActive', e); }
  }

  function onModsActive(cb) {
    return db.collection('modsActive').onSnapshot(
      snap => {
        const map = { 'mod-1': true, 'mod-2': true };
        snap.docs.forEach(d => { map[d.id] = d.data().active; });
        cb(map);
      },
      e => console.error('[RF] onModsActive', e)
    );
  }

  // ── BANNED ───────────────────────────────────────────────────
  async function banUser(uid, data) {
    try { await db.collection('banned').doc(uid).set(data); }
    catch(e) { console.error('[RF] banUser', e); }
  }

  async function unbanUser(uid) {
    try { await db.collection('banned').doc(uid).delete(); }
    catch(e) { console.error('[RF] unbanUser', e); }
  }

  function onBanned(cb) {
    return db.collection('banned').onSnapshot(
      snap => {
        const map = {};
        snap.docs.forEach(d => { map[d.id] = d.data(); });
        cb(map);
      },
      e => console.error('[RF] onBanned', e)
    );
  }

  // ── ALL CHATS ────────────────────────────────────────────────
  function onAllChats(cb) {
    return db.collection('chats').onSnapshot(
      snap => cb(snap.docs.map(d => ({ chatId: d.id, ...d.data() }))),
      e => console.error('[RF] onAllChats', e)
    );
  }

  // ── DEALS ────────────────────────────────────────────────────
  function onDeals(cb) {
    return db.collection('deals').onSnapshot(
      snap => cb(snap.docs.map(d => d.data())),
      e => console.error('[RF] onDeals', e)
    );
  }

  // ── USER CHATS ───────────────────────────────────────────────
  async function getUserChats(userId) {
    try {
      const snap = await db.collection('userChats').doc(userId).get();
      return snap.exists ? (snap.data().chats || []) : [];
    } catch(e) { console.error('[RF] getUserChats', e); return []; }
  }

  async function saveUserChats(userId, chats) {
    try { await db.collection('userChats').doc(userId).set({ chats, updatedTs: Date.now() }); }
    catch(e) { console.error('[RF] saveUserChats', e); }
  }

  // ── SYSTEM MESSAGE ───────────────────────────────────────────
  async function postSystemMsg(chatId, text, extra) {
    const msg = { id: Date.now(), senderIdentity:'SYS', senderId:'system', senderName:'System', text, ts: Date.now(), isSystem: true, chatId, ...(extra||{}) };
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
