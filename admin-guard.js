import { auth, db, doc, getDoc, deleteDoc } from './firebase-config.js';

export function initAdminLogic(collectionName) {
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists() && userSnap.data().isAdmin === true) {
                // Show Banner
                const banner = document.createElement('div');
                banner.className = "fixed top-0 left-0 w-full bg-red-600 text-white text-[10px] font-black uppercase py-1 text-center z-[2000] tracking-widest";
                banner.innerText = `K-HUB ADMIN: ${collectionName.toUpperCase()} MANAGEMENT`;
                document.body.appendChild(banner);

                // Reveal Admin Buttons
                document.querySelectorAll('.admin-only').forEach(el => el.classList.remove('hidden'));
            }
        }
    });

    window.adminDeleteAny = async (id) => {
        if (confirm("Delete this entry forever?")) {
            await deleteDoc(doc(db, collectionName, id));
            location.reload();
        }
    };
}
