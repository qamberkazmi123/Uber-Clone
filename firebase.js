// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ54x0JuFXQhBkpUjc-EtxwrVTjXayGM4",
  authDomain: "uber-learn--clone.firebaseapp.com",
  projectId: "uber-learn--clone",
  storageBucket: "uber-learn--clone.appspot.com",
  messagingSenderId: "52868305664",
  appId: "1:52868305664:web:194fb6d66e93af9e1719e5",
  measurementId: "G-JTYCR0ZMZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}