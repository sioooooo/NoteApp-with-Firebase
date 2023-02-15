import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZjvuN5AeZPAYD91wzv9h3VDqQFW7Pxvg",
  authDomain: "note-app-814d6.firebaseapp.com",
  projectId: "note-app-814d6",
  storageBucket: "note-app-814d6.appspot.com",
  messagingSenderId: "663888727454",
  appId: "1:663888727454:web:4d3d672f3d50ba2fccda8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
