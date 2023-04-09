// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyD2jHktPMLIDZmHazi6SO9xbDbgdXg5OnQ",
  authDomain: "backend-f5aed.firebaseapp.com",
  projectId: "backend-f5aed",
  storageBucket: "backend-f5aed.appspot.com",
  messagingSenderId: "199826877743",
  appId: "1:199826877743:web:1175be50f899c78df9c5da",
  measurementId: "G-71HXGH2R4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);