// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqCy_z_2stE9wMu3SE_C7gunzA8g7tdG4",
  authDomain: "book-inventory-d599d.firebaseapp.com",
  projectId: "book-inventory-d599d",
  storageBucket: "book-inventory-d599d.appspot.com",
  messagingSenderId: "601811403572",
  appId: "1:601811403572:web:c33f81872fb402ab0c5b61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;