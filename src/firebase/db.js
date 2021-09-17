import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance


var firebaseConfig = {
    apiKey:"AIzaSyA_uyRWKeU_aepgybPq_J7iKxBKqUahwEw",
    authDomain: "chatpoint1-16505.firebaseapp.com",
    databaseURL: "https://chatpoint1-16505-default-rtdb.firebaseio.com",
    projectId: "chatpoint1-16505",
    storageBucket: "chatpoint1-16505.appspot.com",
    messagingSenderId: "615660352657",
    appId: "1:615660352657:web:d302ff04bf1300f2a33b30"
  };
 

export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
