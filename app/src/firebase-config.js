
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBd_6kLNVDnSvf-sZaKjCSnzIryAEzfvHw",
  authDomain: "notecy-99448.firebaseapp.com",
  projectId: "notecy-99448",
  storageBucket: "notecy-99448.appspot.com",
  messagingSenderId: "53726278012",
  appId: "1:53726278012:web:161efb6c395a94eccbb4f9",
  measurementId: "G-91T99GKJPV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
