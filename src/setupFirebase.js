import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBAUDp4P-FeBHaeYx4_NOoKjRX1Rnb7q-w",
  authDomain: "bokvalvet-a21e4.firebaseapp.com",
  databaseURL: "https://bokvalvet-a21e4.firebaseio.com",
  projectId: "bokvalvet-a21e4",
  storageBucket: "bokvalvet-a21e4.appspot.com",
  messagingSenderId: "576434251374",
  appId: "1:576434251374:web:74275ba3b2a3ca3906a87f",
  measurementId: "G-XB0P930K5L"
};

// Initialize firebase with config
console.log("FIREBASE HAS BEEN INITIALIZED")
firebase.initializeApp(firebaseConfig);
export default firebase;