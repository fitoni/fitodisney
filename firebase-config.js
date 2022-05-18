import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBExs7aSGfeI75NdYuIFXjI1hzGLvg5Gu8",
  authDomain: "disney-ylw.firebaseapp.com",
  projectId: "disney-ylw",
  storageBucket: "disney-ylw.appspot.com",
  messagingSenderId: "591849133557",
  appId: "1:591849133557:web:79d781ea8e59be895b7cbc",
};

const firebaseApp =
  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestoreDb = getFirestore(firebaseApp);

export { firebaseApp, firestoreDb };
