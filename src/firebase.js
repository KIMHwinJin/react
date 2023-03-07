import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBvAQnIX2Cc0RRxwGZn2uLqnwpfcRxvea4",
  authDomain: "mojo-note-app.firebaseapp.com",
  projectId: "mojo-note-app",
  storageBucket: "mojo-note-app.appspot.com",
  messagingSenderId: "142464910075",
  appId: "1:142464910075:web:c25f65f9c1e6359faf665e"
};


const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);