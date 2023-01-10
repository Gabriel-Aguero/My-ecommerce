// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk-oyGuEot-ceO9tHH6-1X0bPpl2yvcUk",
  authDomain: "react-coder-3a337.firebaseapp.com",
  projectId: "react-coder-3a337",
  storageBucket: "react-coder-3a337.appspot.com",
  messagingSenderId: "1091462433308",
  appId: "1:1091462433308:web:3359dc7a32c2fbf285add9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)