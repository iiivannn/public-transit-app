// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "public-transit-route-optimizer.firebaseapp.com",
  projectId: "public-transit-route-optimizer",
  storageBucket: "public-transit-route-optimizer.firebasestorage.app",
  messagingSenderId: "642526482953",
  appId: "1:642526482953:web:5c335e00c8e8e7e2551ed8",
  measurementId: "G-RKD19ZPX0V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
