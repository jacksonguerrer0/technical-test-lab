import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

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
const db = firebase.firestore();


//permite autenticacion con google 
const google = new firebase.auth.GoogleAuthProvider()

export {firebase, db, google}