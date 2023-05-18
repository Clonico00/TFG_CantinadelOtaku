// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg03SSbAcmJ1wbzBUl001tPh1EsVRVFTY",
  authDomain: "cantinadelotaku.firebaseapp.com",
  projectId: "cantinadelotaku",
  storageBucket: "cantinadelotaku.appspot.com",
  messagingSenderId: "321428702572",
  appId: "1:321428702572:web:5c001801cfc548d11d9f49",
  measurementId: "G-91S860G5P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);