import firebase from 'firebase/compat/app'; //v9
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABshZehSip8xJ-s9DaUZcrP1sSTabDGsc",
  authDomain: "technical-test-lab.firebaseapp.com",
  projectId: "technical-test-lab",
  storageBucket: "technical-test-lab.appspot.com",
  messagingSenderId: "565569847995",
  appId: "1:565569847995:web:7ca334d0ecebe5120c9f9e"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//referencia de la base de datos 
const db = getFirestore();

// auth
const auth = getAuth()
//permite autenticacion con google 
const google = new firebase.auth.GoogleAuthProvider()

export {firebase, db, google, auth}