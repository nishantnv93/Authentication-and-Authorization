import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIG1EkYZiyc6EPYYdMdJ7bejnMN5Ho8kc",
  authDomain: "authentication-authoriza-a856a.firebaseapp.com",
  projectId: "authentication-authoriza-a856a",
  storageBucket: "authentication-authoriza-a856a.appspot.com",
  messagingSenderId: "1056958243150",
  appId: "1:1056958243150:web:8ab6183e640d26a7e6fe1f",
  measurementId: "G-PQB4PZRBG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Set the persistence to local to keep the user logged in across sessions
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to local");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { auth, db };
