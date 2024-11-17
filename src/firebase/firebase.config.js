// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9GzPW0FhoPWFS8BrSHGQwMK-CSEAZ2H8",
  authDomain: "second-concept-firebase.firebaseapp.com",
  projectId: "second-concept-firebase",
  storageBucket: "second-concept-firebase.firebasestorage.app",
  messagingSenderId: "862239533832",
  appId: "1:862239533832:web:a0067ba99af785e5931abd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 

