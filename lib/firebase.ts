// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUp7GhImfM-PwGxK8X6kRqd5K4zvv49vE",
  authDomain: "koorg-a3a56.firebaseapp.com",
  projectId: "koorg-a3a56",
  storageBucket: "koorg-a3a56.firebasestorage.app",
  messagingSenderId: "1094356512615",
  appId: "1:1094356512615:web:0a70a29a8d1d389ad189c2",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}