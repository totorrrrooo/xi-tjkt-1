// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDM_2q7ZTbj37cEqV-6EpB82S2iq2-sSkc",
  authDomain: "x-tjkt-1-v2.firebaseapp.com",
  projectId: "x-tjkt-1-v2",
  storageBucket: "x-tjkt-1-v2.appspot.com",
  messagingSenderId: "1017629819346",
  appId: "1:1017629819346:web:078abe121751270f11c80b",
  measurementId: "G-Z0X39T6X9C"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();