// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-b32de.firebaseapp.com",
  projectId: "x-next-b32de",
  storageBucket: "x-next-b32de.appspot.com",
  messagingSenderId: "314951914072",
  appId: "1:314951914072:web:5e19c144b0964bf918f02d",
  measurementId: "G-PSGN5EN0BK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);