import firebase from 'firebase/compat/app'; //v9

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
const firebaseApp = firebase.initializeApp(firebaseConfig);



export default firebaseApp