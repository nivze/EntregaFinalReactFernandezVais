import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAOLBBwioUNz6KPZCdUwRIrqNbnKHV4NE4",
  authDomain: "ecommerce-brandan.firebaseapp.com",
  projectId: "ecommerce-brandan",
  storageBucket: "ecommerce-brandan.appspot.com",
  messagingSenderId: "136486835754",
  appId: "1:136486835754:web:85d2cd0f90d8dea52c5553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)