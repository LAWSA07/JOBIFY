import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_8yhwEszCXxLGWt2ulQFtaQFKx2ybJSo",
  authDomain: "jobify-3b535.firebaseapp.com",
  projectId: "jobify-3b535",
  storageBucket: "jobify-3b535.firebasestorage.app",
  messagingSenderId: "950718187081",
  appId: "1:950718187081:web:0721511bf45a60b0a86198",
  measurementId: "G-6JZ3D89BXX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
