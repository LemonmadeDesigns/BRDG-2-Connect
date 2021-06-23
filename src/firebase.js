import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage"; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN3RTSjv5xyr-0lfbRBU80MuLSKfhpy_4",
  authDomain: "brdg-chat-app-2021.firebaseapp.com",
  projectId: "brdg-chat-app-2021",
  storageBucket: "brdg-chat-app-2021.appspot.com",
  messagingSenderId: "423743665700",
  appId: "1:423743665700:web:ac928d9f4a7b2234578ab1",
  measurementId: "G-8GYK6YRG97"
};

firebase.initializeApp(firebaseConfig);

export default firebase;