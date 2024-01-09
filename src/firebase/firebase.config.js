// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh-02RjBjXlZOw8c_AE12c_khFvjbNvAc",
  authDomain: "blogs-nextjs-261ef.firebaseapp.com",
  projectId: "blogs-nextjs-261ef",
  storageBucket: "blogs-nextjs-261ef.appspot.com",
  messagingSenderId: "847666486998",
  appId: "1:847666486998:web:19456118439e05db603377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app