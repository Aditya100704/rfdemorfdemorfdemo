// RenterFinder Firebase Configuration
// Used by: chat.html, mod-dashboard.html, dashboard.html, mods/*.html

const firebaseConfig = {
  apiKey: "AIzaSyCfPR0rJXSDo2H7tVTC0KYR6Bv_smfzQKs",
  authDomain: "renterfinder.firebaseapp.com",
  projectId: "renterfinder",
  storageBucket: "renterfinder.firebasestorage.app",
  messagingSenderId: "857908676170",
  appId: "1:857908676170:web:100528b336c125ab10c8b3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
