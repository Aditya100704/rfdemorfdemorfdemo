const { onRequest } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const ANTHROPIC_KEY = defineSecret('ANTHROPIC_KEY');

const ALLOWED = ['https://aditya100704.github.io','http://localhost','http://127.0.0.1','null'];
function cors(req, res) {
  const o = req.headers.origin || 'null';
  res.set('Access-Control-Allow-Origin', ALLOWED.includes(o) ? o : ALLOWED[0]);
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
}

exports.moderateMessage = onRequest({ secrets:[ANTHROPIC_KEY], cors:false }, async (req,res) => {
  cors(req,res);
  if (req.method==='OPTIONS') return res.status(204).send('');
  if (req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  const {text} = req.body;
  if (!text) return res.status(400).json({error:'Missing text'});
  const patterns = [
    {re:/(\+?91[\s\-]?)?[6-9]\d{9}/, reason:'Phone numbers are not allowed.', violationType:'contact_info'},
    {re:/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/, reason:'Email addresses are not allowed.', violationType:'contact_info'},
    {re:/wa\.me\/|whatsapp\.com\/|t\.me\//i, reason:'WhatsApp or Telegram links are not allowed.', violationType:'contact_info'},
    {re:/(instagram|facebook|twitter|linkedin|snapchat|youtube)\.com\//i, reason:'Social media links are not allowed.', violationType:'contact_info'},
    {re:/@[a-zA-Z0-9_]{3,}/, reason:'Social media handles are not allowed.', violationType:'contact_info'},
  ];
  for (const p of patterns) if (p.re.test(text)) return res.json({decision:'BLOCK',reason:p.reason,violationType:p.violationType});
  const prompt = `You are a strict chat moderator for RenterFinder.com, India's rental platform.
BLOCK: phone numbers, emails, WhatsApp/Telegram, addresses, meeting suggestions, social media, off-platform attempts, abuse in any language including Hindi and all Indian languages.
ALLOW: property details, rent, BHK, furnishing, area names, availability, lease dates, polite rental conversation.
violationType: "contact_info"|"meeting"|"abuse"
Respond ONLY valid JSON: {"decision":"ALLOW","reason":"","violationType":""} or {"decision":"BLOCK","reason":"<reason>","violationType":"..."}
Message: ${JSON.stringify(text)}`;
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json','x-api-key':ANTHROPIC_KEY.value(),'anthropic-version':'2023-06-01'},body:JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:150,system:[{type:'text',text:'Strict multilingual chat moderator. Respond ONLY with valid JSON.'}],messages:[{role:'user',content:prompt}]})});
    const d = await r.json();
    const raw = d?.content?.[0]?.text || '{"decision":"ALLOW","reason":"","violationType":""}';
    return res.json(JSON.parse(raw.replace(/```json|```/g,'').trim()));
  } catch(e) { console.error(e); return res.json({decision:'ALLOW',reason:'',violationType:''}); }
});

exports.chatbot = onRequest({ secrets:[ANTHROPIC_KEY], cors:false }, async (req,res) => {
  cors(req,res);
  if (req.method==='OPTIONS') return res.status(204).send('');
  if (req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  const {messages,system} = req.body;
  if (!messages) return res.status(400).json({error:'Missing messages'});
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json','x-api-key':ANTHROPIC_KEY.value(),'anthropic-version':'2023-06-01'},body:JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:600,system:system||[],messages})});
    return res.json(await r.json());
  } catch(e) { console.error(e); return res.status(500).json({error:'Internal error'}); }
});
