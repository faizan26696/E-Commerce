// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2UEwBxbeElYAuZRwJajwRPtDgBSSiayo",
  authDomain: "e-commerce-66206.firebaseapp.com",
  projectId: "e-commerce-66206",
  storageBucket: "e-commerce-66206.appspot.com",
  messagingSenderId: "128892816189",
  appId: "1:128892816189:web:45effbfd50764857a01354",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);

export { fireDb, auth };
