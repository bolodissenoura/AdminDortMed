import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6pQLZLs6gS4ZfzFeFSvyH1tb5umcqSEw",
  authDomain: "dortmedadmin.firebaseapp.com",
  projectId: "dortmedadmin",
  storageBucket: "dortmedadmin.appspot.com",
  messagingSenderId: "1017807544188",
  appId: "1:1017807544188:web:1aa68dbcb971993ec80ef9",
  measurementId: "G-Y1GVCNZ8BS",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { firebase, auth };
