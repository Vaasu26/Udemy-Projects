import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBpnwMyn4qkxec3dM7SuuU6qtlP26QOpvo",
    authDomain: "eshop-aa7c0.firebaseapp.com",
    projectId: "eshop-aa7c0",
    storageBucket: "eshop-aa7c0.appspot.com",
    messagingSenderId: "176637032108",
    appId: "1:176637032108:web:cc4036cab4d9df41945109",
    measurementId: "G-NL4645RRN6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };