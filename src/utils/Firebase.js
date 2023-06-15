// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsLomS9rnASZnQ53e2vuwJ6TDMcxtYesg",
  authDomain: "tradingviewclone.firebaseapp.com",
  projectId: "tradingviewclone",
  storageBucket: "tradingviewclone.appspot.com",
  messagingSenderId: "891226567895",
  appId: "1:891226567895:web:ec6304d24efd3b30ef2c92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()