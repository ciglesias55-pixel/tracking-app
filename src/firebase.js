import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Remplazar estos valores con los que te dé Firebase en la consola
// Estos son marcadores de posición (placeholders)
const firebaseConfig = {
    apiKey: "AIzaSyDPCZ2f2hX6v5ybs-aW16T7we55wLOy9pA",
    authDomain: "fellowship-bisvo.firebaseapp.com",
    projectId: "fellowship-bisvo",
    storageBucket: "fellowship-bisvo.firebasestorage.app",
    messagingSenderId: "330674425508",
    appId: "1:330674425508:web:6c0a19a1d8ef8a6f21a031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
