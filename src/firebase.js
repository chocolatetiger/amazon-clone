// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdAXtt4VUIn-lZnUQFTJLK0UQn1CjDHAY",
  authDomain: "clone-faeab.firebaseapp.com",
  projectId: "clone-faeab",
  storageBucket: "clone-faeab.appspot.com",
  messagingSenderId: "805746099936",
  appId: "1:805746099936:web:bd921c1f099060448b7285",
  measurementId: "G-GKH36BZQ1W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
