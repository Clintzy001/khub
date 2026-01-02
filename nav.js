// nav.js - K-Hub Brand & Session-Aware Navigation
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    // 1. HIGHLIGHT ACTIVE TAB
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    // Select all nav links in your header
    document.querySelectorAll('nav a').forEach(link => {
        const linkPath = link.getAttribute('href');
        
        if (linkPath === currentPage) {
            link.className = "text-white border-b-2 border-purple-500 pb-1 font-bold transition";
        } else {
            link.className = "text-gray-400 hover:text-purple-400 transition font-medium";
        }
    });

    // 2. AUTH-SENSITIVE BUTTONS
    // This looks for a container in your HTML with id="nav-auth-section"
    const authSection = document.getElementById('nav-auth-section');
    
    if (authSection) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is logged in: Show Dashboard & Avatar
                const initial = user.displayName ? user.displayName.charAt(0) : "U";
                authSection.innerHTML = `
                    <div class="flex items-center gap-4">
                        <button onclick="window.location.href='user-dashboard.html'" class="hidden sm:block text-[10px] bg-white/10 px-4 py-2 rounded-xl font-bold hover:bg-white/20 transition">Dashboard</button>
                        <div onclick="window.location.href='profile.html'" class="w-9 h-9 rounded-full neon-gradient flex items-center justify-center font-bold cursor-pointer border border-white/20 shadow-lg shadow-purple-500/20">${initial}</div>
                    </div>
                `;
            } else {
                // User is logged out: Show Login button
                authSection.innerHTML = `
                    <button onclick="window.location.href='k-hub-login.html'" class="text-[11px] neon-gradient px-5 py-2 rounded-xl font-bold shadow-lg shadow-purple-500/20 active:scale-95 transition">Login</button>
                `;
            }
        });
    }
});
