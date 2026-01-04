import { auth, db, doc, onSnapshot } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 1. THE GATEKEEPER: Redirect if not logged in
onAuthStateChanged(auth, (user) => {
    const isLoginPage = window.location.pathname.includes('login.html');

    if (!user && !isLoginPage) {
        // Not logged in? Kick them to login page
        window.location.href = 'login.html';
    } else if (user) {
        // Logged in? Sync their settings LIVE from Firestore
        syncUserSettings(user.uid);
        updateGlobalUI(user);
    }
});

// 2. LIVE SETTINGS SYNC: When Firestore changes, all tabs update
function syncUserSettings(uid) {
    onSnapshot(doc(db, "users", uid), (doc) => {
        if (doc.exists()) {
            const data = doc.data();
            
            // If they changed language in settings, apply it everywhere
            if (data.language && data.language !== localStorage.getItem('kHubLang')) {
                if (window.applySiteLanguage) {
                    window.applySiteLanguage(data.language);
                }
            }
            
            // You can sync other things here like "Dark Mode" or "Username"
            document.querySelectorAll('.global-username').forEach(el => {
                el.innerText = data.username || "User";
            });
        }
    });
}

// 3. GLOBAL UI: Handle Login/Logout buttons across the site
function updateGlobalUI(user) {
    const authBtn = document.getElementById('global-auth-btn');
    if (authBtn) {
        authBtn.innerText = "Logout";
        authBtn.onclick = () => signOut(auth).then(() => window.location.href = 'login.html');
    }
}
