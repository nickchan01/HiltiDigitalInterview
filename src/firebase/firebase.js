// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR5UW4sGHMr8v8BT7wH-0FeWoSyC5qa4k",
  authDomain: "hilticonnect-14402.firebaseapp.com",
  projectId: "hilticonnect-14402",
  storageBucket: "hilticonnect-14402.appspot.com",
  messagingSenderId: "632854022408",
  appId: "1:632854022408:web:3be8a792f45e80a17684bd",
  measurementId: "G-TG5KXGBLEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, auth};
