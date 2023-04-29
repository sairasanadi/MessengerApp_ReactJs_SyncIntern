// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGhD-kIs7TUdha3swLAIk_UqgVqfFA6bQ",
  authDomain: "messenger-app7.firebaseapp.com",
  projectId: "messenger-app7",
  storageBucket: "messenger-app7.appspot.com",
  messagingSenderId: "949237300780",
  appId: "1:949237300780:web:32650c6a4dc2d43eb71b89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)