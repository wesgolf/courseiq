// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJQPMjGcUnwbyqtV-EghYbvdW2sM9mTGE",
  authDomain: "courseiq-fc57a.firebaseapp.com",
  projectId: "courseiq-fc57a",
  storageBucket: "courseiq-fc57a.appspot.com",
  messagingSenderId: "672924062358",
  appId: "1:672924062358:web:b114eadb79bb9d9a35e8b7",
  measurementId: "G-6WRB09V2L6"
};

console.log("Firebase configuration:", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db

const auth = getAuth(app)
export {auth}
export {db}