// RenterFinder Firebase Config
// Loaded before firebase-db.js on all pages
// On file:// (local) creates a stub so pages don't crash

const _isLocal = (location.protocol === 'file:');

if (_isLocal) {
  console.warn('[RF] Local file:// — Firebase disabled, using localStorage only');
  window.db = {
    collection: () => ({
      doc: () => ({
        set: async()=>{}, get: async()=>({exists:false,data:()=>({})}),
        update: async()=>{}, delete: async()=>{},
        collection: ()=>({ doc:()=>({set:async()=>{}}), orderBy:()=>({onSnapshot:()=>()=>{}}) }),
        onSnapshot: (cb)=>{ cb({exists:false,data:()=>({})}); return ()=>{}; }
      }),
      orderBy: ()=>({ onSnapshot:(cb)=>{ cb({docs:[]}); return ()=>{}; } }),
      onSnapshot: (cb)=>{ cb({docs:[]}); return ()=>{}; },
      get: async()=>({docs:[],forEach:()=>{}})
    }),
    batch: ()=>({ set:()=>{}, commit:async()=>{} })
  };
} else {
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
