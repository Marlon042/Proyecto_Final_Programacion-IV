// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi3KqmT2TaEERurHJY5o54BNz0dgWZXc0",
  authDomain: "proyecto-7974a.firebaseapp.com",
  projectId: "proyecto-7974a",
  storageBucket: "proyecto-7974a.appspot.com",
  messagingSenderId: "459947389002",
  appId: "1:459947389002:web:262cfe9033980e5cc0b6b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
