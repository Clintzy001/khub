// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_FROM_FIREBASE_CONSOLE", 
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

// Export Firestore Utilities for easy use in other files
export { addDoc, collection, serverTimestamp };

/**
 * Global function to send notifications across K-Hub
 * @param {string} recipientId - The UID of the user receiving the notification
 * @param {string} type - category: 'follow', 'post', 'transport', 'sold', 'system'
 * @param {string} title - Short headline for the notification
 * @param {string} message - The main body text
 */
export async function sendNotification(recipientId, type, title, message) {
    try {
        await addDoc(collection(db, "notifications"), {
            recipientId: recipientId,
            type: type, 
            title: title,
            message: message,
            read: false,
            createdAt: serverTimestamp()
        });
        console.log("Notification sent successfully");
    } catch (error) {
        console.error("Error sending notification: ", error);
    }
}
