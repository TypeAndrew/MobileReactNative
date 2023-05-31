import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcSYnBYpmlGJs1daceTKf8_nYiy6VW2k0",
  authDomain: "reactnative-6e9d4.firebaseapp.com",
  projectId: "reactnative-6e9d4",
  storageBucket: "reactnative-6e9d4.appspot.com",
  messagingSenderId: "70542434074",
  appId: "1:70542434074:web:939a06699359e7c08096a3",
  measurementId: "G-1MWDWZWHZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
export const storage = getStorage();
export const db = getFirestore(app);