// RenterFinder Firebase Configuration
// Automatically uses localStorage fallback when running as file://

const _isLocal = location.protocol === 'file:';

if (_isLocal) {
  // ── LOCAL FALLBACK (file://) ──────────────────────────────────
  // Firebase doesn't work on file:// due to CORS.
  // Create a stub db object so RF functions fail gracefully.
  console.warn('[RF] Running locally — using localStorage fallback. Host on GitHub Pages for full Firebase sync.');
  window.db = {
    collection: () => ({
      doc: () => ({
        set: async () => {}, get: async () => ({ exists: false, data: () => ({}) }),
        update: async () => {}, delete: async () => {},
        collection: () => ({ doc: () => ({ set: async () => {} }), orderBy: () => ({ onSnapshot: () => () => {} }) }),
        onSnapshot: (cb) => { cb({ exists: false, data: () => ({}) }); return () => {}; }
      }),
      add: async () => {},
      orderBy: () => ({ onSnapshot: (cb) => { cb({ docs: [] }); return () => {}; }, get: async () => ({ docs: [] }) }),
      onSnapshot: (cb) => { cb({ docs: [] }); return () => {}; },
      get: async () => ({ docs: [], forEach: () => {} }),
      batch: () => ({ set: () => {}, commit: async () => {} })
    }),
    batch: () => ({ set: () => {}, commit: async () => {} })
  };
  window.firebase = { firestore: { FieldValue: { serverTimestamp: () => Date.now() } } };
} else {
  // ── PRODUCTION (https://) ─────────────────────────────────────
  const firebaseConfig = {
    apiKey: "AIzaSyCfPR0rJXSDo2H7tVTC0KYR6Bv_smfzQKs",
    authDomain: "renterfinder.firebaseapp.com",
    projectId: "renterfinder",
    storageBucket: "renterfinder.firebasestorage.app",
    messagingSenderId: "857908676170",
    appId: "1:857908676170:web:100528b336c125ab10c8b3"
  };
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  window.db = firebase.firestore();
}
