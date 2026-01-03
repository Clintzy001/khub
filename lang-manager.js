// 1. The Big Dictionary (Add all your site words here)
const translations = {
    en: {
        messages: "Messages",
        home: "Home",
        dash: "Dashboard",
        edit_profile: "Edit Profile",
        save: "Save Changes",
        close_ticket: "Close Ticket",
        msg_seller: "Message Seller"
    },
    ha: {
        messages: "Saƙonni",
        home: "Gida",
        dash: "Sashin Kulawa",
        edit_profile: "Gyara Bayani",
        save: "Ajiye",
        close_ticket: "Rufe Magana",
        msg_seller: "Yi Magana da Mai Shago"
    },
    ig: {
        messages: "Ozi",
        home: "Ụlọ",
        dash: "Dashboard",
        edit_profile: "Dezie Profaịlụ",
        save: "Chekwaa",
        close_ticket: "Mechie Tiketi",
        msg_seller: "Gwa Onye Na-ere Ahịa"
    },
    yo: {
        messages: "Àwọn Iṣẹ́",
        home: "Ilé",
        dash: "Dashboard",
        edit_profile: "Ṣatúnṣe Profaịlụ",
        save: "Fi Pamọ́",
        close_ticket: "Pa Tiketi Dé",
        msg_seller: "Bá Olùtajà Sọ̀rọ̀"
    }
};

// 2. The Function that actually flips the switch
window.applySiteLanguage = function(lang) {
    // Save the choice so it persists across all pages
    localStorage.setItem('kHubLang', lang);

    // Find every element that has a 'data-lang-key'
    const elements = document.querySelectorAll('[data-lang-key]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Sync all dropdowns on the page to show the current language
    document.querySelectorAll('.lang-select-dropdown').forEach(select => {
        select.value = lang;
    });
    
    // Dispatch a custom event in case specific pages need to do more (like update Firebase queries)
    window.dispatchEvent(new CustomEvent('langChanged', { detail: lang }));
};

// 3. Auto-run when any page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('kHubLang') || 'en';
    window.applySiteLanguage(savedLang);
});
