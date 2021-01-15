import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBxHj-giqerr2BzSMypeUPcgGUEWNCEW-w",
  authDomain: "projectgame-a8f15.firebaseapp.com",
  databaseURL: "https://projectgame-a8f15.firebaseio.com",
  projectId: "projectgame-a8f15",
  storageBucket: "projectgame-a8f15.appspot.com",
  // messagingSenderId: "57316896564",
  // appId: "1:1038535925038:web:5726c46a5243ac3874eebf",
  // measurementId: "G-5DJQ89LC3N",
});

const db = firebase.firestore();

export { db };
