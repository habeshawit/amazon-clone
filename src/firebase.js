import firebase from "firebase";
  
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyC6A9qzSjbmdffdOBNXL5n3FVYTwjQytak",
authDomain: "clone-65319.firebaseapp.com",
projectId: "clone-65319",
storageBucket: "clone-65319.appspot.com",
messagingSenderId: "235327162673",
appId: "1:235327162673:web:952f22768b302bd139c810",
measurementId: "G-16T7R52E3T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };