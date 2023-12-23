import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfigYeiko = {
  apiKey: "AIzaSyDi3KqmT2TaEERurHJY5o54BNz0dgWZXc0",
  authDomain: "proyecto-7974a.firebaseapp.com",
  projectId: "proyecto-7974a",
  storageBucket: "proyecto-7974a.appspot.com",
  messagingSenderId: "459947389002",
  appId: "1:459947389002:web:262cfe9033980e5cc0b6b3",
};

// Inicializar Firebase
const app2 = initializeApp(firebaseConfigYeiko);
export const db = getFirestore(app2);
