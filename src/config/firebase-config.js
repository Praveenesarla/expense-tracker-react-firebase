// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxO2kk2IPELObSXGkxvwOjgr3EwOhIWI8",
  authDomain: "expense-tracker-a0835.firebaseapp.com",
  projectId: "expense-tracker-a0835",
  storageBucket: "expense-tracker-a0835.appspot.com",
  messagingSenderId: "1022453588967",
  appId: "1:1022453588967:web:f5f8caf1fbbf12259d5342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


//firebase login
//firebase init
//firebase deploy
