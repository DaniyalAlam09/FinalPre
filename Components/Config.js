import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqhStfBn8YYiwNoVwiQWLjLo-d1t7UzNI",
  authDomain: "finalpre-7ba6b.firebaseapp.com",
  projectId: "finalpre-7ba6b",
  storageBucket: "finalpre-7ba6b.appspot.com",
  messagingSenderId: "379746452328",
  appId: "1:379746452328:web:24ce6fda13dead71598cdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)