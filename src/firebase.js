// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFXEJD1s_10ByuBLEdBhPa-Iao9sZwWQw",
  authDomain: "mini-crm-9669d.firebaseapp.com",
  projectId: "mini-crm-9669d",
  storageBucket: "mini-crm-9669d.firebasestorage.app",
  messagingSenderId: "47461800810",
  appId: "1:47461800810:web:c0030ce0ea25671d18e313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);