import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPshRpyjrq-1kvxpbrL9UeiRJ6A19rDDk",
  authDomain: "fitodisney.firebaseapp.com",
  projectId: "fitodisney",
  storageBucket: "fitodisney.appspot.com",
  messagingSenderId: "337215445544",
  appId: "1:337215445544:web:ab7090a370a33bf6b5f31d",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const firestoreDb = firebaseApp.firestore();

export { firestoreDb };
