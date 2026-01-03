// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
    getFirestore, addDoc, collection, serverTimestamp, query, 
    orderBy, limit, getDocs, doc, getDoc, updateDoc, deleteDoc, where 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeW7PFz9wntXO0OUj9N5V1DdkUxxI2VkQ", 
  authDomain: "k-hub-b4d8f.firebaseapp.com",
  projectId: "k-hub-b4d8f",
  storageBucket: "k-hub-b4d8f.appspot.com",
  messagingSenderId: "117649715938",
  appId: "1:117649715938:web:7768d7b4d27d66e8ba24bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Exporting utilities to be used across the site
export { 
    addDoc, collection, serverTimestamp, query, orderBy, 
    limit, getDocs, doc, getDoc, updateDoc, deleteDoc, where,
    ref, uploadBytes, getDownloadURL // Added storage utilities for image uploads
};
