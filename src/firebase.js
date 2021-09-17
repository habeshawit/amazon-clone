import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVwYXzBFZrpjV7UKQP_0TWEb96XHUfyEc",
  authDomain: "amzn-clone-3b499.firebaseapp.com",
  projectId: "amzn-clone-3b499",
  storageBucket: "amzn-clone-3b499.appspot.com",
  messagingSenderId: "874603285501",
  appId: "1:874603285501:web:b2fa88181026d9ecaba794",
  measurementId: "G-NQPQNS74PJ"
};




// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };