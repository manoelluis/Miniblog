// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3VIB0NgATYGVYFdhynLeH_b_0qelk1hg",
  authDomain: "miniblog-c4de3.firebaseapp.com",
  projectId: "miniblog-c4de3",
  storageBucket: "miniblog-c4de3.appspot.com",
  messagingSenderId: "109943412715",
  appId: "1:109943412715:web:e0b1823c220f66d62bebae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
