/* ============================================================
   RenterFinder.com — AI Chatbot Widget  (chatbot.js)
   Powered by Claude Haiku via Anthropic API
   ============================================================ */

(function () {
  'use strict';

  // ── CONFIG ────────────────────────────────────────────────
  const CHATBOT_URL = 'https://us-central1-renterfinder.cloudfunctions.net/chatbot';
  const MODEL     = 'claude-haiku-4-5-20251001';
  const MAX_TOKENS = 600;

  // ── KNOWLEDGE BASE ────────────────────────────────────────
  const SITE_KNOWLEDGE = `
You are the helpful AI assistant for RenterFinder.com — India's first and only rental-exclusive property platform connecting landlords and renters directly, with no brokers involved. You answer questions about the platform, rental laws, fees, listings, and general renting/landlording in India.

## ABOUT RENTERFINDER.COM
- India's first platform where landlords can proactively search for renters via the Prospective Renters List
- Operated by VAMY Properties Pvt Ltd, founded by Aditya Shankar in 2025
- No buying, no selling — ONLY RENTING
- Pan-India coverage — every city, town, and rural area
- No brokers, no hidden charges, transparent flat fees
- All profiles auto-deactivate after 3 months to keep listings current

## FEES
- Profile Listing Fee: ₹125 (discounted from ₹499 — 75% off) for 3 months — currently FREE until 31 July 2026 (inaugural offer)
- Profile Re-activation Fee: ₹99 (within 6 months of deactivation)
- Platform Service Fee: 12 days' rent total, split as:
  - 6 days' rent: paid to arrange the property meeting (non-refundable)
  - 6 days' rent: paid at deal closure when agreement is signed
- Platform Service Fee is calculated on 'Rent Asked on Portal' only (not final negotiated rent)
- All payments are non-refundable
- Pay only through the link on the portal — never via cash, phone transfer, or OTP

## SERVICES
1. Renter Search (for Landlords): Browse the Prospective Renters' List — India's only live tenant list. Filter by city, budget, family size, move-in date
2. Property Search (for Renters): Find verified rental property listings posted directly by landlords

## HOW IT WORKS
1. Register via mobile number
2. Fill a short profile form
3. Alternatively, WhatsApp "Hi" to +91 73031 04550 for assisted listing
4. Listing goes live within 24 hours after review
5. Browse listings / wait for interest
6. Click "Show Interest" — contact details shared with the other party
7. Chat session arranged to discuss terms
8. Pay 6 days' rent meeting fee → in-person site visit arranged
9. If deal closes → pay remaining 6 days' rent Platform Service Fee

## LISTINGS & PROFILES
- Valid for 3 months; auto-deactivate after that
- Profile editing: email renterfinder1@gmail.com up to 3 times in 3 months (edits within 48 hrs)
- No premium service — equal visibility for all listings (latest-first order)
- Landlord photos: inside-only, max 1MB, JPEG or PNG only
- Renter profiles: fill family size, rent range, etc. genuinely

## CONTACT
- Email: renterfinder1@gmail.com
- WhatsApp: +91 73031 04550
- Website: https://www.renterfinder.com

## PAGES ON THE SITE
- Home: Overview, fees summary, dual services
- About: Company background, mission, founding story
- Services: Renter Search + Property Search details
- Fees: Full fee breakdown
- FAQ: 20+ Q&As across 8 categories
- Rental Properties: Browse 1BHK/2BHK/3BHK listings
- Renters List: Browse prospective tenant profiles
- Blog: Guides for landlords and renters
- Refer & Earn: ₹500 per successful referral, no cap, pan-India
- Internship: Marketing, content, business development roles
- Model Tenancy Act 2021: Security deposit caps, Rent Authority, Rental Tribunals
- Rent Agreement: Sample Indian rent agreement, 9 key clauses
- Terms of Use, Privacy Policy, Disclaimer: Legal pages

## FEES & PAYMENTS — KEY RULES
- All payments non-refundable
- If a deal doesn't close and both parties report it within 7 days, 3 more match options provided within 3 months using same meeting charge
- No refund if no match within 3 months

## TENANT SCREENING
- Verify: Aadhaar, PAN, or passport; income/employment proof; reference from previous landlord
- Police verification mandatory in many states (Delhi, Maharashtra, UP, Karnataka, etc.)
- Delhi: https://www.delhipolice.gov.in

## SECURITY DEPOSITS (Model Tenancy Act 2021)
- Residential: Maximum 2 months' rent
- Commercial: Maximum 6 months' rent
- Must be returned on day of vacation if no damage/unpaid rent

## NOTICE PERIODS (MTA 2021)
- Monthly tenancy: 1 month advance notice by either party
- Annual/fixed-term: 3 months by landlord; 1 month by tenant
- Notice must be in writing

## EVICTION GROUNDS
- Non-payment of rent (2+ consecutive months)
- Misuse of property
- Subletting without consent
- Structural damage beyond normal wear
- Landlord's personal use
- Expiry of tenancy term
- Cannot evict forcibly — must follow Rent Authority / court process

## RENT AGREEMENTS
- Unregistered (≤11 months): ₹100 stamp paper, not registered, informal
- Registered (>11 months): Sub-Registrar's office, stamp duty 0.25%–6% of annual rent
- 11-month agreements preferred to avoid registration costs
- Lock-in period: renter agrees not to vacate before 3–6 months; deposit deduction if broken
- Lease Deed (long-term, >1 year): always requires registration
- Leave & Licence (short-term, up to 11 months): common for residential, optional registration

## MODEL TENANCY ACT 2021
- Central model law — states must individually adopt it
- Key provisions: mandatory written agreements, deposit limits, Rent Authority, eviction timelines
- Rent Authority decides applications within 60 days
- Appeals: Rental Tribunal (district judge) → High Court

## REFER & EARN
- ₹500 per successful deal referral
- No cap on referrals
- Available pan-India

## WHAT RENTERFINDER DOES NOT DO
- No property management
- No rent collection
- No lease drafting
- No post-match services
- Role ends at introduction between landlord and renter

Always be helpful, accurate, and friendly. If unsure, direct users to contact RenterFinder at renterfinder1@gmail.com or WhatsApp +91 73031 04550. Keep answers short and to the point — avoid unnecessary elaboration. Use bullet points only when listing multiple items. Respond in the same language as the user (English or Hindi).
`;

  // ── STATE ─────────────────────────────────────────────────
  let conversationHistory = [];
  let isOpen = false;
  let isLoading = false;

  // ── STYLES ────────────────────────────────────────────────
  const CSS = `
    #rf-chat-widget * { box-sizing: border-box; font-family: 'Segoe UI', Arial, sans-serif; }

    #rf-chat-fab {
      position: fixed; bottom: 24px; right: 24px; z-index: 99999;
      width: 58px; height: 58px; border-radius: 50%;
      background: linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #c9a668 100%);
      box-shadow: 0 4px 20px rgba(184,134,11,0.45);
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    #rf-chat-fab:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(184,134,11,0.55); }
    #rf-chat-fab svg { width: 26px; height: 26px; fill: #fff; }
    #rf-chat-fab .rf-fab-close { display: none; }
    #rf-chat-fab.open .rf-fab-open  { display: none; }
    #rf-chat-fab.open .rf-fab-close { display: block; }

    #rf-chat-panel {
      position: fixed; bottom: 92px; right: 24px; z-index: 99998;
      width: 360px; max-width: calc(100vw - 32px);
      height: 520px; max-height: calc(100vh - 120px);
      background: #1a1a1a; border-radius: 18px;
      box-shadow: 0 12px 48px rgba(0,0,0,0.55);
      display: flex; flex-direction: column; overflow: hidden;
      transform: scale(0.92) translateY(16px); opacity: 0; pointer-events: none;
      transform-origin: bottom right;
      transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), opacity 0.18s ease;
    }
    #rf-chat-panel.open { transform: scale(1) translateY(0); opacity: 1; pointer-events: all; }

    #rf-chat-header {
      background: linear-gradient(135deg, #b8860b, #d4a017);
      padding: 14px 16px; display: flex; align-items: center; gap: 10px; flex-shrink: 0;
    }
    .rf-avatar {
      width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.2);
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .rf-avatar svg { width: 20px; height: 20px; fill: #fff; }
    .rf-header-text { flex: 1; }
    .rf-header-text h4 { margin: 0; color: #fff; font-size: 14px; font-weight: 700; line-height: 1.2; }
    .rf-header-text span { color: rgba(255,255,255,0.82); font-size: 11px; }
    .rf-online-dot { width: 8px; height: 8px; background: #4ade80; border-radius: 50%; flex-shrink:0; }

    #rf-chat-messages {
      flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 12px;
      scrollbar-width: thin; scrollbar-color: #333 transparent;
    }
    #rf-chat-messages::-webkit-scrollbar { width: 4px; }
    #rf-chat-messages::-webkit-scrollbar-track { background: transparent; }
    #rf-chat-messages::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }

    .rf-msg { display: flex; gap: 8px; align-items: flex-end; animation: rfFadeIn 0.22s ease; }
    @keyframes rfFadeIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
    .rf-msg.user { flex-direction: row-reverse; }
    .rf-bubble {
      max-width: 78%; padding: 10px 13px; border-radius: 16px;
      font-size: 13.5px; line-height: 1.55; word-break: break-word;
    }
    .rf-msg.bot  .rf-bubble { background: #2a2a2a; color: #e8e8e8; border-bottom-left-radius: 4px; }
    .rf-msg.user .rf-bubble { background: linear-gradient(135deg,#b8860b,#d4a017); color: #fff; border-bottom-right-radius: 4px; }
    .rf-msg-avatar { width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
      background: #2a2a2a; display:flex; align-items:center; justify-content:center; }
    .rf-msg-avatar svg { width: 15px; height: 15px; fill: #c9a668; }
    .rf-msg.user .rf-msg-avatar { background: #b8860b; }
    .rf-msg.user .rf-msg-avatar svg { fill: #fff; }

    .rf-typing { display: flex; gap: 4px; align-items: center; padding: 10px 14px; }
    .rf-typing span { width: 7px; height: 7px; background: #c9a668; border-radius: 50%;
      animation: rfBounce 1.2s infinite; }
    .rf-typing span:nth-child(2) { animation-delay: 0.2s; }
    .rf-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes rfBounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-6px)} }

    #rf-chat-suggestions {
      padding: 0 12px 8px; display: flex; flex-wrap: wrap; gap: 6px; flex-shrink: 0;
    }
    .rf-suggestion {
      background: #252525; border: 1px solid #3a3a3a; color: #c9a668;
      border-radius: 20px; padding: 5px 11px; font-size: 11.5px; cursor: pointer;
      transition: background 0.15s, border-color 0.15s; white-space: nowrap;
    }
    .rf-suggestion:hover { background: #b8860b; border-color: #b8860b; color: #fff; }

    #rf-chat-input-area {
      padding: 12px; border-top: 1px solid #2a2a2a; display: flex; gap: 8px; flex-shrink: 0;
    }
    #rf-chat-input {
      flex: 1; background: #252525; border: 1px solid #333; border-radius: 24px;
      padding: 9px 14px; color: #e8e8e8; font-size: 13.5px; outline: none; resize: none;
      max-height: 90px; line-height: 1.4; transition: border-color 0.15s;
    }
    #rf-chat-input::placeholder { color: #666; }
    #rf-chat-input:focus { border-color: #b8860b; }
    #rf-chat-send {
      width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; align-self: flex-end;
      background: linear-gradient(135deg, #b8860b, #d4a017); border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.15s, opacity 0.15s;
    }
    #rf-chat-send:hover { transform: scale(1.08); }
    #rf-chat-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
    #rf-chat-send svg { width: 17px; height: 17px; fill: #fff; }

    .rf-powered { text-align: center; font-size: 10px; color: #444; padding: 4px 0 8px; flex-shrink: 0; }
    .rf-powered a { color: #666; text-decoration: none; }

    @media (max-width: 400px) {
      #rf-chat-panel { width: calc(100vw - 16px); right: 8px; bottom: 84px; }
      #rf-chat-fab { right: 16px; bottom: 16px; }
    }
  `;

  // ── BUILD WIDGET HTML ─────────────────────────────────────
  function buildWidget () {
    // Inject styles
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    // Root wrapper
    const root = document.createElement('div');
    root.id = 'rf-chat-widget';
    root.innerHTML = `
      <!-- Chat Panel -->
      <div id="rf-chat-panel" role="dialog" aria-label="RenterFinder AI Assistant">
        <div id="rf-chat-header">
          <div class="rf-avatar">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
          </div>
          <div class="rf-header-text">
            <h4>RenterFinder Assistant</h4>
            <span>Ask me anything about renting in India</span>
          </div>
          <div class="rf-online-dot" title="Online"></div>
        </div>
        <div id="rf-chat-messages" aria-live="polite"></div>
        <div id="rf-chat-suggestions">
          <button class="rf-suggestion" data-q="What are the fees?">💰 Fees</button>
          <button class="rf-suggestion" data-q="How do I list my property?">🏠 List property</button>
          <button class="rf-suggestion" data-q="What is the Prospective Renters List?">📋 Renters list</button>
          <button class="rf-suggestion" data-q="What is the security deposit limit in India?">🔒 Security deposit</button>
          <button class="rf-suggestion" data-q="How do I contact RenterFinder?">📞 Contact us</button>
        </div>
        <div id="rf-chat-input-area">
          <textarea id="rf-chat-input" rows="1" placeholder="Ask about renting, fees, listings…" aria-label="Chat input"></textarea>
          <button id="rf-chat-send" aria-label="Send message" disabled>
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
        <div class="rf-powered">Powered by Claude AI — <a href="https://www.renterfinder.com" target="_blank">RenterFinder.com</a></div>
      </div>

      <!-- FAB Button -->
      <button id="rf-chat-fab" aria-label="Open RenterFinder chat assistant" aria-expanded="false">
        <svg class="rf-fab-open" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
        <svg class="rf-fab-close" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    `;
    document.body.appendChild(root);

    // Wire events
    document.getElementById('rf-chat-fab').addEventListener('click', togglePanel);
    document.getElementById('rf-chat-send').addEventListener('click', handleSend);
    document.getElementById('rf-chat-input').addEventListener('keydown', onKeyDown);
    document.getElementById('rf-chat-input').addEventListener('input', onInputChange);
    document.querySelectorAll('.rf-suggestion').forEach(btn =>
      btn.addEventListener('click', () => sendMessage(btn.dataset.q))
    );

    // Welcome message
    addBotMessage("👋 Hi! I'm the RenterFinder AI assistant. I can help you with questions about listing your property, finding a renter, our fees, rent agreements, tenant laws in India, and more.\n\nWhat can I help you with today?");
  }

  // ── TOGGLE ────────────────────────────────────────────────
  function togglePanel () {
    isOpen = !isOpen;
    const panel = document.getElementById('rf-chat-panel');
    const fab   = document.getElementById('rf-chat-fab');
    panel.classList.toggle('open', isOpen);
    fab.classList.toggle('open', isOpen);
    fab.setAttribute('aria-expanded', isOpen);
    if (isOpen) {
      setTimeout(() => document.getElementById('rf-chat-input').focus(), 250);
    }
  }

  // ── INPUT HELPERS ─────────────────────────────────────────
  function onKeyDown (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }
  function onInputChange () {
    const input = document.getElementById('rf-chat-input');
    const send  = document.getElementById('rf-chat-send');
    // Auto-resize textarea
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 90) + 'px';
    send.disabled = input.value.trim() === '' || isLoading;
  }

  function handleSend () {
    const input = document.getElementById('rf-chat-input');
    const text  = input.value.trim();
    if (!text || isLoading) return;
    input.value = '';
    input.style.height = 'auto';
    document.getElementById('rf-chat-send').disabled = true;
    sendMessage(text);
  }

  // ── ADD MESSAGES ──────────────────────────────────────────
  function addUserMessage (text) {
    const msgs = document.getElementById('rf-chat-messages');
    const div  = document.createElement('div');
    div.className = 'rf-msg user';
    div.innerHTML = `
      <div class="rf-msg-avatar"><svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg></div>
      <div class="rf-bubble">${escapeHtml(text).replace(/\n/g, '<br>')}</div>
    `;
    msgs.appendChild(div);
    scrollToBottom();
  }

  function addBotMessage (text) {
    const msgs = document.getElementById('rf-chat-messages');
    const div  = document.createElement('div');
    div.className = 'rf-msg bot';
    div.innerHTML = `
      <div class="rf-msg-avatar"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg></div>
      <div class="rf-bubble">${formatBotText(text)}</div>
    `;
    msgs.appendChild(div);
    scrollToBottom();
  }

  function showTyping () {
    const msgs = document.getElementById('rf-chat-messages');
    const div  = document.createElement('div');
    div.className = 'rf-msg bot';
    div.id = 'rf-typing-indicator';
    div.innerHTML = `
      <div class="rf-msg-avatar"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg></div>
      <div class="rf-bubble rf-typing"><span></span><span></span><span></span></div>
    `;
    msgs.appendChild(div);
    scrollToBottom();
  }

  function hideTyping () {
    const t = document.getElementById('rf-typing-indicator');
    if (t) t.remove();
  }

  function scrollToBottom () {
    const msgs = document.getElementById('rf-chat-messages');
    msgs.scrollTop = msgs.scrollHeight;
  }

  // ── FORMAT BOT TEXT ───────────────────────────────────────
  function formatBotText (text) {
    return escapeHtml(text)
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code style="background:#333;padding:1px 5px;border-radius:3px;font-family:monospace;font-size:12px;">$1</code>')
      .replace(/\n/g, '<br>');
  }

  function escapeHtml (str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ── API CALL ──────────────────────────────────────────────
  async function sendMessage (userText) {
    if (isLoading) return;
    isLoading = true;

    addUserMessage(userText);
    conversationHistory.push({ role: 'user', content: userText });

    // Hide suggestions after first user message
    const suggestions = document.getElementById('rf-chat-suggestions');
    if (suggestions) suggestions.style.display = 'none';

    showTyping();

    try {
      const response = await fetch(CHATBOT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: conversationHistory,
          system: [{ type: 'text', text: SITE_KNOWLEDGE, cache_control: { type: 'ephemeral' } }]
        })
      });

      if (!response.ok) {
        throw new Error(`API error ${response.status}`);
      }

      const data = await response.json();
      const reply = data?.content?.[0]?.text || "Sorry, I couldn't get a response. Please try again or contact us at renterfinder1@gmail.com.";

      hideTyping();
      addBotMessage(reply);
      conversationHistory.push({ role: 'assistant', content: reply });

      // Keep history manageable (last 20 turns)
      if (conversationHistory.length > 20) {
        conversationHistory = conversationHistory.slice(-20);
      }

    } catch (err) {
      hideTyping();
      addBotMessage("⚠️ Sorry, something went wrong. Please try again or reach us at **renterfinder1@gmail.com** or WhatsApp **+91 73031 04550**.");
      console.error('[RenterFinder Chatbot]', err);
    }

    isLoading = false;
    document.getElementById('rf-chat-send').disabled = false;
    document.getElementById('rf-chat-input').focus();
  }

  // ── INIT ──────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildWidget);
  } else {
    buildWidget();
  }

})();
