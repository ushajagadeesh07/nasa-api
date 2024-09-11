// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcvtGufPm3Xuj3ctUa3mezy7b5Dcv_7_g",
  authDomain: "nasa-api-f5a75.firebaseapp.com",
  projectId: "nasa-api-f5a75",
  storageBucket: "nasa-api-f5a75.appspot.com",
  messagingSenderId: "692453582084",
  appId: "1:692453582084:web:c7d27265ef9814f15ddc51",
  measurementId: "G-N5DCXVDTB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);