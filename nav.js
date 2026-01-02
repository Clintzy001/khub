// nav.js - Handles page transitions and active states
document.addEventListener("DOMContentLoaded", () => {
    // 1. Make all links work
    const links = {
        "Home": "index.html",
        "Jobs": "job-search.html",
        "Rent": "rentals.html",
        "Shop": "shop.html",
        "Transport": "transport.html",
        "Admin": "admin-dashboard.html"
    };

    // 2. Logic to highlight the active page
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('text-white', 'border-b-2', 'border-purple-500');
            link.classList.remove('text-gray-400');
        }
    });
});
