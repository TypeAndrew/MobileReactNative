// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase;