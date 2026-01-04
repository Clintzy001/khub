// 1. The MASTER Dictionary - Includes all keys used in About, Profile, and Admin
const translations = {
    en: {
        // Navigation & General
        home: "Home",
        dash: "Dashboard",
        shop: "Shop",
        messages: "Messages",
        back_home: "Back to Home",
        back_dash: "Back to Dashboard",
        
        // Profile & Edit
        edit_profile: "Edit Profile",
        save: "Save Changes",
        cancel: "Cancel",
        label_name: "Full Name / Store Name",
        label_phone: "WhatsApp Number",
        follow: "Follow",
        following: "Following",
        followers: "Followers",
        verified: "VERIFIED SELLER ✅",
        listings: "Listings",
        no_listings: "No listings found for this user.",
        msg_seller: "Message Seller",

        // Admin & About
        close_ticket: "Close Ticket",
        our: "OUR",
        mission: "MISSION",
        mission_sub: "Bridging Kano's Commerce & Community",
        vision_title: "The Vision",
        local_title: "The Local Touch"
    },
    ha: {
        home: "Gida",
        dash: "Sashin Kulawa",
        shop: "Shago",
        messages: "Saƙonni",
        back_home: "Koma Gida",
        back_dash: "Koma Sashin Kulawa",
        
        edit_profile: "Gyara Bayani",
        save: "Ajiye",
        cancel: "Soke",
        label_name: "Cikakken Suna",
        label_phone: "Lambar WhatsApp",
        follow: "Bi Mu",
        following: "Kana Bi",
        followers: "Masu Bi",
        verified: "MAI SHAGO INGANNTACCE ✅",
        listings: "Tallace-tallace",
        no_listings: "Ba a sami wani tallace-tallace ba.",
        msg_seller: "Yi Magana da Mai Shago",

        close_ticket: "Rufe Magana",
        our: "MANUFAR",
        mission: "MU",
        mission_sub: "Haɗa Kasuwancin Kano da Al'umma",
        vision_title: "Burinmu",
        local_title: "Gida Ne"
    },
    ig: {
        home: "Ụlọ",
        dash: "Dashboard",
        shop: "Ụlọ Ahịa",
        messages: "Ozi",
        back_home: "Laghachi n'ụlọ",
        back_dash: "Laghachi na Dashboard",

        edit_profile: "Dezie Profaịlụ",
        save: "Chekwaa",
        cancel: "Kagbuo",
        label_name: "Aha zuru ezu",
        label_phone: "Nọmba WhatsApp",
        follow: "Soro",
        following: "Na-eso",
        followers: "Ndị Na-eso",
        verified: "ONYE NA-ERE AHỊA ✅",
        listings: "Ihe Ndị A Na-ere",
        no_listings: "Enweghị ihe achọtara.",
        msg_seller: "Gwa Onye Na-ere Ahịa",

        close_ticket: "Mechie Tiketi",
        our: "ANYI",
        mission: "EBUMLUANỤ",
        mission_sub: "Ijikọ azụmahịa Kano na obodo",
        vision_title: "Ọhụụ Ahụ",
        local_title: "Metụ Obodo"
    },
    yo: {
        home: "Ilé",
        dash: "Dashboard",
        shop: "Ìtajà",
        messages: "Àwọn Iṣẹ́",
        back_home: "Padà sí Ilé",
        back_dash: "Padà sí Dashboard",

        edit_profile: "Ṣatúnṣe Profaịlụ",
        save: "Fi Pamọ́",
        cancel: "Fagilee",
        label_name: "Orukọ Kikun",
        label_phone: "Nọmba WhatsApp",
        follow: "Tẹ̀lé",
        following: "Ò ń Tẹ̀lé",
        followers: "Awọn Olutẹle",
        verified: "OLÙTAJÀ TÍ A FỌWỌ́SÍ ✅",
        listings: "Àwọn Ọjà",
        no_listings: "Kò sí ọjà kankan.",
        msg_seller: "Bá Olùtajà Sọ̀rọ̀",

        close_ticket: "Pa Tiketi Dé",
        our: "ERONGBA",
        mission: "WA",
        mission_sub: "Sísopọ̀ Ìṣòwò Kano àti Àwùjọ",
        vision_title: "Ìran Wa",
        local_title: "Ìfọwọ́sowọ́pọ̀ Agbègbè"
    }
};

// 2. The Hybrid Switcher - Works with data-attributes AND classes
window.applySiteLanguage = function(lang) {
    localStorage.setItem('kHubLang', lang);

    // Technique A: Look for [data-lang-key] (Modern approach)
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Technique B: Look for .lang- (Legacy approach for existing pages)
    Object.keys(translations[lang]).forEach(key => {
        const cssClass = `.lang-${key.replace(/_/g, '-')}`;
        document.querySelectorAll(cssClass).forEach(el => {
            el.innerText = translations[lang][key];
        });
    });

    // Technique C: Sync all dropdowns regardless of ID/Class
    const selectors = '.lang-select-dropdown, #lang-select, #lang-select-desktop, #lang-select-mobile';
    document.querySelectorAll(selectors).forEach(select => {
        select.value = lang;
    });
    
    window.dispatchEvent(new CustomEvent('langChanged', { detail: lang }));
};

// 3. Global Bootstrapper
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('kHubLang') || 'en';
    window.applySiteLanguage(savedLang);
});
