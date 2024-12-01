// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyC3dH7Fsc0N8yN-mJJ6wlbE8xcMAhYzIJ8",
  authDomain: "blog-project-7247f.firebaseapp.com",
  projectId: "blog-project-7247f",
  storageBucket: "blog-project-7247f.firebasestorage.app",
  messagingSenderId: "404769395077",
  appId: "1:404769395077:web:36567f46506ac82cc934ec",
  measurementId: "G-6WW9ZY4DPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth