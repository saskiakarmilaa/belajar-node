// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATeTTe1pR-Ev62xaV62RerhPo09mKM-tA",
  authDomain: "react-course-7a626.firebaseapp.com",
  projectId: "react-course-7a626",
  storageBucket: "react-course-7a626.appspot.com",
  messagingSenderId: "123692026682",
  appId: "1:123692026682:web:00ef42230b962cf686de03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);