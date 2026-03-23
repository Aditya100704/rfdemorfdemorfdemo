const pages = { home:'page-home', about:'page-about', services:'page-services', fees:'page-fees', properties:'page-properties', 'renters-list':'page-renters-list', login:'page-login', faq:'page-faq', terms:'page-terms', disclaimer:'page-disclaimer', privacy:'page-privacy', mta:'page-mta', refer:'page-refer', internship:'page-internship', 'rent-agreement':'page-rent-agreement', feedback:'page-feedback', dashboard:'page-dashboard', blog:'page-blog' };
var _pageMeta = {
'home':           { title:'RenterFinder.com — India\'s Only Rental-Only Platform', url:'https://www.renterfinder.com/', desc:'India\'s first rental-only platform. Find a renter online or browse rental homes. Transparent fees — ₹125 listing, 12-day platform service fee. No hidden charges.' },
'about':          { title:'About RenterFinder.com — India\'s Rental-Only Platform', url:'https://www.renterfinder.com/about', desc:'About RenterFinder.com — India\'s first rental-only platform, founded 2025. Connects landlords and renters directly, no brokers, transparent fees, pan-India.' },
'services':       { title:'Our Services — Renter Search & Property Search | RenterFinder', url:'https://www.renterfinder.com/services', desc:'Two services on one platform: landlords search the Prospective Renters\' List; renters browse properties. Broker-free, pan-India coverage, transparent fees.' },
'fees':           { title:'Transparent Rental Fees — ₹125 & 12 Days | RenterFinder', url:'https://www.renterfinder.com/fees', desc:'RenterFinder charges only two fees — ₹125 Profile Listing Fee for 3 months and Platform Service Fee of 12 days\' rent. No hidden charges. Lowest rental fee in India.' },
'properties':     { title:'Rental Properties India — 1BHK 2BHK 3BHK | RenterFinder', url:'https://www.renterfinder.com/properties', desc:'Browse rental properties across India — 1BHK, 2BHK, 3BHK flats, apartments, houses. Posted directly by landlords. No broker. Transparent fees across India.' },
'renters-list':   { title:'Prospective Renters\' List — Find a Renter | RenterFinder', url:'https://www.renterfinder.com/renters-list', desc:'First time ever, landlords can find a renter online. Browse the Renters\' List — genuine tenant profiles with budget, location and requirements. 140+ cities.' },
'login':          { title:'Login or Register Free — RenterFinder.com India', url:'https://www.renterfinder.com/login', desc:'Login or register free on RenterFinder.com. Landlords: list your property and browse renters. Renters: upload profile and get matched across India. No broker.' },
'faq':            { title:'FAQ — Rental Fees, Listings & Matching | RenterFinder', url:'https://www.renterfinder.com/faq', desc:'FAQ for RenterFinder.com — rental fees, profile listing, how matching works, rent agreements, Model Tenancy Act, and rental laws across India. All answers here.' },
'terms':          { title:'Terms of Use — RenterFinder.com India', url:'https://www.renterfinder.com/terms', desc:'Read the Terms of Use for RenterFinder.com — India\'s rental-only platform. Covers user obligations, fees, refund policy, RERA, and Model Tenancy Act compliance.' },
'disclaimer':     { title:'Disclaimer — Liability & Platform Limits | RenterFinder', url:'https://www.renterfinder.com/disclaimer', desc:'Disclaimer for RenterFinder.com — liability limits, RERA non-applicability, third-party information, and user responsibilities on India\'s rental-only platform.' },
'privacy':        { title:'Privacy Policy — Data Protection | RenterFinder.com', url:'https://www.renterfinder.com/privacy', desc:'Privacy Policy for RenterFinder.com. Compliant with India\'s DPDP Act 2023. Learn how we collect, use and protect your data, and your rights as a Data Principal.' },
'mta':            { title:'Model Tenancy Act 2021 — Guide for Landlords & Renters', url:'https://www.renterfinder.com/mta', desc:'Reference guide to the Model Tenancy Act 2021 — security deposit caps, Rent Authority, Rental Tribunals, and landlord-tenant rights across India.' },
'refer':          { title:'Refer & Earn ₹500 — RenterFinder.com Referral Programme', url:'https://www.renterfinder.com/refer', desc:'Refer a friend to RenterFinder.com and earn ₹500 per successful deal. Simple 4-step process. Available across India. No cap on how many referrals you make.' },
'internship':     { title:'Internship at RenterFinder.com — Marketing & Content Roles', url:'https://www.renterfinder.com/internship', desc:'Internship at RenterFinder.com — India\'s first rental-only platform. Marketing, content, and business development roles. Open year-round. Apply by email.' },
'rent-agreement': { title:'Rent Agreement Template India — RenterFinder Reference', url:'https://www.renterfinder.com/rent-agreement', desc:'Download a sample rent agreement template for India. Understand key clauses — security deposit, lock-in period, maintenance and termination under MTA 2021.' },
'feedback':       { title:'Contact Us & Feedback — RenterFinder.com India', url:'https://www.renterfinder.com/feedback', desc:'Contact RenterFinder.com — send feedback, suggestions, bug reports or complaints. We respond in 2 business days. Help improve India\'s only rental-only platform.' },
'dashboard':      { title:'My Dashboard — Manage Your Profile | RenterFinder.com', url:'https://www.renterfinder.com/dashboard', desc:'Manage your RenterFinder.com profile, view your rental matches, and update listing details from your personal dashboard. Available to all registered users.' },
'blog':           { title:'Blog — Landlord Tips & Rental Guides | RenterFinder', url:'https://www.renterfinder.com/blog', desc:'Practical guides for landlords and renters in India — find tenants, avoid brokers, understand rent agreements and the Model Tenancy Act. No fluff.' }
};
function updatePageMeta(key) {
var m = _pageMeta[key] || _pageMeta['home'];
document.title = m.title;
var canon = document.querySelector('link[rel="canonical"]');
if (canon) canon.setAttribute('href', m.url);
var ogTitle = document.querySelector('meta[property="og:title"]');
if (ogTitle) ogTitle.setAttribute('content', m.title);
var ogDesc = document.querySelector('meta[property="og:description"]');
if (ogDesc) ogDesc.setAttribute('content', m.desc);
var ogUrl = document.querySelector('meta[property="og:url"]');
if (ogUrl) ogUrl.setAttribute('content', m.url);
var twTitle = document.querySelector('meta[name="twitter:title"]');
if (twTitle) twTitle.setAttribute('content', m.title);
var twDesc = document.querySelector('meta[name="twitter:description"]');
if (twDesc) twDesc.setAttribute('content', m.desc);
var metaDesc = document.querySelector('meta[name="description"]');
if (metaDesc) metaDesc.setAttribute('content', m.desc);
}
var _noindexPages = ['login','register-renter','register-landlord','feedback','disclaimer','dashboard'];
function updateRobotsMeta(key) {
var meta = document.querySelector('meta[name="robots"]');
if (!meta) return;
if (_noindexPages.indexOf(key) !== -1) {
meta.setAttribute('content', 'noindex, nofollow');
} else {
meta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
}
}
function showPage(key) {  }
function getActiveSession() {
var token = sessionStorage.getItem('rf_auth_token');
return token ? { isAuthenticated: true, token: token } : null;
}
function navigate(key) {
if (key === 'register-renter' || key === 'register-landlord') {
if (window.location.pathname.indexOf('login.html') === -1) {
var lp = window.location.pathname.indexOf('/blog/') !== -1 ? '../' : '';
window.location.href = lp + 'login.html#' + key;
return;
}
document.getElementById('login-panel').style.display = 'none';
document.getElementById('register-renter-panel').style.display = key === 'register-renter' ? 'block' : 'none';
document.getElementById('register-landlord-panel').style.display = key === 'register-landlord' ? 'block' : 'none';
window.scrollTo({top:0, behavior:'instant'});
return;
}
if (key === 'dashboard') {
var session = getActiveSession();
if (!session || !session.isAuthenticated) {
var lp2 = window.location.pathname.indexOf('/blog/') !== -1 ? '../' : '';
window.location.href = lp2 + 'login.html';
return;
}
}
const pageFiles = {"home": "index.html", "about": "about.html", "services": "services.html", "fees": "fees.html", "properties": "properties.html", "renters-list": "renters-list.html", "login": "login.html", "faq": "faq.html", "terms": "terms.html", "disclaimer": "disclaimer.html", "privacy": "privacy.html", "mta": "mta.html", "refer": "refer.html", "internship": "internship.html", "rent-agreement": "rent-agreement.html", "blog": "blog.html", "feedback": "feedback.html", "dashboard": "dashboard.html"};
var prefix = '';
if (window.location.pathname.indexOf('/blog/') !== -1) { prefix = '../'; }
if (pageFiles[key]) {
  var ov = document.getElementById('rf-page-transition');
  if (ov) {
    ov.style.opacity = '1';
    ov.style.pointerEvents = 'all';
    setTimeout(function(){ window.location.href = prefix + pageFiles[key]; }, 220);
  } else {
    window.location.href = prefix + pageFiles[key];
  }
}
}
function renderFooters() {
const tpl = document.getElementById('footer-template').innerHTML;
['home-footer','about-footer','services-footer','fees-footer','props-footer','rl-footer','faq-footer','terms-footer','disclaimer-footer','privacy-footer','mta-footer','refer-footer','internship-footer','rent-agreement-footer','feedback-footer','dashboard-footer','blog-footer'].forEach(id => {
const el = document.getElementById(id);
if(el && !el.innerHTML.trim()) el.innerHTML = tpl;
});
}
function initReveal() {
setTimeout(() => {
const io = new IntersectionObserver(entries => {
entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold:0.1});
document.querySelectorAll('.page.active .reveal').forEach(el => { el.classList.remove('visible'); io.observe(el); });
}, 50);
}
window.addEventListener('scroll', () => {
document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 10);
});
(function(){
var track, cards, dotsWrap, current = 0, total, perPage, autoTimer;
function getPerPage() {
var w = window.innerWidth;
if (w <= 700)  return 1;
if (w <= 998)  return 2;
if (w <= 1439) return 3;
return 4;
}
function initTesti() {
track    = document.getElementById('testi-track');
dotsWrap = document.getElementById('testi-dots');
if (!track) return;
cards    = track.querySelectorAll('.testi-card');
total    = cards.length;
perPage  = getPerPage();
var pages = Math.ceil(total / perPage);
dotsWrap.innerHTML = '';
for (var i = 0; i < pages; i++) {
var d = document.createElement('button');
d.className = 'testi-dot' + (i === 0 ? ' active' : '');
d.setAttribute('aria-label', 'Page ' + (i+1));
d.dataset.idx = i;
d.onclick = function(){ goTo(parseInt(this.dataset.idx)); };
dotsWrap.appendChild(d);
}
goTo(0);
startAuto();
}
function goTo(idx) {
perPage = getPerPage();
var pages = Math.ceil(total / perPage);
current = Math.max(0, Math.min(idx, pages - 1));
var cardW = cards[0].offsetWidth + 24; 
track.style.transform = 'translateX(-' + (current * perPage * cardW) + 'px)';
var dots = dotsWrap.querySelectorAll('.testi-dot');
dots.forEach(function(d, i){ d.classList.toggle('active', i === current); });
}
window.testiScroll = function(dir) {
perPage = getPerPage();
var pages = Math.ceil(total / perPage);
goTo((current + dir + pages) % pages);
resetAuto();
};
function startAuto() {
clearInterval(autoTimer);
autoTimer = setInterval(function(){ window.testiScroll(1); }, 5000);
}
function resetAuto() {
clearInterval(autoTimer);
startAuto();
}
var resizeTimer;
window.addEventListener('resize', function(){
clearTimeout(resizeTimer);
resizeTimer = setTimeout(initTesti, 120);
});
document.addEventListener('DOMContentLoaded', initTesti);
var _origNavigate = window.navigate;
var _testiNavHook = setInterval(function(){
if (window.navigate && window.navigate !== _testiNavHook) {
clearInterval(_testiNavHook);
var orig = window.navigate;
window.navigate = function(key) {
orig(key);
if (key === 'home') { setTimeout(initTesti, 80); }
};
}
}, 100);
window.addEventListener('load', function(){ setTimeout(initTesti, 100); });
})();
function toggleMenu() {
const nav = document.getElementById('nav-links');
const ham = document.getElementById('hamburger');
nav.classList.toggle('open');
ham.classList.toggle('open');
}
document.addEventListener('click', function(e) {
const nav = document.getElementById('nav-links');
const ham = document.getElementById('hamburger');
if(nav.classList.contains('open') && !nav.contains(e.target) && !ham.contains(e.target)) {
nav.classList.remove('open');
ham.classList.remove('open');
}
});
function setTab(el) { document.querySelectorAll('.filter-tabs .tab').forEach(t=>t.classList.remove('active')); el.classList.add('active'); }
function setRlFilter(el) { document.querySelectorAll('.rl-filters .rl-tag').forEach(t=>t.classList.remove('active')); el.classList.add('active'); }
function switchLoginTab(tab, formId) {
document.querySelectorAll('.login-tab').forEach(t=>t.classList.remove('active'));
tab.classList.add('active');
document.getElementById('login-form').style.display = formId==='login-form'?'block':'none';
document.getElementById('signup-form').style.display = formId==='signup-form'?'block':'none';
}
function switchLoginTabByName(formId) {
const tabs = document.querySelectorAll('.login-tab');
tabs.forEach(t=>t.classList.remove('active'));
(formId==='login-form'?tabs[0]:tabs[1]).classList.add('active');
document.getElementById('login-form').style.display = formId==='login-form'?'block':'none';
document.getElementById('signup-form').style.display = formId==='signup-form'?'block':'none';
}
function selectUserType(el) {
el.closest('.form-user-type').querySelectorAll('.user-type-btn').forEach(b=>b.classList.remove('active'));
el.classList.add('active');
}
let _fbCaptchaCode = '';
function refreshFbCaptcha() {
_fbCaptchaCode = generateCaptchaCode();
const el = document.getElementById('fbp-captcha-text');
if (el) el.textContent = _fbCaptchaCode;
const ans = document.getElementById('fbp-captcha-ans');
if (ans) ans.value = '';
}
function selectFbType(btn) {
document.querySelectorAll('#fbp-type-group button').forEach(b => {
b.style.background = '#fff';
b.style.borderColor = 'var(--border)';
b.style.color = 'var(--mid)';
});
btn.style.background = 'var(--dark)';
btn.style.borderColor = 'var(--dark)';
btn.style.color = 'var(--gold)';
}
function submitFeedbackPage(btn) {
const name = document.getElementById('fbp-name')?.value.trim();
const phone = document.getElementById('fbp-phone')?.value.trim();
const msg = document.getElementById('fbp-msg')?.value.trim();
const captchaAns = document.getElementById('fbp-captcha-ans')?.value.trim();
const selected = document.querySelector('#fbp-type-group button[style*="var(--dark)"]');
if (!name) { alert('Please enter your name.'); return; }
if (phone && !/^[6-9]\d{9}$/.test(phone)) { alert('Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8 or 9).'); return; }
if (!selected) { alert('Please select a feedback type.'); return; }
if (!msg) { alert('Please write your message.'); return; }
if (!captchaAns) { alert('Please enter the captcha code.'); return; }
if (captchaAns !== _fbCaptchaCode) { alert('Incorrect captcha. Please try again.'); refreshFbCaptcha(); return; }
btn.textContent = '✓ Sent!';
btn.disabled = true;
btn.style.background = '#2d7a4f';
btn.style.color = '#fff';
document.getElementById('fbp-success').style.display = 'block';
document.getElementById('fbp-name').value = '';
document.getElementById('fbp-email').value = '';
document.getElementById('fbp-phone').value = '';
document.getElementById('fbp-msg').value = '';
document.getElementById('fbp-captcha-ans').value = '';
document.querySelectorAll('#fbp-type-group button').forEach(b => {
b.style.background = '#fff';
b.style.borderColor = 'var(--border)';
b.style.color = 'var(--mid)';
});
refreshFbCaptcha();
}
function submitFooterFeedback(btn) {
const name = document.getElementById('fb-name')?.value.trim();
const msg = document.getElementById('fb-msg')?.value.trim();
if (!msg) { alert('Please write your feedback before sending.'); return; }
btn.textContent = '✓ Thank you!';
btn.classList.add('sent');
btn.disabled = true;
if (document.getElementById('fb-name')) document.getElementById('fb-name').value = '';
if (document.getElementById('fb-msg')) document.getElementById('fb-msg').value = '';
}
let featScrollIndex = 0;
const FEAT_COLS = 4;
function featScrollManual(dir) {
featScrollIndex = (featScrollIndex + dir + FEAT_COLS) % FEAT_COLS;
featScrollTo(featScrollIndex);
}
function featScrollTo(idx) {
featScrollIndex = idx;
const outer = document.getElementById('feat-scroll-mobile');
const track = outer?.querySelector('.feat-scroll-track');
if (!track) return;
track.classList.remove('scrolling');
clearTimeout(window._featScrollResume);
window._featScrollResume = setTimeout(() => {
if (document.getElementById('feat-scroll-mobile')) track.classList.add('scrolling');
}, 3000);
const cols = track.querySelectorAll('.feat-col');
if (cols[idx]) {
const colLeft = cols[idx].offsetLeft;
outer.scrollTo({ left: colLeft - 16, behavior: 'smooth' });
}
document.querySelectorAll('.feat-scroll-dot').forEach((d, i) => {
d.classList.toggle('active', i === idx);
});
}
function initValuesCarousel() {
const scroll = document.getElementById('values-scroll');
const nav = document.getElementById('values-nav');
if (!scroll || !nav) return;
if (window.innerWidth > 768) { nav.style.display = 'none'; return; }
const cards = scroll.querySelectorAll('.value-card');
const total = cards.length;
nav.style.display = 'flex';
const dotsEl = document.getElementById('values-dots');
dotsEl.innerHTML = '';
for (let i = 0; i < total; i++) {
const d = document.createElement('div');
d.className = 'values-nav-dot' + (i === 0 ? ' active' : '');
d.onclick = () => valuesScrollTo(i);
dotsEl.appendChild(d);
}
scroll.addEventListener('scroll', () => {
const cardW = cards[0] ? cards[0].offsetWidth + 16 : 1;
const idx = Math.round(scroll.scrollLeft / cardW);
updateValuesMask(idx, total);
document.querySelectorAll('.values-nav-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
document.getElementById('values-prev').classList.toggle('disabled', idx === 0);
document.getElementById('values-next').classList.toggle('disabled', idx >= total - 1);
}, { passive: true });
updateValuesMask(0, total);
}
function updateValuesMask(idx, total) {
const scroll = document.getElementById('values-scroll');
if (!scroll) return;
scroll.classList.remove('at-end', 'at-middle');
if (idx === 0) {  }
else if (idx >= total - 1) scroll.classList.add('at-end');
else scroll.classList.add('at-middle');
}
function valuesScrollTo(idx) {
const scroll = document.getElementById('values-scroll');
const cards = scroll ? scroll.querySelectorAll('.value-card') : [];
if (!cards[idx]) return;
scroll.scrollTo({ left: cards[idx].offsetLeft - 24, behavior: 'smooth' });
}
function valuesNav(dir) {
const scroll = document.getElementById('values-scroll');
const cards = scroll ? scroll.querySelectorAll('.value-card') : [];
const cardW = cards[0] ? cards[0].offsetWidth + 16 : 1;
const current = Math.round(scroll.scrollLeft / cardW);
valuesScrollTo(Math.max(0, Math.min(cards.length - 1, current + dir)));
}
function initPromiseCarousel() {
const scroll = document.getElementById('promise-scroll');
const nav = document.getElementById('promise-nav');
if (!scroll || !nav) return;
if (window.innerWidth > 768) { nav.style.display = 'none'; return; }
const cards = scroll.querySelectorAll('.promise-card');
const total = cards.length;
nav.style.display = 'flex';
const dotsEl = document.getElementById('promise-dots');
dotsEl.innerHTML = '';
for (let i = 0; i < total; i++) {
const d = document.createElement('div');
d.className = 'values-nav-dot' + (i === 0 ? ' active' : '');
d.onclick = () => promiseScrollTo(i);
dotsEl.appendChild(d);
}
scroll.addEventListener('scroll', () => {
const cardW = cards[0] ? cards[0].offsetWidth + 16 : 1;
const idx = Math.round(scroll.scrollLeft / cardW);
updatePromiseMask(idx, total);
document.querySelectorAll('#promise-dots .values-nav-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
document.getElementById('promise-prev').classList.toggle('disabled', idx === 0);
document.getElementById('promise-next').classList.toggle('disabled', idx >= total - 1);
}, { passive: true });
updatePromiseMask(0, total);
}
function updatePromiseMask(idx, total) {
const scroll = document.getElementById('promise-scroll');
if (!scroll) return;
scroll.classList.remove('at-end', 'at-middle');
if (idx >= total - 1) scroll.classList.add('at-end');
else if (idx > 0) scroll.classList.add('at-middle');
}
function promiseScrollTo(idx) {
const scroll = document.getElementById('promise-scroll');
const cards = scroll ? scroll.querySelectorAll('.promise-card') : [];
if (!cards[idx]) return;
scroll.scrollTo({ left: cards[idx].offsetLeft - 24, behavior: 'smooth' });
}
function promiseNav(dir) {
const scroll = document.getElementById('promise-scroll');
const cards = scroll ? scroll.querySelectorAll('.promise-card') : [];
const cardW = cards[0] ? cards[0].offsetWidth + 16 : 1;
const current = Math.round(scroll.scrollLeft / cardW);
promiseScrollTo(Math.max(0, Math.min(cards.length - 1, current + dir)));
}
function toggleFav(el) { el.textContent = el.textContent==='♡'?'♥':'♡'; el.style.color = el.textContent==='♥'?'#c9a668':''; }
const featureData = [
{ icon:'🏠', title:'No Buying, No Selling — ONLY RENTING.', content:`<p>RenterFinder.com is a new initiative in India to create a fully dedicated portal for property renting services only. No buying or selling on this portal, so Indian renters and landlords can focus smoothly on property renting matters only.</p><p>It helps users with an easy and comfortable property renting search at affordable Platform Service Fees, without the distractions of sales listings.</p>` },
{ icon:`<div style='display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:50%;position:relative;overflow:hidden;border:1.5px solid rgba(201,166,104,0.3);background:rgba(201,166,104,0.12);'><div style='position:absolute;inset:0;display:flex;flex-direction:column;overflow:hidden;opacity:0.35;'><div style='flex:1;background:#FF9933;'></div><div style='flex:1;background:#ffffff;'></div><div style='flex:1;background:#138808;'></div></div><span style='position:relative;z-index:1;font-size:13px;font-weight:800;color:#c9a668;letter-spacing:0.5px;font-family:Outfit,sans-serif;'>IND</span></div>`, title:'Services Available All Over India', content:`<p>RenterFinder.com provides services across India — both rural and urban. Anyone from any region of India can utilize our services without any hurdles or third-party involvement.</p><p>Renters or Landlords from any region, small town or neighborhood in India can advertise their requirements. No city or town restrictions — we are truly pan-India.</p>` },
{ icon:'📋', title:'Prospective Renters\' List — A World First', content:`<p>A new feature introduced for the first time in the world. Here, renters can publish their profiles based on their requirements. Landlords can shortlist renters from the Renters' List and select one to offer their property for rent.</p><p>This unique feature reverses the traditional search dynamic — instead of only renters searching for properties, landlords can now actively search for and select the most eligible renters that fit their requirements. This saves time for both parties.</p>` },
{ icon:'⏱️', title:'Limited Profiles for Easy Search', content:`<p>We charge a Profile Listing Fee of ₹125/- for 3 months. This helps us create and maintain limited genuine profiles, keeping the portal uncluttered. Users can search for their requirements easily and comfortably.</p><p>Since all listings are posted for 3 months only and auto-deactivate, the portal is always clutter-free. The limited number of profiles — all of which are active and genuine — makes search easy and quick for all users.</p>` },
{ icon:'💰', title:'Affordable for All — Minimal Platform Fee', content:`<p>We charge a Profile Listing Fee of ₹125/- for 3 months. Our Platform Service Fee is only 12 days' rent from each party — sometimes even less with offer codes.</p><p>In contrast, property agents charge between 15 to 90 days' rent depending on the city, locality, and total period of the rent agreement. RenterFinder.com makes professional rental matchmaking affordable for everyone, not just those in big cities.</p>` },
{ icon:'👁️', title:'All Fees Visible — No Hidden Charges', content:`<p>All our fees are clearly mentioned under the "Fees" tab on our website. There are no hidden charges at all. Please note that we don't call or contact users after registration or profile listing to ask for additional fees for any premium services (to enhance profile visibility or for any guarantee etc.).</p><p>What you see is exactly what you pay. Two fees only: Profile Listing Fee and Platform Service Fee (including all taxes). Complete transparency — always.</p>` },
{ icon:'🤝', title:'Only Introduction Service', content:`<p>We only introduce prospective renters to potential landlords based on their profile match and after a doubt-clearing chat between them. Both parties can negotiate directly about rent or rental terms and conditions.</p><p>There will be no third-party or agent involvement in finalizing the deal. RenterFinder.com steps back after the introduction — we connect you and let you develop the relationship directly for a successful transparent deal.</p>` },
{ icon:'🎓', title:'Private School for Property Renting', content:`<p>We operate like a private school for property rentals. You can experience our professionalism, transparent culture, responsive nature, work ethic, positive attitude, and commitment to client satisfaction by joining as a member for a minimal Profile Listing Fee.</p><p>Just as a private school maintains standards through selectivity and structure, we maintain a high-quality rental marketplace through paid listings, manual review, moderated introductions, and clear processes — ensuring a premium experience for all users.</p>` },
];
function openFeatureModal(idx) {
const d = featureData[idx];
document.getElementById('feature-modal-content').innerHTML = `
<div style="font-size:36px;margin-bottom:16px;display:flex;align-items:center;justify-content:center;">${d.icon}</div>
<h3 style="font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:700;color:var(--dark);margin-bottom:16px;">${d.title}</h3>
<div style="font-size:14.5px;color:#666;line-height:1.75;">${d.content}</div>
<button onclick="closeFeatureModal()" style="margin-top:24px;background:#040429;color:#c9a668;border:none;padding:11px 24px;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;letter-spacing:0.5px;">Close</button>
`;
const overlay = document.getElementById('feature-modal-overlay');
overlay.style.display = 'flex';
document.body.style.overflow = 'hidden';
}
function closeFeatureModal() {
document.getElementById('feature-modal-overlay').style.display = 'none';
document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key==='Escape') closeFeatureModal(); });
let _loginCaptchaCode = '';
function generateCaptchaCode() {
const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
let code = '';
for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
return code;
}
function refreshLoginCaptcha() {
_loginCaptchaCode = generateCaptchaCode();
const el = document.getElementById('login-captcha-text');
if (el) el.textContent = _loginCaptchaCode;
}
function submitLogin() {
const mobile = document.getElementById('login-mobile')?.value.trim();
const captcha = document.getElementById('login-captcha-input')?.value.trim();
if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) { alert('Please enter a valid 10-digit Indian mobile number.'); return; }
if (!captcha) { alert('Please enter the captcha.'); return; }
if (captcha !== _loginCaptchaCode) { alert('Incorrect captcha. Please try again.'); refreshLoginCaptcha(); document.getElementById('login-captcha-input').value = ''; return; }
alert('Login submitted! (Backend integration pending)');
}
function showLoginPanel() {
document.getElementById('login-panel').style.display = 'block';
document.getElementById('register-renter-panel').style.display = 'none';
document.getElementById('register-landlord-panel').style.display = 'none';
}
const _legalTitles = { terms: 'Terms of Use', disclaimer: 'Disclaimer', privacy: 'Privacy Policy', mta: 'Match Terms Agreement' };
function openLegalModal(pageKey) {
const pageEl = document.getElementById('page-' + pageKey);
if (!pageEl) return;
const body = document.getElementById('legal-modal-body');
let html = '';
Array.from(pageEl.children).forEach(child => {
if (child.id && child.id.endsWith('-footer')) return;
html += child.outerHTML;
});
body.innerHTML = html;
document.getElementById('legal-modal-bar-title').textContent = _legalTitles[pageKey] || pageKey;
document.getElementById('legal-modal-overlay').classList.add('open');
body.scrollTop = 0;
document.body.style.overflow = 'hidden';
}
function closeLegalModal() {
document.getElementById('legal-modal-overlay').classList.remove('open');
document.getElementById('legal-modal-body').innerHTML = '';
document.body.style.overflow = '';
}
function toggleFaq(el) {
const item = el.parentElement;
item.classList.toggle('open');
}
const _regCaptchaCodes = { renter: '', landlord: '' };
function refreshRegCaptcha(type) {
const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
let code = '';
for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
_regCaptchaCodes[type] = code;
const el = document.getElementById(type + '-captcha-text');
if (el) el.textContent = code;
}
function showFileName(input, targetId) {
const el = document.getElementById(targetId);
if (el && input.files && input.files[0]) {
el.textContent = '✓ ' + input.files[0].name;
}
}
const stateDistricts = {
'Delhi': ['Central Delhi','East Delhi','New Delhi','North Delhi','North East Delhi','North West Delhi','Shahdara','South Delhi','South East Delhi','South West Delhi','West Delhi'],
'Maharashtra': ['Ahmednagar','Akola','Amravati','Aurangabad','Beed','Bhandara','Buldhana','Chandrapur','Dhule','Gadchiroli','Gondia','Hingoli','Jalgaon','Jalna','Kolhapur','Latur','Mumbai City','Mumbai Suburban','Nagpur','Nanded','Nandurbar','Nashik','Osmanabad','Palghar','Parbhani','Pune','Raigad','Ratnagiri','Sangli','Satara','Sindhudurg','Solapur','Thane','Wardha','Washim','Yavatmal'],
'Karnataka': ['Bagalkot','Ballari','Belagavi','Bengaluru Rural','Bengaluru Urban','Bidar','Chamarajanagar','Chikkaballapur','Chikkamagaluru','Chitradurga','Dakshina Kannada','Davanagere','Dharwad','Gadag','Hassan','Haveri','Kalaburagi','Kodagu','Kolar','Koppal','Mandya','Mysuru','Raichur','Ramanagara','Shivamogga','Tumakuru','Udupi','Uttara Kannada','Vijayapura','Yadgir'],
'Tamil Nadu': ['Ariyalur','Chengalpattu','Chennai','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kallakurichi','Kancheepuram','Kanyakumari','Karur','Krishnagiri','Madurai','Mayiladuthurai','Nagapattinam','Namakkal','Nilgiris','Perambalur','Pudukkottai','Ramanathapuram','Ranipet','Salem','Sivaganga','Tenkasi','Thanjavur','Theni','Thoothukudi','Tiruchirappalli','Tirunelveli','Tirupathur','Tiruppur','Tiruvallur','Tiruvannamalai','Tiruvarur','Vellore','Villupuram','Virudhunagar'],
'Uttar Pradesh': ['Agra','Aligarh','Ambedkar Nagar','Amethi','Amroha','Auraiya','Ayodhya','Azamgarh','Baghpat','Bahraich','Ballia','Balrampur','Banda','Barabanki','Bareilly','Basti','Bhadohi','Bijnor','Budaun','Bulandshahr','Chandauli','Chitrakoot','Deoria','Etah','Etawah','Farrukhabad','Fatehpur','Firozabad','Gautam Buddh Nagar','Ghaziabad','Ghazipur','Gonda','Gorakhpur','Hamirpur','Hapur','Hardoi','Hathras','Jalaun','Jaunpur','Jhansi','Kannauj','Kanpur Dehat','Kanpur Nagar','Kasganj','Kaushambi','Kushinagar','Lakhimpur Kheri','Lalitpur','Lucknow','Maharajganj','Mahoba','Mainpuri','Mathura','Mau','Meerut','Mirzapur','Moradabad','Muzaffarnagar','Pilibhit','Pratapgarh','Prayagraj','Raebareli','Rampur','Saharanpur','Sambhal','Sant Kabir Nagar','Shahjahanpur','Shamli','Shravasti','Siddharthnagar','Sitapur','Sonbhadra','Sultanpur','Unnao','Varanasi'],
'Bihar': ['Araria','Arwal','Aurangabad','Banka','Begusarai','Bhagalpur','Bhojpur','Buxar','Darbhanga','East Champaran','Gaya','Gopalganj','Jamui','Jehanabad','Kaimur','Katihar','Khagaria','Kishanganj','Lakhisarai','Madhepura','Madhubani','Munger','Muzaffarpur','Nalanda','Nawada','Patna','Purnia','Rohtas','Saharsa','Samastipur','Saran','Sheikhpura','Sheohar','Sitamarhi','Siwan','Supaul','Vaishali','West Champaran'],
'West Bengal': ['Alipurduar','Bankura','Birbhum','Cooch Behar','Dakshin Dinajpur','Darjeeling','Hooghly','Howrah','Jalpaiguri','Jhargram','Kalimpong','Kolkata','Malda','Murshidabad','Nadia','North 24 Parganas','Paschim Bardhaman','Paschim Medinipur','Purba Bardhaman','Purba Medinipur','Purulia','South 24 Parganas','Uttar Dinajpur'],
'Rajasthan': ['Ajmer','Alwar','Banswara','Baran','Barmer','Bharatpur','Bhilwara','Bikaner','Bundi','Chittorgarh','Churu','Dausa','Dholpur','Dungarpur','Hanumangarh','Jaipur','Jaisalmer','Jalore','Jhalawar','Jhunjhunu','Jodhpur','Karauli','Kota','Nagaur','Pali','Pratapgarh','Rajsamand','Sawai Madhopur','Sikar','Sirohi','Sri Ganganagar','Tonk','Udaipur'],
'Gujarat': ['Ahmedabad','Amreli','Anand','Aravalli','Banaskantha','Bharuch','Bhavnagar','Botad','Chhota Udaipur','Dahod','Dang','Devbhoomi Dwarka','Gandhinagar','Gir Somnath','Jamnagar','Junagadh','Kheda','Kutch','Mahisagar','Mehsana','Morbi','Narmada','Navsari','Panchmahal','Patan','Porbandar','Rajkot','Sabarkantha','Surat','Surendranagar','Tapi','Vadodara','Valsad'],
'Andhra Pradesh': ['Alluri Sitharama Raju','Anakapalli','Ananthapuramu','Annamayya','Bapatla','Chittoor','Dr. B.R. Ambedkar Konaseema','East Godavari','Eluru','Guntur','Kakinada','Krishna','Kurnool','Manyam','NTR','Nandyal','Nellore','Palnadu','Prakasam','Sri Balaji','Sri Sathya Sai','Srikakulam','Tirupati','Visakhapatnam','Vizianagaram','West Godavari','YSR Kadapa'],
'Telangana': ['Adilabad','Bhadradri Kothagudem','Hanumakonda','Hyderabad','Jagtial','Jangaon','Jayashankar Bhupalpally','Jogulamba Gadwal','Kamareddy','Karimnagar','Khammam','Kumuram Bheem','Mahabubabad','Mahabubnagar','Mancherial','Medak','Medchal-Malkajgiri','Mulugu','Nagarkurnool','Nalgonda','Narayanpet','Nirmal','Nizamabad','Peddapalli','Rajanna Sircilla','Rangareddy','Sangareddy','Siddipet','Suryapet','Vikarabad','Wanaparthy','Warangal','Yadadri Bhuvanagiri'],
'Kerala': ['Alappuzha','Ernakulam','Idukki','Kannur','Kasaragod','Kollam','Kottayam','Kozhikode','Malappuram','Palakkad','Pathanamthitta','Thiruvananthapuram','Thrissur','Wayanad'],
'Madhya Pradesh': ['Agar Malwa','Alirajpur','Anuppur','Ashoknagar','Balaghat','Barwani','Betul','Bhind','Bhopal','Burhanpur','Chhatarpur','Chhindwara','Damoh','Datia','Dewas','Dhar','Dindori','Guna','Gwalior','Harda','Hoshangabad','Indore','Jabalpur','Jhabua','Katni','Khandwa','Khargone','Mandla','Mandsaur','Morena','Narsinghpur','Neemuch','Niwari','Panna','Raisen','Rajgarh','Ratlam','Rewa','Sagar','Satna','Sehore','Seoni','Shahdol','Shajapur','Sheopur','Shivpuri','Sidhi','Singrauli','Tikamgarh','Ujjain','Umaria','Vidisha'],
'Haryana': ['Ambala','Bhiwani','Charkhi Dadri','Faridabad','Fatehabad','Gurugram','Hisar','Jhajjar','Jind','Kaithal','Karnal','Kurukshetra','Mahendragarh','Nuh','Palwal','Panchkula','Panipat','Rewari','Rohtak','Sirsa','Sonipat','Yamunanagar'],
'Punjab': ['Amritsar','Barnala','Bathinda','Faridkot','Fatehgarh Sahib','Fazilka','Ferozepur','Gurdaspur','Hoshiarpur','Jalandhar','Kapurthala','Ludhiana','Mansa','Moga','Mohali','Muktsar','Nawanshahr','Pathankot','Patiala','Rupnagar','Sangrur','Tarn Taran'],
'Himachal Pradesh': ['Bilaspur','Chamba','Hamirpur','Kangra','Kinnaur','Kullu','Lahaul and Spiti','Mandi','Shimla','Sirmaur','Solan','Una'],
'Jammu And Kashmir': ['Anantnag','Bandipora','Baramulla','Budgam','Doda','Ganderbal','Jammu','Kathua','Kishtwar','Kulgam','Kupwara','Poonch','Pulwama','Rajouri','Ramban','Reasi','Samba','Shopian','Srinagar','Udhampur'],
'Uttarakhand': ['Almora','Bageshwar','Chamoli','Champawat','Dehradun','Haridwar','Nainital','Pauri Garhwal','Pithoragarh','Rudraprayag','Tehri Garhwal','Udham Singh Nagar','Uttarkashi'],
'Jharkhand': ['Bokaro','Chatra','Deoghar','Dhanbad','Dumka','East Singhbhum','Garhwa','Giridih','Godda','Gumla','Hazaribagh','Jamtara','Khunti','Koderma','Latehar','Lohardaga','Pakur','Palamu','Ramgarh','Ranchi','Sahebganj','Seraikela Kharsawan','Simdega','West Singhbhum'],
'Odisha': ['Angul','Balangir','Balasore','Bargarh','Bhadrak','Boudh','Cuttack','Deogarh','Dhenkanal','Gajapati','Ganjam','Jagatsinghpur','Jajpur','Jharsuguda','Kalahandi','Kandhamal','Kendrapara','Kendujhar','Khordha','Koraput','Malkangiri','Mayurbhanj','Nabarangpur','Nayagarh','Nuapada','Puri','Rayagada','Sambalpur','Subarnapur','Sundargarh'],
'Chhattisgarh': ['Balod','Baloda Bazar','Balrampur','Bastar','Bemetara','Bijapur','Bilaspur','Dantewada','Dhamtari','Durg','Gariaband','Gaurela-Pendra-Marwahi','Janjgir-Champa','Jashpur','Kabirdham','Kanker','Kondagaon','Korba','Koriya','Mahasamund','Mungeli','Narayanpur','Raigarh','Raipur','Rajnandgaon','Sukma','Surajpur','Surguja'],
'Assam': ['Bajali','Baksa','Barpeta','Biswanath','Bongaigaon','Cachar','Charaideo','Chirang','Darrang','Dhemaji','Dhubri','Dibrugarh','Dima Hasao','Goalpara','Golaghat','Hailakandi','Hojai','Jorhat','Kamrup Metropolitan','Kamrup','Karbi Anglong','Karimganj','Kokrajhar','Lakhimpur','Majuli','Morigaon','Nagaon','Nalbari','Sivasagar','Sonitpur','South Salmara-Mankachar','Tinsukia','Udalguri','West Karbi Anglong'],
'Goa': ['North Goa','South Goa'],
'Manipur': ['Bishnupur','Chandel','Churachandpur','Imphal East','Imphal West','Jiribam','Kakching','Kamjong','Kangpokpi','Noney','Pherzawl','Senapati','Tamenglong','Tengnoupal','Thoubal','Ukhrul'],
'Meghalaya': ['East Garo Hills','East Jaintia Hills','East Khasi Hills','Eastern West Khasi Hills','North Garo Hills','Ri Bhoi','South Garo Hills','South West Garo Hills','South West Khasi Hills','West Garo Hills','West Jaintia Hills','West Khasi Hills'],
'Mizoram': ['Aizawl','Champhai','Hnahthial','Khawzawl','Kolasib','Lawngtlai','Lunglei','Mamit','Saitual','Serchhip'],
'Nagaland': ['Chumoukedima','Dimapur','Kiphire','Kohima','Longleng','Mokokchung','Mon','Niuland','Noklak','Peren','Phek','Tseminyu','Tuensang','Wokha','Zunheboto'],
'Arunachal Pradesh': ['Anjaw','Changlang','Dibang Valley','East Kameng','East Siang','Itanagar Capital Complex','Kamle','Kra Daadi','Kurung Kumey','Lepa Rada','Lohit','Longding','Lower Dibang Valley','Lower Siang','Lower Subansiri','Namsai','Pakke-Kessang','Papum Pare','Shi Yomi','Siang','Tawang','Tirap','Upper Dibang Valley','Upper Siang','Upper Subansiri','West Kameng','West Siang'],
'Sikkim': ['East Sikkim','North Sikkim','Pakyong','Soreng','South Sikkim','West Sikkim'],
'Tripura': ['Dhalai','Gomati','Khowai','North Tripura','Sepahijala','Sipahijala','South Tripura','Unakoti','West Tripura'],
'Chandigarh': ['Chandigarh'],
'Puducherry': ['Karaikal','Mahe','Puducherry','Yanam'],
'Andaman And Nicobar Islands': ['Nicobar','North And Middle Andaman','South Andaman'],
'Lakshadweep': ['Lakshadweep'],
'Ladakh': ['Kargil','Leh'],
'The Dadra And Nagar Haveli And Daman And Diu': ['Dadra And Nagar Haveli','Daman','Diu'],
};
function populateDistrict(stateSelect, districtSelectId) {
const state = stateSelect.value;
const districtSel = document.getElementById(districtSelectId);
if (!districtSel) return;
districtSel.innerHTML = '<option value="">-- Select --</option>';
if (state && stateDistricts[state]) {
stateDistricts[state].forEach(d => {
const o = document.createElement('option');
o.value = d; o.textContent = d;
districtSel.appendChild(o);
});
}
}
function llResetSubDistrict() {
const sel = document.getElementById('ll-prop-subdistrict');
if (!sel) return;
const dist = document.getElementById('ll-prop-district')?.value;
sel.innerHTML = '<option value="">-- Select --</option>';
if (dist) {
sel.innerHTML += '<option value="N/A">Not Applicable / Enter in Address</option>';
const note = sel.closest('.rf-field')?.querySelector('div');
if (note) note.textContent = 'Sub-districts shown vary by location. If yours is not listed, select "Not Applicable".';
}
}
let _propPhotos = [];
const MAX_PHOTOS = 5;
const MAX_PHOTO_MB = 1;
function handlePropPhotoSelect(input) {
addPropPhotos(Array.from(input.files));
input.value = '';
}
function handlePropPhotoDrop(e) {
e.preventDefault();
const dz = document.getElementById('ll-photo-dropzone');
if (dz) { dz.style.borderColor='rgba(201,166,104,0.3)'; dz.style.background='rgba(255,255,255,0.02)'; }
addPropPhotos(Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/')));
}
function addPropPhotos(files) {
const remaining = MAX_PHOTOS - _propPhotos.length;
if (remaining <= 0) { alert('You can upload a maximum of 5 photographs.'); return; }
const toAdd = files.slice(0, remaining);
const oversized = toAdd.filter(f => f.size > MAX_PHOTO_MB * 1024 * 1024);
if (oversized.length) { alert(`${oversized.length} photo(s) exceed 1 MB and were skipped.`); }
const valid = toAdd.filter(f => f.size <= MAX_PHOTO_MB * 1024 * 1024);
valid.forEach(file => { _propPhotos.push(file); });
renderPropPhotoPreviews();
}
function removePropPhoto(idx) {
_propPhotos.splice(idx, 1);
renderPropPhotoPreviews();
}
function renderPropPhotoPreviews() {
const container = document.getElementById('ll-photo-previews');
const count = document.getElementById('ll-photo-count');
if (!container) return;
container.innerHTML = '';
_propPhotos.forEach((file, i) => {
const url = URL.createObjectURL(file);
const wrap = document.createElement('div');
wrap.style.cssText = 'position:relative;width:90px;height:90px;border-radius:8px;overflow:hidden;border:1.5px solid rgba(201,166,104,0.35);flex-shrink:0;';
wrap.innerHTML = `
<img loading="lazy" src="${url}" style="width:100%;height:100%;object-fit:cover;" alt="Rental property photo ${i+1} — uploaded by landlord on RenterFinder.com">
<button data-idx="${i}" class="prop-photo-del-btn" style="position:absolute;top:3px;right:3px;width:20px;height:20px;border-radius:50%;background:rgba(4,4,41,0.85);color:#fff;border:none;font-size:12px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;">×</button>
`;
wrap.querySelector('.prop-photo-del-btn').addEventListener('click', function(){ removePropPhoto(parseInt(this.dataset.idx)); });
container.appendChild(wrap);
});
if (count) {
count.textContent = _propPhotos.length > 0 ? `${_propPhotos.length} of ${MAX_PHOTOS} photos added` : '';
}
const dz = document.getElementById('ll-photo-dropzone');
if (dz) {
const txt = dz.querySelector('span');
if (_propPhotos.length >= MAX_PHOTOS && txt) {
txt.textContent = 'Maximum 5 photos added';
dz.style.opacity = '0.5';
dz.style.pointerEvents = 'none';
} else if (txt) {
txt.textContent = 'Drop photographs here to upload';
dz.style.opacity = '1';
dz.style.pointerEvents = '';
}
}
}
function submitLandlordReg() {
const required = [
{ id:'ll-name',           label:'Name' },
{ id:'ll-dob',            label:'Date of Birth' },
{ id:'ll-gender',         label:'Gender' },
{ id:'ll-religion',       label:'Religion' },
{ id:'ll-aadhar',         label:'Aadhaar No.' },
{ id:'ll-mobile',         label:'Mobile No. (WhatsApp)' },
{ id:'ll-email',          label:'Email' },
{ id:'ll-address',        label:'Address' },
{ id:'ll-pincode',        label:'Pincode (Personal)' },
{ id:'ll-personal-state', label:'State (Personal)' },
{ id:'ll-personal-district', label:'District (Personal)' },
{ id:'ll-prop-state',     label:'State (Property)' },
{ id:'ll-prop-district',  label:'District (Property)' },
{ id:'ll-prop-subdistrict', label:'Sub-District' },
{ id:'ll-prop-type',      label:'Property Type' },
{ id:'ll-prop-address',   label:'Property Address' },
{ id:'ll-prop-pincode',   label:'Property Pincode' },
{ id:'ll-available-for',  label:'Available For' },
{ id:'ll-furnishing',     label:'Furnishing Details' },
{ id:'ll-availability',   label:'Availability' },
{ id:'ll-carpet-area',    label:'Total Carpet Area' },
{ id:'ll-bhk',            label:'BHK' },
{ id:'ll-bathrooms',      label:'No. of Bathrooms' },
{ id:'ll-lift',           label:'Lift Facility' },
{ id:'ll-parking',        label:'Parking Availability' },
{ id:'ll-rent',           label:'Rent Ask' },
{ id:'ll-floor',          label:'Floor' },
{ id:'ll-total-floors',   label:'Out of Total Floors' },
];
for (const f of required) {
const el = document.getElementById(f.id);
if (!el || !el.value.trim()) {
alert(`Please fill in: ${f.label}`);
el && el.focus && el.focus();
return;
}
}
const aadhar = document.getElementById('ll-aadhar').value.trim();
if (!/^\d{12}$/.test(aadhar)) {
alert('Aadhaar number must be exactly 12 digits.'); return;
}
const mobile = document.getElementById('ll-mobile').value.trim();
if (!/^[6-9]\d{9}$/.test(mobile)) {
alert('Please enter a valid 10-digit WhatsApp mobile number (starting with 6, 7, 8, or 9).'); return;
}
const pincode = document.getElementById('ll-pincode').value.trim();
if (!/^\d{6}$/.test(pincode)) {
alert('Please enter a valid 6-digit pincode (personal address).'); return;
}
const propPincode = document.getElementById('ll-prop-pincode').value.trim();
if (!/^\d{6}$/.test(propPincode)) {
alert('Please enter a valid 6-digit pincode (property address).'); return;
}
const email = document.getElementById('ll-email').value.trim();
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
alert('Please enter a valid email address.'); return;
}
if (_propPhotos.length === 0) {
alert('Please upload at least one property photograph.'); return;
}
if (!document.getElementById('ll-undertaking').checked) {
alert('Please read and accept the Undertaking to proceed.'); return;
}
const captchaInput = document.getElementById('landlord-captcha-input')?.value.trim();
if (!captchaInput) { alert('Please enter the captcha code.'); return; }
if (captchaInput !== _regCaptchaCodes['landlord']) {
alert('Incorrect captcha. Please try again.');
refreshRegCaptcha('landlord');
document.getElementById('landlord-captcha-input').value = '';
return;
}
alert('✓ Landlord registration submitted successfully!\n\nOur team will review and activate your listing within 48 hours.\nThank you for choosing RenterFinder.com.');
showLoginPanel();
}
function submitRenterReg() {
const required = [
{ id:'rn-name',              label:'Name' },
{ id:'rn-dob',               label:'Date of Birth' },
{ id:'rn-marital-status',    label:'Marital Status' },
{ id:'rn-gender',            label:'Gender' },
{ id:'rn-aadhar',            label:'Aadhaar No.' },
{ id:'rn-mobile',            label:'Mobile No. (WhatsApp)' },
{ id:'rn-email',             label:'Email' },
{ id:'rn-occupation',        label:'Occupation' },
{ id:'rn-native-state',      label:'Native State' },
{ id:'renter-native-district', label:'Native District' },
{ id:'rn-religion',          label:'Religion' },
{ id:'rn-category',          label:'Category' },
{ id:'rn-parking',           label:'Parking Requirement' },
{ id:'rn-address',           label:'Present Address' },
{ id:'rn-present-state',     label:'Present State' },
{ id:'renter-present-district', label:'Present District' },
{ id:'rn-pincode',           label:'Pincode (Present Address)' },
{ id:'rn-family-size',       label:'Family Size' },
{ id:'rn-pref-state',        label:'Preferred State' },
{ id:'renter-pref-district', label:'Preferred District' },
{ id:'rn-prop-type',         label:'Preferred Property Type' },
{ id:'rn-size',              label:'Size' },
{ id:'rn-bhk',               label:'BHK' },
{ id:'rn-movein-date',       label:'Move-in Date' },
{ id:'rn-duration',          label:'Duration of Stay' },
];
const maritalStatus = document.getElementById('rn-marital-status')?.value;
if (maritalStatus === 'Yes') {
if (!document.getElementById('rn-spouse-name')?.value.trim()) {
alert('Please fill in: Spouse Name'); document.getElementById('rn-spouse-name').focus(); return;
}
if (!document.getElementById('rn-spouse-working')?.value) {
alert('Please fill in: Spouse Working?'); document.getElementById('rn-spouse-working').focus(); return;
}
if (document.getElementById('rn-spouse-working')?.value === 'Yes' && !document.getElementById('rn-spouse-occupation')?.value.trim()) {
alert('Please fill in: Spouse Occupation'); document.getElementById('rn-spouse-occupation').focus(); return;
}
}
for (const f of required) {
const el = document.getElementById(f.id);
if (!el || !el.value.trim()) {
alert(`Please fill in: ${f.label}`);
el && el.focus && el.focus();
return;
}
}
const aadhar = document.getElementById('rn-aadhar').value.trim();
if (!/^\d{12}$/.test(aadhar)) {
alert('Aadhaar number must be exactly 12 digits.'); return;
}
const mobile = document.getElementById('rn-mobile').value.trim();
if (!/^[6-9]\d{9}$/.test(mobile)) {
alert('Please enter a valid 10-digit WhatsApp mobile number (starting with 6, 7, 8, or 9).'); return;
}
const pincode = document.getElementById('rn-pincode').value.trim();
if (!/^\d{6}$/.test(pincode)) {
alert('Please enter a valid 6-digit pincode for your present address.'); return;
}
const email = document.getElementById('rn-email').value.trim();
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
alert('Please enter a valid email address.'); return;
}
if (!document.getElementById('renter-undertaking').checked) {
alert('Please read and accept the Undertaking to proceed.'); return;
}
const captchaInput = document.getElementById('renter-captcha-input')?.value.trim();
if (!captchaInput) { alert('Please enter the captcha code.'); return; }
if (captchaInput !== _regCaptchaCodes['renter']) {
alert('Incorrect captcha. Please try again.');
refreshRegCaptcha('renter');
document.getElementById('renter-captcha-input').value = '';
return;
}
alert('✓ Renter registration submitted successfully!\n\nOur team will review and activate your profile within 48 hours.\nThank you for choosing RenterFinder.com.');
showLoginPanel();
}
document.addEventListener('DOMContentLoaded', () => {
renderFooters();
initReveal();
refreshFbCaptcha();
refreshLoginCaptcha();
refreshRegCaptcha('renter');
refreshRegCaptcha('landlord');
initValuesCarousel();
initPromiseCarousel();
window.addEventListener('resize', initValuesCarousel);
window.addEventListener('resize', initPromiseCarousel);
const availDate = document.getElementById('ll-avail-date');
if (availDate) {
const today = new Date();
const maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 3);
availDate.min = today.toISOString().split('T')[0];
availDate.max = maxDate.toISOString().split('T')[0];
}
const featOuter = document.getElementById('feat-scroll-mobile');
if (featOuter) {
const featTrack = featOuter.querySelector('.feat-scroll-track');
if (featTrack) {
new IntersectionObserver(entries => {
entries.forEach(e => {
if (e.isIntersecting) featTrack.classList.add('scrolling');
else featTrack.classList.remove('scrolling');
});
}, { threshold: 0.3 }).observe(featOuter);
featOuter.addEventListener('scroll', () => {
const cols = featTrack.querySelectorAll('.feat-col');
let closest = 0, minDist = Infinity;
cols.forEach((col, i) => {
if (i >= FEAT_COLS) return;
const dist = Math.abs(col.offsetLeft - featOuter.scrollLeft);
if (dist < minDist) { minDist = dist; closest = i; }
});
featScrollIndex = closest;
document.querySelectorAll('.feat-scroll-dot').forEach((d, i) => d.classList.toggle('active', i === closest));
}, { passive: true });
}
}
});
function initDashboard() {
const user = window._dashboardUser || null;
const name       = user?.name       || 'User';
const type       = user?.type       || 'renter';   
const memberId   = user?.memberId   || 'RF-0000-00000';
const joinedDate = user?.joinedDate || '—';
const status     = user?.status     || 'active';
const mobile     = user?.mobile     || '—';
document.getElementById('db-welcome-name').innerHTML =
`Welcome back, <em style="color:var(--gold);font-style:italic;">${name.split(' ')[0]}</em>`;
document.getElementById('db-avatar').textContent = name.charAt(0).toUpperCase();
document.getElementById('db-profile-name-display').textContent = name;
document.getElementById('db-profile-mobile-display').textContent = `Mobile: ${mobile}`;
document.getElementById('db-member-id').textContent = memberId;
document.getElementById('db-user-type-label').textContent = type === 'landlord' ? 'Landlord' : 'Renter';
document.getElementById('db-joined-date').textContent = joinedDate;
const badge = document.getElementById('db-status-badge');
const colors = { active: ['rgba(45,122,79,0.2)','rgba(45,122,79,0.5)','#4caf7d'], pending: ['rgba(180,130,0,0.2)','rgba(180,130,0,0.5)','#d4a017'], expired: ['rgba(160,40,40,0.2)','rgba(160,40,40,0.5)','#e05555'] };
const c = colors[status] || colors.active;
badge.style.background = c[0]; badge.style.borderColor = c[1];
badge.querySelector('span:first-child').style.background = c[2];
badge.querySelector('span:last-child').style.color = c[2];
badge.querySelector('span:last-child').textContent = status.charAt(0).toUpperCase() + status.slice(1);
document.getElementById('db-tab-list-label').textContent =
type === 'landlord' ? '👥 Renters List' : '🏠 Properties List';
document.getElementById('db-profile-placeholder').style.display = 'none';
document.getElementById('db-renter-fields').style.display   = type === 'renter'   ? 'block' : 'none';
document.getElementById('db-landlord-fields').style.display = type === 'landlord' ? 'block' : 'none';
document.getElementById('db-renters-panel').style.display    = type === 'landlord' ? 'block' : 'none';
document.getElementById('db-properties-panel').style.display = type === 'renter'   ? 'block' : 'none';
document.getElementById('db-list-heading').textContent =
type === 'landlord' ? 'Browse Renters' : 'Available Properties';
dbSwitchTab('profile');
}
function dbSwitchTab(tab) {
  var tabs    = ['profile', 'list', 'chats', 'notifications'];
  var panels  = ['db-panel-profile', 'db-panel-list', 'db-panel-chats', 'db-panel-notifications'];
  var btnIds  = ['db-tab-profile', 'db-tab-list', 'db-tab-chats', 'db-tab-notifications'];

  tabs.forEach(function(t, i) {
    var panel = document.getElementById(panels[i]);
    var btn   = document.getElementById(btnIds[i]);
    var active = (t === tab);
    if (panel) panel.style.display = active ? 'block' : 'none';
    if (btn) {
      btn.style.background  = active ? 'var(--gold)' : 'rgba(255,255,255,0.07)';
      btn.style.color       = active ? 'var(--dark)' : 'rgba(255,255,255,0.55)';
      btn.style.fontWeight  = active ? '700' : '600';
    }
  });

  // Build chat slots when switching to chats tab
  if (tab === 'chats' && typeof buildChatSlots === 'function') {
    buildChatSlots();
  }

  // Show correct list panel (renters vs properties) when on list tab
  if (tab === 'list' && typeof window._dashboardUser !== 'undefined') {
    var u = window._dashboardUser;
    if (u) {
      var rentersPanel    = document.getElementById('db-renters-panel');
      var propertiesPanel = document.getElementById('db-properties-panel');
      if (rentersPanel && propertiesPanel) {
        rentersPanel.style.display    = (u.type === 'landlord') ? 'block' : 'none';
        propertiesPanel.style.display = (u.type === 'renter')   ? 'block' : 'none';
      }
    }
  }
}
function dbToggleEdit() {
const inputs = document.querySelectorAll('#db-panel-profile .db-field-input');
const isEditing = !inputs[0]?.disabled;
if (isEditing) { dbSaveProfile(); return; }
inputs.forEach(el => el.disabled = false);
document.getElementById('db-edit-btn').style.display = 'none';
document.getElementById('db-save-btn').style.display = 'inline-block';
}
function dbSaveProfile() {
const inputs = document.querySelectorAll('#db-panel-profile .db-field-input');
inputs.forEach(el => el.disabled = true);
document.getElementById('db-edit-btn').style.display = 'inline-block';
document.getElementById('db-save-btn').style.display = 'none';
alert('Profile changes saved! (Backend integration pending)');
}
var _rnProgressFields = [
'rn-name','rn-dob','rn-marital-status','rn-gender','rn-aadhar','rn-mobile','rn-email',
'rn-occupation','rn-income','rn-native-state','renter-native-district','rn-religion',
'rn-category','rn-parking','rn-address','rn-present-state','renter-present-district','rn-pincode',
'rn-family-size','rn-pref-state','renter-pref-district','rn-prop-type',
'rn-size','rn-bhk','rn-rent-range','rn-movein-date','rn-duration'
];
var _llProgressFields = [
'll-name','ll-father-name','ll-dob','ll-gender','ll-religion','ll-aadhar','ll-mobile','ll-email',
'll-address','ll-pincode','ll-personal-state','ll-personal-district',
'll-prop-state','ll-prop-district','ll-prop-subdistrict','ll-prop-type',
'll-prop-address','ll-prop-pincode','ll-available-for','ll-furnishing','ll-availability',
'll-carpet-area','ll-bhk','ll-bathrooms','ll-lift','ll-parking',
'll-rent','ll-floor','ll-total-floors'
];
function _calcProgress(fields) {
var filled = 0;
fields.forEach(function(id) {
var el = document.getElementById(id);
if (el && el.value && el.value.trim() !== '') filled++;
});
return Math.round((filled / fields.length) * 100);
}
function _updateProgress(formKey) {
var fields = formKey === 'renter' ? _rnProgressFields : _llProgressFields;
var barId  = formKey === 'renter' ? 'rn-progress-bar' : 'll-progress-bar';
var lblId  = formKey === 'renter' ? 'rn-progress-label' : 'll-progress-label';
var pct = _calcProgress(fields);
var bar = document.getElementById(barId);
var lbl = document.getElementById(lblId);
if (bar) bar.style.width = pct + '%';
if (lbl) lbl.textContent = pct + '%';
}
function _attachProgressListeners(formKey) {
var fields = formKey === 'renter' ? _rnProgressFields : _llProgressFields;
fields.forEach(function(id) {
var el = document.getElementById(id);
if (!el) return;
var evt = (el.tagName === 'SELECT' || el.type === 'checkbox' || el.type === 'date') ? 'change' : 'input';
el.addEventListener(evt, function() { _updateProgress(formKey); });
});
if (formKey === 'renter') {
var fsHidden = document.getElementById('rn-family-size');
if (fsHidden) {
var origSet = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
var mo = new MutationObserver(function() { _updateProgress('renter'); });
mo.observe(fsHidden, { attributes: true, attributeFilter: ['value'] });
}
}
}
function saveDraft(formKey) {
var fields = formKey === 'renter' ? _rnProgressFields : _llProgressFields;
var extra  = formKey === 'renter'
? ['rn-mobile-alt','rn-caste','rn-office','rn-other-details','rn-pref-locality','rn-pref-subdistrict','rn-referral-source','rn-offer-code','rn-pref-floor']
: ['ll-mobile-alt','ll-description','ll-deposit','ll-maintenance','ll-referral-source','ll-offer-code'];
var draft = {};
fields.concat(extra).forEach(function(id) {
var el = document.getElementById(id);
if (el) draft[id] = el.value || '';
});
try {
sessionStorage.setItem('rf_draft_' + formKey, JSON.stringify(draft));
var btn = event && event.target;
if (btn) {
var orig = btn.textContent;
btn.textContent = '✓ Saved';
btn.style.color = 'var(--gold)';
btn.style.borderColor = 'var(--gold)';
setTimeout(function() {
btn.textContent = orig;
btn.style.color = 'rgba(201,166,104,0.75)';
btn.style.borderColor = 'rgba(201,166,104,0.35)';
}, 1800);
}
} catch(e) {
alert('Could not save draft. Storage may be unavailable in this browser.');
}
}
function _restoreDraft(formKey) {
try {
var raw = sessionStorage.getItem('rf_draft_' + formKey);
if (!raw) return;
var draft = JSON.parse(raw);
Object.keys(draft).forEach(function(id) {
var el = document.getElementById(id);
if (el && draft[id]) { el.value = draft[id]; }
});
_updateProgress(formKey);
} catch(e) {}
}
document.addEventListener('DOMContentLoaded', function() {
_attachProgressListeners('renter');
_attachProgressListeners('landlord');
_restoreDraft('renter');
_restoreDraft('landlord');
});
function toggleCommercial(el) {
var isOn = el.classList.toggle('comm-active');
el.style.background    = isOn ? 'rgba(201,166,104,0.18)' : 'rgba(201,166,104,0.07)';
el.style.borderColor   = isOn ? 'var(--gold)'            : 'rgba(201,166,104,0.2)';
var ind = document.getElementById('rn-comm-indicator');
ind.style.background   = isOn ? 'var(--gold)'            : 'rgba(255,255,255,0.15)';
ind.textContent        = isOn ? '\u2713' : '';
ind.style.color        = isOn ? 'var(--dark)'            : 'transparent';
document.getElementById('rn-bhk-block').style.display  = isOn ? 'none' : 'flex';
document.getElementById('rn-biz-block').style.display  = isOn ? 'flex' : 'none';
if (isOn) {
document.getElementById('rn-bhk').value = '';
} else {
var biz = document.getElementById('rn-biz-type');
if (biz) biz.value = '';
}
var pt = document.getElementById('rn-prop-type');
if (isOn) {
pt.innerHTML = [
'<option value="">-- Select --</option>',
'<option>Shop / Showroom - Independent</option>',
'<option>Space at Mall / Commercial Complex</option>',
'<option>Office Space</option>',
'<option>Co-Working Space</option>',
'<option>Bank / Clinic / Studio</option>',
'<option>Restaurant / Food Outlet</option>',
'<option>Commercial Land on Rent</option>',
'<option>Others</option>'
].join('');
} else {
pt.innerHTML = [
'<option value="">-- Select --</option>',
'<option>Any</option>',
'<option>Studio / 1 RK</option>',
'<option>Flat / Apartment</option>',
'<option>Flat in Society / Gated Community</option>',
'<option>Builder Floor (Independent)</option>',
'<option>Independent House / Villa</option>',
'<option>Duplex / Rowhouse</option>',
'<option>Co-Living / PG</option>',
'<option>Serviced Apartment</option>',
'<option>Penthouse</option>',
'<option>Farmhouse</option>',
'<option>Others</option>'
].join('');
}
}
(function() {
'use strict';
var CITIES = [
{ name:'Jaipur',     x:0.22, y:0.18 },
{ name:'Delhi',      x:0.34, y:0.12 },
{ name:'Lucknow',    x:0.52, y:0.17 },
{ name:'Patna',      x:0.64, y:0.22 },
{ name:'Kolkata',    x:0.76, y:0.30 },
{ name:'Ahmedabad',  x:0.12, y:0.35 },
{ name:'Bhopal',     x:0.38, y:0.38 },
{ name:'Mumbai',     x:0.14, y:0.52 },
{ name:'Pune',       x:0.18, y:0.59 },
{ name:'Hyderabad',  x:0.44, y:0.57 },
{ name:'Chennai',    x:0.60, y:0.68 },
{ name:'Bengaluru',  x:0.42, y:0.72 }
];
var canvas  = document.getElementById('about-arc-canvas');
if (!canvas) return;
var ctx     = canvas.getContext('2d');
var countEl = document.getElementById('about-arc-count');
var rafId, W, H, matchCount = 0, arcs = [], frameN = 0;
var PAD     = 0.06; 
var started = false;
function toCanvas(nx, ny) {
return [
PAD * W + nx * W * (1 - 2 * PAD),
PAD * H + ny * H * (1 - 2 * PAD)
];
}
function resize() {
var row = canvas.parentElement;
W = canvas.width  = row.clientWidth  || row.offsetWidth  || 400;
H = canvas.height = row.clientHeight || row.offsetHeight || 320;
}
function drawCities() {
var r = Math.max(4, W * 0.010);
CITIES.forEach(function(c) {
var p = toCanvas(c.x, c.y);
ctx.beginPath();
ctx.arc(p[0], p[1], r * 2.2, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(201,166,104,0.06)';
ctx.fill();
ctx.beginPath();
ctx.arc(p[0], p[1], r, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(201,166,104,0.60)';
ctx.fill();
ctx.beginPath();
ctx.arc(p[0], p[1], r * 0.45, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(201,166,104,0.95)';
ctx.fill();
var fontSize = Math.max(10, W * 0.026);
ctx.font = '600 ' + fontSize + 'px Outfit,sans-serif';
ctx.fillStyle = 'rgba(255,255,255,0.45)';
ctx.textAlign = 'center';
ctx.fillText(c.name, p[0], p[1] + r + fontSize * 0.95);
});
}
function spawnArc() {
var a = CITIES[Math.floor(Math.random() * CITIES.length)];
var b;
do { b = CITIES[Math.floor(Math.random() * CITIES.length)]; } while (b === a);
var pa = toCanvas(a.x, a.y);
var pb = toCanvas(b.x, b.y);
var mx = (pa[0] + pb[0]) / 2;
var my = Math.min(pa[1], pb[1]) - Math.abs(pb[0] - pa[0]) * 0.55;
arcs.push({
x1:pa[0], y1:pa[1], x2:pb[0], y2:pb[1],
mx:mx, my:my,
progress:0,
speed: 0.010 + Math.random() * 0.007,
isLandlord: Math.random() > 0.5
});
}
function drawArcs() {
arcs = arcs.filter(function(a) {
a.progress = Math.min(1, a.progress + a.speed);
var done = a.progress >= 1;
if (done) { matchCount++; countEl.textContent = matchCount; }
var col = a.isLandlord ? '201,166,104' : '110,212,168';
var alpha = a.progress < 0.15
? (a.progress / 0.15) * 0.85
: a.progress > 0.85
? ((1 - a.progress) / 0.15) * 0.85
: 0.85;
var steps = 60, end = Math.ceil(a.progress * steps);
ctx.beginPath();
for (var i = 0; i <= end; i++) {
var t  = i / steps;
var q  = 1 - t;
var bx = q*q*a.x1 + 2*q*t*a.mx + t*t*a.x2;
var by = q*q*a.y1 + 2*q*t*a.my + t*t*a.y2;
i === 0 ? ctx.moveTo(bx, by) : ctx.lineTo(bx, by);
}
ctx.strokeStyle = 'rgba(' + col + ',' + (alpha * 0.7) + ')';
ctx.lineWidth = Math.max(1.2, W * 0.003);
ctx.stroke();
var ht = a.progress, hq = 1 - ht;
var hx = hq*hq*a.x1 + 2*hq*ht*a.mx + ht*ht*a.x2;
var hy = hq*hq*a.y1 + 2*hq*ht*a.my + ht*ht*a.y2;
ctx.beginPath();
ctx.arc(hx, hy, Math.max(2.5, W * 0.007), 0, Math.PI*2);
ctx.fillStyle = 'rgba(' + col + ',' + alpha + ')';
ctx.fill();
var dr = Math.max(3.5, W * 0.009);
ctx.beginPath(); ctx.arc(a.x1, a.y1, dr, 0, Math.PI*2);
ctx.fillStyle = 'rgba(201,166,104,0.75)'; ctx.fill();
ctx.beginPath(); ctx.arc(a.x2, a.y2, dr, 0, Math.PI*2);
ctx.fillStyle = 'rgba(110,212,168,0.75)'; ctx.fill();
return !done;
});
}
function drawBackground() {
ctx.fillStyle = 'rgba(201,166,104,0.06)';
var cols = 10, rows = 8;
for (var r = 0; r <= rows; r++) {
for (var c = 0; c <= cols; c++) {
var gx = PAD * W + (c / cols) * W * (1 - 2 * PAD);
var gy = PAD * H + (r / rows) * H * (1 - 2 * PAD);
ctx.beginPath();
ctx.arc(gx, gy, 1.5, 0, Math.PI * 2);
ctx.fill();
}
}
ctx.strokeStyle = 'rgba(201,166,104,0.08)';
ctx.lineWidth = 1;
ctx.strokeRect(PAD * W, PAD * H, W * (1 - 2 * PAD), H * (1 - 2 * PAD));
}
function frame() {
ctx.clearRect(0, 0, W, H);
frameN++;
if (frameN % 50 === 0 && arcs.length < 7) spawnArc();
drawBackground();
drawCities();
drawArcs();
rafId = requestAnimationFrame(frame);
}
function start() {
if (started) return;
started = true;
resize();
spawnArc(); 
frame();
}
function stop() {
cancelAnimationFrame(rafId);
started = false;
arcs = [];
frameN = 0;
}
if (window.ResizeObserver) {
new ResizeObserver(function() {
resize();
}).observe(canvas.parentElement);
}
window.addEventListener('resize', resize);
var io = new IntersectionObserver(function(entries) {
if (entries[0].isIntersecting) { start(); }
else { stop(); }
}, { threshold: 0.05 });
io.observe(canvas.parentElement);
})();
(function(){
function setMoveinConstraints(){
var el = document.getElementById('rn-movein-date');
if(!el) return;
var today = new Date();
var maxDate = new Date(today);
maxDate.setMonth(maxDate.getMonth() + 3);
var fmt = function(d){ return d.toISOString().split('T')[0]; };
el.min = fmt(today);
el.max = fmt(maxDate);
}
document.addEventListener('DOMContentLoaded', setMoveinConstraints);
window.addEventListener('load', setMoveinConstraints);
var _origNav = window.navigate;
var _hookInterval = setInterval(function(){
if(window.navigate && window.navigate !== _hookInterval){
clearInterval(_hookInterval);
var _orig = window.navigate;
window.navigate = function(key){
_orig(key);
if(key === 'login') setTimeout(setMoveinConstraints, 120);
};
}
}, 100);
})();
(function(){
var _injectedSchemas = [];
function removeInjectedSchemas() {
_injectedSchemas.forEach(function(el) { if(el.parentNode) el.parentNode.removeChild(el); });
_injectedSchemas = [];
}
function injectSchema(obj) {
var s = document.createElement('script');
s.type = 'application/ld+json';
s.textContent = JSON.stringify(obj);
document.head.appendChild(s);
_injectedSchemas.push(s);
}
function injectServicesSchemas() {
injectSchema({
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{"@type":"ListItem","position":1,"name":"Home","item":"https://www.renterfinder.com/"},
{"@type":"ListItem","position":2,"name":"Services","item":"https://www.renterfinder.com/services"}
]
});
injectSchema({
"@context": "https://schema.org",
"@type": "WebPage",
"name": "Rental Services — RenterFinder.com | Renter Search & Property Search Across India",
"description": "Two dedicated rental services: Renter Search by Landlord and Rental Property Search by Renter. Broker-free, transparent fees, pan-India coverage. Platform service fee only 12 days' rent.",
"url": "https://www.renterfinder.com/services",
"inLanguage": "en-IN",
"isPartOf": {"@type":"WebSite","name":"RenterFinder.com","url":"https://www.renterfinder.com"},
"breadcrumb": {"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Home","item":"https://www.renterfinder.com/"},
{"@type":"ListItem","position":2,"name":"Services","item":"https://www.renterfinder.com/services"}
]},
"speakable": {"@type":"SpeakableSpecification","cssSelector":["h1","h2",".svc-card h3"]}
});
injectSchema({
"@context": "https://schema.org",
"@type": "Article",
"headline": "How RenterFinder.com Rental Matching Works — 3 Simple Steps",
"description": "Find a renter or rental property in three broker-free steps on RenterFinder.com — India's only rental-exclusive platform.",
"author": {"@type":"Organization","name":"RenterFinder.com","url":"https://www.renterfinder.com"},
"publisher": {"@type":"Organization","name":"RenterFinder.com","url":"https://www.renterfinder.com","logo":{"@type":"ImageObject","url":"https://www.renterfinder.com/logo.svg"}},
"url": "https://www.renterfinder.com/services",
"inLanguage": "en-IN",
"datePublished": "2025-06-07",
"dateModified": "2026-03-11",
"articleBody": "Step 1 — Match Profiles: Both renter and landlord upload their profiles. RenterFinder.com helps match requirements across a wide range of options — no broker needed. Step 2 — Chat & Clear Doubts: Once a match is identified, a moderated chat is facilitated to address queries — rent terms, bills, pets, property condition. All doubts cleared before paying anything. Step 3 — Property Viewing & Deal: After the 6-day advance is paid, contact details are shared and a property viewing is arranged at a mutually convenient date and time. Both parties negotiate directly.",
"isPartOf": {"@type":"WebSite","name":"RenterFinder.com","url":"https://www.renterfinder.com"}
});
injectSchema({
"@context": "https://schema.org",
"@type": "Service",
"serviceType": "Rental Property Matching",
"name": "Renter Search by Landlord",
"description": "Landlords browse the Prospective Renters' List — a curated directory of genuine tenants looking for 1BHK, 2BHK, 3BHK flats, apartments, houses, and shops for rent across India.",
"provider": {"@type":"Organization","name":"RenterFinder.com","url":"https://www.renterfinder.com","logo":"https://www.renterfinder.com/logo.svg"},
"areaServed": {"@type":"Country","name":"India"},
"serviceOutput": "Introduction between landlord and prospective renter for property viewing and direct negotiation",
"offers": {"@type":"Offer","price":"125","priceCurrency":"INR","description":"Profile listing fee for 3 months"}
});
injectSchema({
"@context": "https://schema.org",
"@type": "Service",
"serviceType": "Rental Property Search",
"name": "Rental Property Search by Renter",
"description": "Renters upload their profile and get discovered by property owners across India. Browse rental property listings, filter by city, BHK type, and budget. No brokers — landlords contact you directly.",
"provider": {"@type":"Organization","name":"RenterFinder.com","url":"https://www.renterfinder.com","logo":"https://www.renterfinder.com/logo.svg"},
"areaServed": {"@type":"Country","name":"India"},
"serviceOutput": "Introduction between renter and property owner for property viewing and direct negotiation",
"offers": {"@type":"Offer","price":"125","priceCurrency":"INR","description":"Profile listing fee for 3 months"}
});
}
function injectFeesSchemas() {
injectSchema({
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{"@type":"ListItem","position":1,"name":"Home","item":"https://www.renterfinder.com/"},
{"@type":"ListItem","position":2,"name":"Fees","item":"https://www.renterfinder.com/fees"}
]
});
injectSchema({
"@context": "https://schema.org",
"@type": "WebPage",
"name": "Rental Service Fees — RenterFinder.com | Profile Listing ₹125 + Platform Service Fee 12 Days Rent",
"description": "RenterFinder.com charges only two fees — Profile Listing Fee ₹125 for 3 months and Platform Service Fee of 12 days rent. Zero hidden charges. Lowest rental platform service fee in India.",
"url": "https://www.renterfinder.com/fees",
"inLanguage": "en-IN",
"isPartOf": {"@type":"WebSite","name":"RenterFinder.com","url":"https://www.renterfinder.com"},
"breadcrumb": {"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Home","item":"https://www.renterfinder.com/"},
{"@type":"ListItem","position":2,"name":"Fees","item":"https://www.renterfinder.com/fees"}
]},
"speakable": {"@type":"SpeakableSpecification","cssSelector":["h1","h2",".fee-amount",".fee-period"]}
});
injectSchema({
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{"@type":"Question","name":"What is the Profile Listing Fee on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"The Profile Listing Fee is ₹125 for 3 months. This fee is charged for use of the portal only — to upload your profile as a renter or landlord and search for suitable matches. Profile re-activation within 6 months costs ₹99."}},
{"@type":"Question","name":"What is the Platform Service Fee on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"The Platform Service Fee is 12 days' rent, split in two: 6 days' rent to arrange the formal property meeting (non-refundable), and 6 days' rent charged at deal closure when the rental agreement is signed."}},
{"@type":"Question","name":"Are there any hidden charges on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"No. RenterFinder.com charges only two types of fees — Profile Listing Fee and Platform Service Fee (including all taxes). There are no other hidden charges at all. What you see is exactly what you pay."}},
{"@type":"Question","name":"What happens if the rental deal is not finalised?","acceptedAnswer":{"@type":"Answer","text":"If the deal is not finalised and reported by both parties within 7 days of the meeting, RenterFinder.com provides 3 more match options within the next 3 months using the same advance payment at no extra cost."}}
]
});
injectSchema({
"@context": "https://schema.org",
"@type": "Product",
"name": "RenterFinder.com Rental Matching Service",
"description": "India's first rental-only property platform connecting landlords and tenants directly with transparent pricing.",
"brand": {"@type":"Brand","name":"RenterFinder.com"},
"offers": [
{"@type":"Offer","name":"Profile Listing Fee","price":"125","priceCurrency":"INR","description":"List your renter or landlord profile for 3 months","priceSpecification":{"@type":"UnitPriceSpecification","price":"125","priceCurrency":"INR","unitText":"3 months"}},
{"@type":"Offer","name":"Platform Service Fee","description":"12 days rent — 6 days to arrange property meeting + 6 days at deal closure. Lowest rental Platform Service Fee in India.","priceSpecification":{"@type":"UnitPriceSpecification","referenceQuantity":{"@type":"QuantitativeValue","value":"12","unitText":"days rent"}}}
]
});
}
function injectPropertiesSchemas() {
injectSchema({
"@context": "https://schema.org",
"@type": "ItemList",
"name": "Rental Property Listings — RenterFinder.com",
"description": "Browse rental property listings posted directly by landlords across India — 1BHK, 2BHK, 3BHK flats, apartments, independent houses, PG accommodations. No brokers. Transparent fees.",
"url": "https://www.renterfinder.com/properties",
"numberOfItems": 9,
"itemListElement": [
{"@type":"ListItem","position":1,"name":"Spacious 2BHK in South Delhi — Greater Kailash, New Delhi","url":"https://www.renterfinder.com/properties"},
{"@type":"ListItem","position":2,"name":"Modern 2BHK near Metro — Koramangala, Bangalore","url":"https://www.renterfinder.com/properties"},
{"@type":"ListItem","position":3,"name":"3BHK Sea-Facing Apartment — Bandra West, Mumbai","url":"https://www.renterfinder.com/properties"},
{"@type":"ListItem","position":4,"name":"1BHK in Gated Community — Banjara Hills, Hyderabad","url":"https://www.renterfinder.com/properties"},
{"@type":"ListItem","position":5,"name":"Furnished 2BHK — IT Corridor, Hinjewadi, Pune","url":"https://www.renterfinder.com/properties"},
{"@type":"ListItem","position":6,"name":"Studio Apartment near Lake — Salt Lake, Kolkata","url":"https://www.renterfinder.com/properties"},
{"@type":"ListItem","position":7,"name":"3BHK Independent Floor — Vasant Kunj, New Delhi","url":"https://www.renterfinder.com/properties"},
{"@type":"ListItem","position":8,"name":"1BHK in Tech Park Zone — Whitefield, Bangalore","url":"https://www.renterfinder.com/properties"},
{"@type":"ListItem","position":9,"name":"Luxury 3BHK — Powai Lake View, Mumbai","url":"https://www.renterfinder.com/properties"}
]
});
injectSchema({
"@context": "https://schema.org",
"@type": "Service",
"serviceType": "Rental Property Listing",
"name": "Rental Property Listings — Browse Flats & Houses for Rent Across India",
"description": "Browse 1BHK, 2BHK, 3BHK flats, apartments, independent houses, PG accommodations and more listed by landlords across Delhi, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Kolkata and all Indian cities. No brokers. All fees transparent.",
"provider": {"@type":"Organization","name":"RenterFinder.com","url":"https://www.renterfinder.com","logo":"https://www.renterfinder.com/logo.svg"},
"areaServed": {"@type":"Country","name":"India"},
"url": "https://www.renterfinder.com/properties",
"offers": {"@type":"Offer","price":"125","priceCurrency":"INR","description":"Profile listing fee for 3 months — landlords and renters"}
});
}
function injectRentersListSchema() {
injectSchema({
"@context": "https://schema.org",
"@type": "Service",
"serviceType": "Tenant Finding Service",
"name": "Prospective Renters' List — Find a Renter Online for the First Time Ever",
"description": "For the first time ever, landlords can find a renter online. The Prospective Renters' List is a curated directory of genuine tenants who have uploaded their rental requirements, budget, preferred city, family size, and move-in date. Available across 140+ Indian cities.",
"provider": {"@type":"Organization","name":"RenterFinder.com","url":"https://www.renterfinder.com","logo":"https://www.renterfinder.com/logo.svg"},
"areaServed": {"@type":"Country","name":"India"},
"url": "https://www.renterfinder.com/renters-list",
"serviceOutput": "Introduction between landlord and prospective renter — direct contact, no broker",
"offers": {"@type":"Offer","price":"125","priceCurrency":"INR","description":"Profile listing fee for renters — 3 months"}
});
injectSchema({
"@context": "https://schema.org",
"@type": "ItemList",
"name": "Prospective Renters' List — RenterFinder.com",
"description": "Browse genuine renter profiles from across India — tenants looking for 1BHK, 2BHK, 3BHK flats, apartments and houses to rent. Each profile shows budget, preferred location, family size, and move-in date.",
"url": "https://www.renterfinder.com/renters-list",
"numberOfItems": 6,
"itemListElement": [
{"@type":"ListItem","position":1,"name":"Rahul Sharma — IT Professional, Delhi NCR, 2BHK, ₹25k/mo"},
{"@type":"ListItem","position":2,"name":"Priya Nair — Marketing Manager, Bangalore, 1BHK, ₹18k/mo"},
{"@type":"ListItem","position":3,"name":"Amit Verma — Business Owner, Mumbai, 3BHK, ₹45k/mo"},
{"@type":"ListItem","position":4,"name":"Sneha Patel — Doctor, Hyderabad, Studio/1BHK, ₹12k/mo"},
{"@type":"ListItem","position":5,"name":"Kiran Reddy — Software Engineer, Pune, 2BHK, ₹20k/mo"},
{"@type":"ListItem","position":6,"name":"Meena Iyer — Teacher, Chennai, 1BHK, ₹10k/mo"}
]
});
}
function injectInternshipSchema() {
injectSchema({
"@context": "https://schema.org",
"@type": "JobPosting",
"title": "Stage 1 — Unpaid Marketing & Content Internship at RenterFinder.com",
"description": "Stage 1 unpaid internship at RenterFinder.com, India's only rental-exclusive property platform. Minimum 3 months, 20 hours per week, certificate of completion awarded. Learn social media marketing, email marketing, content creation, advertising campaigns, creative writing, business communication, and field marketing. Apply anytime — interviews conducted throughout the year.",
"hiringOrganization": {
"@type": "Organization",
"name": "RenterFinder.com",
"sameAs": "https://www.renterfinder.com",
"logo": "https://www.renterfinder.com/logo.svg"
},
"jobLocation": {
"@type": "Place",
"address": { "@type": "PostalAddress", "addressCountry": "IN", "addressLocality": "India" }
},
"jobLocationType": "TELECOMMUTE",
"applicantLocationRequirements": {
"@type": "Country",
"name": "India"
},
"employmentType": "INTERN",
"workHours": "20 hours per week (minimum)",
"qualifications": "12th grade or higher. Age 18 to 35. Available online or offline.",
"skills": "Social media marketing, email marketing, content creation, graphic design, digital marketing",
"datePosted": "2025-06-07",
"validThrough": "2026-12-31"
});
injectSchema({
"@context": "https://schema.org",
"@type": "JobPosting",
"title": "Stage 2 — Paid Marketing & Content Internship at RenterFinder.com",
"description": "Stage 2 paid internship at RenterFinder.com, India's only rental-exclusive property platform. Additional 3 months at ₹50 per hour, available after successful completion of Stage 1 unpaid internship. Continue building skills in social media marketing, email marketing, content creation, advertising campaigns, creative writing, business communication, and field marketing.",
"hiringOrganization": {
"@type": "Organization",
"name": "RenterFinder.com",
"sameAs": "https://www.renterfinder.com",
"logo": "https://www.renterfinder.com/logo.svg"
},
"jobLocation": {
"@type": "Place",
"address": { "@type": "PostalAddress", "addressCountry": "IN", "addressLocality": "India" }
},
"jobLocationType": "TELECOMMUTE",
"applicantLocationRequirements": {
"@type": "Country",
"name": "India"
},
"employmentType": "INTERN",
"workHours": "20 hours per week (minimum)",
"qualifications": "Successful completion of Stage 1 unpaid internship at RenterFinder.com. 12th grade or higher. Age 18 to 35.",
"skills": "Social media marketing, email marketing, content creation, graphic design, digital marketing",
"datePosted": "2025-06-07",
"validThrough": "2026-12-31",
"baseSalary": {
"@type": "MonetaryAmount",
"currency": "INR",
"value": {
"@type": "QuantitativeValue",
"value": 50,
"unitText": "HOUR"
}
}
});
}
function injectReferSchema() {
injectSchema({
"@context": "https://schema.org",
"@type": "Offer",
"name": "Refer & Earn ₹500 — RenterFinder.com Referral Programme",
"description": "Refer friends, family, or colleagues to RenterFinder.com and earn ₹500 for every successful rental deal closed using your unique referral code. Your referrals also benefit — they pay a discounted platform service fee of 10 days' rent instead of the standard 12 days. No cap on referrals or earnings.",
"url": "https://www.renterfinder.com/refer",
"seller": {
"@type": "Organization",
"name": "RenterFinder.com",
"url": "https://www.renterfinder.com"
},
"price": "500",
"priceCurrency": "INR",
"areaServed": { "@type": "Country", "name": "India" }
});
}
function injectHomeFaqSchema() {
injectSchema({
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{"@type":"Question","name":"What is RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"RenterFinder.com is India's first and only rental-exclusive property platform. We connect landlords with prospective renters across all Indian cities and towns. No buying, no selling — only renting."}},
{"@type":"Question","name":"How much does it cost to list on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"Profile listing costs ₹125 for 3 months (currently FREE during our inaugural offer until 31 July 2026). Platform Service Fee is only 12 days' rent — 6 days to arrange the property meeting (non-refundable) and 6 days at deal closure when the agreement is signed."}},
{"@type":"Question","name":"What is the Prospective Renters' List?","acceptedAnswer":{"@type":"Answer","text":"The Prospective Renters' List is a unique feature where renters publish their profiles with requirements, budget, and preferred areas. Landlords can browse this list to find and select ideal tenants — reversing the traditional rental search dynamic."}},
{"@type":"Question","name":"Does RenterFinder.com work in my city?","acceptedAnswer":{"@type":"Answer","text":"Yes! RenterFinder.com provides services all over India — every city, town, and rural area. There are no geographic restrictions. Whether you're in Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, or any small town, our platform works for you."}},
{"@type":"Question","name":"Are there any hidden charges on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"No. We charge only two types of fees — Profile Listing Fee (₹125 for 3 months) and Platform Service Fee (12 days' rent, including all taxes). There are no other hidden charges at all. What you see is exactly what you pay."}},
{"@type":"Question","name":"What if the rental deal is not finalised after the first match?","acceptedAnswer":{"@type":"Answer","text":"If the deal is not finalised and reported by both parties within 7 days of the meeting, we provide 3 more match options within the next 3 months using the same advance payment at no extra cost."}},
{"@type":"Question","name":"How can I list my property or renter profile on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"Register through your mobile number, fill a short form, and list your profile easily. Alternatively, you can post your profile through our help — just say Hi on our WhatsApp number +91 7303004550. Our expert team will call you and help with profile listing."}},
{"@type":"Question","name":"What is a Security Deposit for renting in India?","acceptedAnswer":{"@type":"Answer","text":"A security deposit is a refundable sum paid by the renter to the landlord before moving in, as a financial guarantee to cover repairs, cleaning, or unpaid rent. As per the Model Tenancy Act, 2021: maximum 2 months' rent for residential properties and 6 months' rent for commercial properties."}},
{"@type":"Question","name":"Why is an 11-month rent agreement preferred in India?","acceptedAnswer":{"@type":"Answer","text":"An agreement for more than 11 months must be registered with the sub-registrar's court, requiring stamp duty and registration fees. An 11-month agreement is a simple solution to avoid extra costs and legal formalities."}},
{"@type":"Question","name":"Will RenterFinder.com help me negotiate the rent?","acceptedAnswer":{"@type":"Answer","text":"RenterFinder.com only introduces prospective landlords and renters to each other for further negotiations at a mutually convenient date and time. No third-party or agent is involved in rent negotiation — both parties negotiate directly."}}
]
});
}
function injectFaqPageSchema() {
injectSchema({
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{"@type":"Question","name":"What is RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"RenterFinder.com is India's first and only rental-exclusive property platform. We connect landlords with prospective renters across all Indian cities and towns. No buying, no selling — only renting."}},
{"@type":"Question","name":"How much does it cost to list on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"Profile listing costs ₹125 for 3 months (currently FREE during our inaugural offer until 31 July 2026). Platform Service Fee is only 12 days' rent — 6 days to arrange the property meeting (non-refundable) and 6 days at deal closure when the agreement is signed."}},
{"@type":"Question","name":"What is the Prospective Renters' List?","acceptedAnswer":{"@type":"Answer","text":"The Prospective Renters' List is RenterFinder.com's most unique feature — India's first database where landlords can proactively browse tenant profiles. Renters publish their requirements, budget, preferred city and locality, family size, occupation type, and move-in timeline. Landlords can shortlist tenants on their own terms without broker involvement."}},
{"@type":"Question","name":"How do I find a good tenant quickly?","acceptedAnswer":{"@type":"Answer","text":"Finding a good tenant quickly requires visibility, screening, and fast response. On RenterFinder.com, landlords get two tools: post your property on Rental Properties so active renters can find you, and browse the Prospective Renters' List — India's only database to proactively search for tenants by city, budget, and family size. Respond to enquiries within 24 hours and keep property photos clear and accurate."}},
{"@type":"Question","name":"Does RenterFinder.com work in my city?","acceptedAnswer":{"@type":"Answer","text":"Yes! RenterFinder.com provides services all over India — every city, town, and rural area. There are no geographic restrictions. Whether you are in Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, or any small town, our platform works for you."}},
{"@type":"Question","name":"Are there any hidden charges on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"No. We charge only two types of fees — Profile Listing Fee (₹125 for 3 months) and Platform Service Fee (12 days' rent, including all taxes). There are no other hidden charges at all."}},
{"@type":"Question","name":"What is tenant screening and why is it important?","acceptedAnswer":{"@type":"Answer","text":"Tenant screening is the process a landlord follows to evaluate a prospective renter before offering them a property. It involves verifying identity documents, checking income or employment, and assessing rental history. Proper screening reduces the risk of rent defaults, property damage, and legal disputes. The Model Tenancy Act, 2021 also requires tenant information to be submitted to the local Rent Authority — making formal verification a legal best practice."}},
{"@type":"Question","name":"What documents should I ask a tenant to provide?","acceptedAnswer":{"@type":"Answer","text":"As a landlord, you should request: identity proof (Aadhaar, PAN, passport, or voter ID), address proof (utility bill or bank statement), income or employment proof (salary slips or ITR for self-employed), a passport-size photograph, and optionally a reference from a previous landlord. Under the Model Tenancy Act, 2021, a copy of the tenant's identity and address proof must be submitted to the local Rent Authority along with the tenancy agreement."}},
{"@type":"Question","name":"What is the Model Tenancy Act, 2021?","acceptedAnswer":{"@type":"Answer","text":"The Model Tenancy Act, 2021 is a central legislation introduced by the Government of India to modernise rental housing. Key provisions include mandatory written tenancy agreements, security deposit caps (2 months for residential, 6 months for commercial), a dedicated Rent Authority for dispute resolution, and clear eviction timelines. States must individually adopt the MTA for it to apply in their jurisdiction."}},
{"@type":"Question","name":"What are the security deposit limits under the Model Tenancy Act?","acceptedAnswer":{"@type":"Answer","text":"Under the Model Tenancy Act, 2021, security deposits are capped at: maximum 2 months' rent for residential properties, and maximum 6 months' rent for non-residential (commercial) properties. This caps the previously common practice of demanding 6–12 months' deposit for residential units in Indian metro cities."}},
{"@type":"Question","name":"On what grounds can a landlord legally evict a tenant in India?","acceptedAnswer":{"@type":"Answer","text":"Under Indian rental law, grounds for eviction include: non-payment of rent for two or more consecutive months, misuse of property, subletting without consent, structural damage caused by the tenant, landlord's requirement of the premises for personal use, and expiry of tenancy term with tenant refusing to vacate after proper notice. Eviction cannot be carried out forcibly — it must follow legal process through the Rent Authority or court."}},
{"@type":"Question","name":"Can a landlord lock out or cut off utilities to force a tenant to leave?","acceptedAnswer":{"@type":"Answer","text":"No. A landlord cannot forcibly evict a tenant by changing locks, cutting off electricity or water supply, or removing their belongings — even if the tenant is in rent default. Such actions constitute illegal eviction under Indian law and can result in criminal and civil liability against the landlord. The correct process is to file an application before the Rent Authority or civil court."}},
{"@type":"Question","name":"What is the correct notice period before asking a tenant to vacate?","acceptedAnswer":{"@type":"Answer","text":"Under the Model Tenancy Act, 2021: for monthly tenancy, 1 month's advance written notice by either party; for annual or fixed-term tenancy, 3 months' advance notice by the landlord and 1 month by the tenant. Always include a notice period clause in the rent agreement to avoid disputes."}},
{"@type":"Question","name":"What is a Rent Agreement?","acceptedAnswer":{"@type":"Answer","text":"A Rent Agreement is a legal contract between landlord and renter outlining the terms and conditions of tenancy. It includes personal details of both parties, property description, maintenance responsibilities, duration, rent and security deposit, utility payment responsibilities, termination and renewal terms, and an inventory of fixtures."}},
{"@type":"Question","name":"Is registration of a Rent Agreement mandatory in India?","acceptedAnswer":{"@type":"Answer","text":"Registration is mandatory for rent agreements exceeding 11 months. Agreements up to 11 months are commonly unregistered (on ₹100 stamp paper) and used for informal arrangements. Registered agreements provide stronger legal protection and are filed with the Sub-Registrar's office. Stamp duty ranges from 0.25% to 6% of annual rent depending on state and tenancy duration."}},
{"@type":"Question","name":"Why is an 11-month rent agreement preferred in India?","acceptedAnswer":{"@type":"Answer","text":"An agreement for more than 11 months must be registered with the sub-registrar's court, requiring stamp duty and registration fees. An 11-month agreement avoids these extra costs and legal formalities. After 11 months, both parties can renew with updated terms — a common and practical arrangement across India."}},
{"@type":"Question","name":"What is a Lock-in Period in a Rent Agreement?","acceptedAnswer":{"@type":"Answer","text":"A lock-in clause means the renter agrees not to vacate the property before the end of a specified period (generally 3–6 months). If the renter breaks the lock-in, a certain amount from the security deposit may be deducted by the landlord. Always clearly specify the lock-in duration and deduction amount in the rent agreement."}},
{"@type":"Question","name":"What is a Security Deposit for renting in India?","acceptedAnswer":{"@type":"Answer","text":"A security deposit is a refundable sum paid by the renter to the landlord before moving in. It covers potential repairs, cleaning, or unpaid rent at vacation. Under the Model Tenancy Act, 2021: maximum 2 months' rent for residential and 6 months' rent for commercial properties."}},
{"@type":"Question","name":"What if the rental deal is not finalised after the first match?","acceptedAnswer":{"@type":"Answer","text":"If the deal is not finalised and reported by both parties within 7 days of the meeting, RenterFinder.com provides 3 more match options within the next 3 months using the same advance payment at no extra cost."}},
{"@type":"Question","name":"What are the laws governing Rent Agreements in India?","acceptedAnswer":{"@type":"Answer","text":"Key laws include: The Indian Contract Act, 1872 (formation and enforcement of contracts); The Transfer of Property Act, 1882 (lease agreements, Sections 105–108); The Registration Act, 1908 (mandatory registration for agreements over 11 months); state Rent Control Acts (tenant protection from arbitrary eviction and rent increases); and the Model Tenancy Act, 2021 (modern standardised framework with Rent Authorities and Tribunals)."}},
{"@type":"Question","name":"How soon will I find a renter through RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"There is no fixed time limit. It depends on the number of available renters in your area, as well as each renter's personal preferences and decisions after reviewing the location, property condition, rent amount, and other criteria. Your listing will remain visible on RenterFinder.com for 3 months unless you delete it earlier."}},
{"@type":"Question","name":"How will the renter and landlord contact each other to finalize the deal?","acceptedAnswer":{"@type":"Answer","text":"If either party shortlists a profile by clicking the Show Interest button, we share the interested party's full contact details with the other side for quick review. Once the second party approves, we schedule a chat session to clear doubts. If both parties agree to meet after the chat, each must pay a Platform Service Fee equal to 6 days' rent (non-refundable) in advance. We then arrange an in-person meeting for a site visit and further discussions."}},
{"@type":"Question","name":"Whom should I contact for any problems after moving in?","acceptedAnswer":{"@type":"Answer","text":"RenterFinder.com is only responsible for facilitating the initial meeting between prospective landlords and renters without a broker in between. For any issues that arise during the stay, you should contact the house owner or landlord directly."}},
{"@type":"Question","name":"Whom should I pay rent to?","acceptedAnswer":{"@type":"Answer","text":"Rent should be paid directly to the house owner or landlord using the agreed payment method."}},
{"@type":"Question","name":"How soon will my listing go live on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"Your listing is usually published within 24 hours after we complete screening and review."}},
{"@type":"Question","name":"What should I do with my listing after finding a renter?","acceptedAnswer":{"@type":"Answer","text":"You can delete your listing at any time, or you can report to RenterFinder.com and we will deactivate it for you. Listings are automatically deactivated after 3 months. Once deactivated, you can easily reactivate your listing within the next 6 months by paying a small reactivation fee."}}
]
});
}
function injectAboutSchemas() {
injectSchema({
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{"@type":"ListItem","position":1,"name":"Home","item":"https://www.renterfinder.com/"},
{"@type":"ListItem","position":2,"name":"About Us","item":"https://www.renterfinder.com/about"}
]
});
injectSchema({
"@context": "https://schema.org",
"@type": "AboutPage",
"name": "About RenterFinder.com — India's Only Rental Platform | Find Renters",
"description": "RenterFinder.com is India's only dedicated rental property platform — no buying, no selling, only renting. Connecting genuine landlords and renters directly with transparent fees across all Indian cities.",
"url": "https://www.renterfinder.com/about",
"inLanguage": "en-IN",
"isPartOf": {"@type":"WebSite","name":"RenterFinder.com","url":"https://www.renterfinder.com"},
"breadcrumb": {"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Home","item":"https://www.renterfinder.com/"},
{"@type":"ListItem","position":2,"name":"About Us","item":"https://www.renterfinder.com/about"}
]},
"speakable": {"@type":"SpeakableSpecification","cssSelector":["h1","h2",".mission-quote",".mstat"]},
"mainEntity": {
"@type": "Organization",
"name": "RenterFinder.com",
"url": "https://www.renterfinder.com",
"logo": "https://www.renterfinder.com/logo.svg",
"description": "India's only rental-exclusive property platform connecting landlords and tenants directly — no brokers, transparent fees, pan-India service.",
"foundingDate": "2025",
"areaServed": {"@type":"Country","name":"India"},
"slogan": "For the first time ever, find a renter online.",
"knowsAbout": ["Property rental","Rental matching","Broker-free renting","Prospective Renters List","Tenant search","Landlord services"],
"contactPoint": {"@type":"ContactPoint","contactType":"customer service","email":"info@renterfinder.com","areaServed":"IN"},
"sameAs": [
"https://www.linkedin.com/company/renterfinder",
"https://www.instagram.com/renterfinder.in",
"https://www.facebook.com/renterfinder",
"https://x.com/RenterFinderIn",
"https://www.youtube.com/@RenterFinder"
]
}
});
injectSchema({
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{"@type":"Question","name":"What is RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"RenterFinder.com is India's only dedicated rental property platform — we deal exclusively with property renting. No buying, no selling. We connect genuine landlords and renters directly, with transparent fees and no broker interference."}},
{"@type":"Question","name":"What makes RenterFinder.com different from other property portals?","acceptedAnswer":{"@type":"Answer","text":"RenterFinder.com is India's first platform where landlords can search for renters online — not just the other way around. Our Prospective Renters' List allows landlords to browse genuine tenant profiles. We charge only 12 days' rent as Platform Service Fee (vs 15–90 days by brokers), with zero hidden charges."}},
{"@type":"Question","name":"What is the Platform Service Fee on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"The Platform Service Fee is only 12 days' rent — 6 days to arrange the property meeting (non-refundable) and 6 days at deal closure when the agreement is signed. Significantly lower than traditional brokers who charge 15 to 90 days' rent."}},
{"@type":"Question","name":"Which cities does RenterFinder.com cover?","acceptedAnswer":{"@type":"Answer","text":"RenterFinder.com is a pan-India service. We are not city-specific — whether you are in a metro like Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, or Kolkata, or a Tier-2 city, our platform covers every town and city across India."}}
]
});
}
function injectServicesFaqSchema() {
injectSchema({
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{"@type":"Question","name":"What two services does RenterFinder.com offer?","acceptedAnswer":{"@type":"Answer","text":"RenterFinder.com offers two complementary services: (1) Renter Search — landlords browse the Prospective Renters List to find a suitable tenant for their property; (2) Property Search — renters browse verified rental property listings posted directly by landlords. Both services are available on one platform, pan-India."}},
{"@type":"Question","name":"How is RenterFinder.com different from a property broker?","acceptedAnswer":{"@type":"Answer","text":"RenterFinder.com is an introduction service only — not a broker. We connect landlords and renters, then step back. There is no agent involved in negotiating rent, finalising the deal, or drafting the agreement. Our Platform Service Fee is 12 days rent only — compared to 15 to 90 days charged by traditional brokers."}},
{"@type":"Question","name":"Can renters also search for rental properties on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"Yes. Renters can browse the Rental Properties section to find 1BHK, 2BHK, 3BHK and other homes listed directly by property owners across India. Every listing is from the actual landlord — no broker posts."}},
{"@type":"Question","name":"What is the Prospective Renters List and how does it work for landlords?","acceptedAnswer":{"@type":"Answer","text":"The Prospective Renters List is India's first database where renters publish their own profiles — including budget, preferred locality, family size, occupation, and move-in date. Landlords can search this list, shortlist suitable candidates, and express interest directly. This reverses the traditional rental dynamic: instead of waiting for enquiries, landlords proactively select their ideal tenant."}}
]
});
}
function injectMtaFaqSchema() {
injectSchema({
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{"@type":"Question","name":"What is the Model Tenancy Act 2021?","acceptedAnswer":{"@type":"Answer","text":"The Model Tenancy Act 2021 is a central legislation introduced by the Government of India to modernise and regulate the rental housing sector. It provides a standardised framework for landlord-tenant relationships, introduces Rent Authorities and Rental Tribunals for dispute resolution, caps security deposits, and mandates written tenancy agreements."}},
{"@type":"Question","name":"What is the security deposit limit under the Model Tenancy Act?","acceptedAnswer":{"@type":"Answer","text":"Under the Model Tenancy Act 2021, security deposits are capped at 2 months rent for residential properties and 6 months rent for non-residential (commercial) properties. This is significantly lower than the 6 to 12 months deposits commonly demanded in Indian metro cities."}},
{"@type":"Question","name":"Is the Model Tenancy Act applicable in all Indian states?","acceptedAnswer":{"@type":"Answer","text":"No. The Model Tenancy Act 2021 is a central model law that states must individually adopt and enact as state legislation for it to apply in their jurisdiction. As of 2024, only a few states have enacted it. Landlords and renters should check the applicable rent control law in their specific state."}},
{"@type":"Question","name":"What are the eviction grounds under the Model Tenancy Act?","acceptedAnswer":{"@type":"Answer","text":"Under the Model Tenancy Act 2021, a landlord can seek eviction of a tenant on grounds including: non-payment of rent for two or more months, misuse of the premises, subletting without written consent, causing structural damage, the landlord requiring the property for personal or family use, and expiry of the tenancy period after proper notice. Eviction must go through the Rent Authority — self-help eviction (changing locks, cutting utilities) is prohibited."}},
{"@type":"Question","name":"What is a Rent Authority under the Model Tenancy Act?","acceptedAnswer":{"@type":"Answer","text":"A Rent Authority is a government-designated officer (typically a Deputy Collector or equivalent) established under the Model Tenancy Act to adjudicate disputes between landlords and tenants. Both parties can file applications for rent revision, eviction, deposit refund, and other tenancy-related matters. Decisions by the Rent Authority can be appealed to the Rental Tribunal."}}
]
});
}
function injectRentAgreementFaqSchema() {
injectSchema({
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{"@type":"Question","name":"What is a rent agreement and what should it include?","acceptedAnswer":{"@type":"Answer","text":"A rent agreement is a legal contract between a landlord and renter documenting the terms of tenancy. It must include: names and addresses of both parties, property description and address, monthly rent amount and due date, security deposit amount, tenancy duration and start date, notice period, lock-in period (if any), maintenance responsibilities, utility payment terms, and permitted use of the property."}},
{"@type":"Question","name":"Is registration of a rent agreement mandatory in India?","acceptedAnswer":{"@type":"Answer","text":"Registration is mandatory for rent agreements with a term exceeding 11 months. For agreements up to 11 months, registration is optional but the agreement should be executed on stamp paper of appropriate value. Unregistered agreements are admissible as evidence but offer weaker legal protection. Stamp duty rates vary by state."}},
{"@type":"Question","name":"Why is an 11-month rent agreement preferred in India?","acceptedAnswer":{"@type":"Answer","text":"An agreement for more than 11 months must be registered with the Sub-Registrar, which involves paying stamp duty and registration fees. An 11-month agreement avoids these costs and formalities. After 11 months, both parties typically renew with a fresh agreement — a common and practical arrangement across India."}},
{"@type":"Question","name":"What is a lock-in period in a rent agreement?","acceptedAnswer":{"@type":"Answer","text":"A lock-in period is a clause in the rent agreement that prevents either party — usually the tenant — from terminating the tenancy before a specified minimum period (typically 3 to 6 months). If the tenant vacates before the lock-in period ends, the landlord may deduct a portion of the security deposit as compensation. The lock-in amount and duration must be explicitly stated in the agreement."}},
{"@type":"Question","name":"Can a rent agreement be created online in India?","acceptedAnswer":{"@type":"Answer","text":"Yes. Online rent agreements on stamp paper are legally valid in most Indian states. Services allow e-stamping and digital signing, with doorstep delivery of the printed agreement. For agreements requiring registration (over 11 months), both parties must appear before the Sub-Registrar or use an authorised representative."}}
]
});
}
function injectPropertiesFaqSchema() {
injectSchema({
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{"@type":"Question","name":"How do I find rental properties on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"Browse the Rental Properties page to see 1BHK, 2BHK, 3BHK flats, apartments, and houses listed directly by landlords across India. Use the filters to narrow by city, BHK type, and budget. Every listing is posted by the actual property owner — no broker involved."}},
{"@type":"Question","name":"Are the rental properties listed by owners or brokers?","acceptedAnswer":{"@type":"Answer","text":"All properties on RenterFinder.com are listed directly by landlords and property owners. Brokers are not permitted to post on the platform. This means renters deal directly with the owner, avoiding brokerage fees entirely."}},
{"@type":"Question","name":"What types of rental properties are available on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"RenterFinder.com lists a wide range of residential rental properties across India including 1BHK flats, 2BHK apartments, 3BHK homes, furnished flats, independent houses, studio apartments, and short-term rentals. Properties are available across all major Indian cities and towns."}},
{"@type":"Question","name":"Is there a fee for renters to browse properties on RenterFinder.com?","acceptedAnswer":{"@type":"Answer","text":"Browsing rental properties on RenterFinder.com is free. Renters pay a Profile Listing Fee of ₹125 (discounted from ₹499) to publish their renter profile for 3 months. When a deal is finalised, the Platform Service Fee of 12 days' rent applies — significantly less than a traditional broker's fee of 30 to 90 days' rent."}}
]
});
}
var _origShowPage = window.showPage;
window.showPage = function(key) {
_origShowPage(key);
removeInjectedSchemas();
if (key === 'home') injectHomeFaqSchema();
if (key === 'about') injectAboutSchemas();
if (key === 'services') { injectServicesSchemas(); injectServicesFaqSchema(); }
if (key === 'fees') injectFeesSchemas();
if (key === 'properties') { injectPropertiesSchemas(); injectPropertiesFaqSchema(); }
if (key === 'renters-list') injectRentersListSchema();
if (key === 'internship') injectInternshipSchema();
if (key === 'refer') injectReferSchema();
if (key === 'feedback') injectFeedbackSchema();
if (key === 'terms') injectLegalPageSchema('terms','Terms of Use — RenterFinder.com India','Legal terms governing use of RenterFinder.com — India\'s only rental-exclusive property platform. Covers user obligations, fees, refund policy, RERA exclusion, and Model Tenancy Act compliance.','https://www.renterfinder.com/terms','Terms of Use');
if (key === 'disclaimer') injectLegalPageSchema('disclaimer','Disclaimer — Liability & Platform Limits | RenterFinder','Disclaimer covering liability limitations, RERA non-applicability, third-party information, and user responsibilities on RenterFinder.com.','https://www.renterfinder.com/disclaimer','Disclaimer');
if (key === 'privacy') injectLegalPageSchema('privacy','Privacy Policy — Data Protection | RenterFinder.com','Privacy Policy for RenterFinder.com. Compliant with the <a href="https://www.meity.gov.in/acts-rules/digital-personal-data-protection-act-2023" target="_blank" rel="noopener noreferrer" style="color:var(--gold-dk);font-weight:600;">Digital Personal Data Protection Act 2023 (DPDP Act) — MeitY ↗</a>, IT Act 2000, and SPDI Rules. Learn how we collect, use, store, and protect your personal data — including Aadhaar, contact details, and property information — and your rights as a Data Principal under Indian data protection laws.','https://www.renterfinder.com/privacy','Privacy Policy');
if (key === 'mta') injectLegalPageSchema('mta','Model Tenancy Act 2021 — Guide for Landlords & Renters','Full reference guide to India\'s Model Tenancy Act 2021 — security deposit limits, Rent Authority, Rental Tribunals, and tenant-landlord rights.','https://www.renterfinder.com/mta','Model Tenancy Act, 2021');
if (key === 'mta') injectMtaFaqSchema();
if (key === 'rent-agreement') injectLegalPageSchema('rent-agreement','Rent Agreement Template India — RenterFinder Reference','Sample rent agreement template for India — key clauses covering security deposit, lock-in period, maintenance, utility bills, and termination under Indian rental law.','https://www.renterfinder.com/rent-agreement','Rent Agreement');
if (key === 'rent-agreement') injectRentAgreementFaqSchema();
if (key === 'faq') {
injectFaqPageSchema();
setTimeout(function(){
var items = document.querySelectorAll('#page-faq .faq-item');
for(var i=0; i<Math.min(3,items.length); i++){
var q = items[i].querySelector('.faq-q');
if(q && !items[i].classList.contains('open')){
items[i].classList.add('open');
var chev = q.querySelector('.faq-chevron');
if(chev) chev.textContent = '−';
q.classList.add('active');
}
}
}, 100);
}
if (key === 'fees' || key === 'home') {
setTimeout(updateFreeOfferText, 50);
}
};
function injectFeedbackSchema() {
injectSchema({
"@context": "https://schema.org",
"@type": "ContactPage",
"name": "Contact Us & Feedback — RenterFinder.com",
"description": "Send feedback, suggestions, bug reports, complaints, or compliments to RenterFinder.com — India's only rental-exclusive property platform. We respond within 2 business days.",
"url": "https://www.renterfinder.com/feedback",
"inLanguage": "en-IN",
"isPartOf": {"@type":"WebSite","name":"RenterFinder.com","url":"https://www.renterfinder.com"},
"breadcrumb": {"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Home","item":"https://www.renterfinder.com/"},
{"@type":"ListItem","position":2,"name":"Feedback","item":"https://www.renterfinder.com/feedback"}
]},
"mainEntity": {
"@type": "Organization",
"name": "RenterFinder.com",
"url": "https://www.renterfinder.com",
"contactPoint": [
{"@type":"ContactPoint","contactType":"customer support","email":"info@renterfinder.com","telephone":"+917303004550","areaServed":"IN","availableLanguage":"English"},
{"@type":"ContactPoint","contactType":"technical support","email":"report@renterfinder.com","areaServed":"IN","availableLanguage":"English"}
]
}
});
injectSchema({
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{"@type":"ListItem","position":1,"name":"Home","item":"https://www.renterfinder.com/"},
{"@type":"ListItem","position":2,"name":"Feedback","item":"https://www.renterfinder.com/feedback"}
]
});
}
function injectLegalPageSchema(key, name, description, url, breadcrumbName) {
injectSchema({
"@context": "https://schema.org",
"@type": "WebPage",
"name": name,
"description": description,
"url": url,
"inLanguage": "en-IN",
"isPartOf": {"@type":"WebSite","name":"RenterFinder.com","url":"https://www.renterfinder.com"},
"breadcrumb": {"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Home","item":"https://www.renterfinder.com/"},
{"@type":"ListItem","position":2,"name":breadcrumbName,"item":url}
]},
"publisher": {
"@type": "Organization",
"name": "RenterFinder.com",
"url": "https://www.renterfinder.com",
"logo": "https://www.renterfinder.com/logo.svg"
}
});
injectSchema({
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{"@type":"ListItem","position":1,"name":"Home","item":"https://www.renterfinder.com/"},
{"@type":"ListItem","position":2,"name":breadcrumbName,"item":url}
]
});
}
})();
function filterFaqItems(query) {
var q = (query || '').toLowerCase().trim();
var items = document.querySelectorAll('#page-faq .faq-item');
var cats = document.querySelectorAll('#page-faq .faq-category');
var noResults = document.getElementById('faq-no-results');
var matchCount = 0;
items.forEach(function(item) {
var text = item.textContent.toLowerCase();
var match = !q || text.indexOf(q) !== -1;
item.style.display = match ? '' : 'none';
if(match) matchCount++;
});
cats.forEach(function(cat) {
var visibleItems = cat.querySelectorAll('.faq-item:not([style*="display: none"])');
cat.style.display = visibleItems.length > 0 ? '' : 'none';
});
if(noResults) noResults.style.display = (matchCount === 0 && q) ? 'block' : 'none';
}
function updateFreeOfferText() {
var expiryDate = new Date('2026-07-31T23:59:59');
var now = new Date();
var isExpired = now > expiryDate;
document.querySelectorAll('[data-offer-text]').forEach(function(el) {
if(isExpired) {
el.textContent = el.getAttribute('data-offer-expired') || '₹125 for 3 months';
}
});
if(isExpired) {
var freeEls = document.querySelectorAll('.free-offer-badge');
freeEls.forEach(function(el) { el.style.display = 'none'; });
var paidEls = document.querySelectorAll('.paid-after-offer');
paidEls.forEach(function(el) { el.style.display = ''; });
}
}