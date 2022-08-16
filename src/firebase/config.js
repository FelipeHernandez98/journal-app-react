// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOL_jdxmheeA-caGX3nXG8-c3Hx8c0HYI",
  authDomain: "react-curso-7480a.firebaseapp.com",
  projectId: "react-curso-7480a",
  storageBucket: "react-curso-7480a.appspot.com",
  messagingSenderId: "145235855535",
  appId: "1:145235855535:web:19dc06072a965206322c5a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
