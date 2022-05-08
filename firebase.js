import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAy9CtnJqSNXdDKMkCWph_K4FIq9yLZOeE",
    authDomain: "medisewa-f570a.firebaseapp.com",
    projectId: "medisewa-f570a",
    storageBucket: "medisewa-f570a.appspot.com",
    messagingSenderId: "445660549425",
    appId: "1:445660549425:web:ffe6be4fe2c3965b0ee010"
  };

 const app = initializeApp(firebaseConfig);

  export default app;