// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoiEAxOn6q2FO_qRfbmoZf5LVwsWyuu-Y",
  authDomain: "medium-arif.firebaseapp.com",
  projectId: "medium-arif",
  storageBucket: "medium-arif.appspot.com",
  messagingSenderId: "603873142953",
  appId: "1:603873142953:web:2fb186e893f1fc230a21b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }
