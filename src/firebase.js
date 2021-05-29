import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDsDIFAEX7ikQv3KYy1Q0CrilpgSohjTCA",
    authDomain: "kothopokothon-e5068.firebaseapp.com",
    projectId: "kothopokothon-e5068",
    storageBucket: "kothopokothon-e5068.appspot.com",
    messagingSenderId: "421909469052",
    appId: "1:421909469052:web:1e7028dec8edc3082636f9"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider }
  export default db;