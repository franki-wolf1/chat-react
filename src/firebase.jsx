// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getFirestore } from '@firebase/firestore';
 
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHfRFZO7Xhc3ZtGZPWKi-nsFZ9LpYG55g",
  authDomain: "multy-react.firebaseapp.com",
  projectId: "multy-react",
  storageBucket: "multy-react.appspot.com",
  messagingSenderId: "345406626058",
  appId: "1:345406626058:web:615c7232cf0fcf9bf9c2f3",
  measurementId: "G-6X0LXMPRQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app); 

export { db };