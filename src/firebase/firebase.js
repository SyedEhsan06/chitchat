// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAyv8hgPyYHt1cjBGUk5F5mwVGAatP6LAk",
  authDomain: "livecommerce-8b217.firebaseapp.com",
  projectId: "livecommerce-8b217",
  storageBucket: "livecommerce-8b217.appspot.com",
  messagingSenderId: "760498814728",
  appId: "1:760498814728:web:41d1af52e38db33cf276bd",
  measurementId: "G-YWXY2831NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, app, googleProvider };