document.addEventListener('DOMContentLoaded', () => {

    /* ==================== DICTIONNAIRE DE TRADUCTION ==================== */
    const translations = {
        fr: {
            navHome: "Accueil",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navPricing: "Tarifs",
            navContact: "Contact",
            navOrder: "Commander",
            heroTitle: "Des Miniatures YouTube Qui Captivent Votre Audience",
            heroSubtitle: "Transformez vos vues en abonnés fidèles avec des designs percutants et professionnels. Votre succès commence par un clic.",
            heroBtnPortfolio: "Voir nos créations",
            heroBtnPricing: "Découvrir les tarifs",
            servicesTitle: "Nos Services de Création",
            servicesSubtitle: "Des solutions sur mesure pour chaque créateur de contenu.",
            service1Title: "Pack 'Impact Rapide'",
            service1Desc: "Idéal pour les créateurs qui ont besoin de miniatures de haute qualité rapidement. Un design percutant pour un maximum de clics.",
            service2Title: "Abonnement 'Créateur Pro'",
            service2Desc: "Recevez un nombre défini de miniatures chaque mois. Gardez une cohérence visuelle et gagnez du temps.",
            service3Title: "Offre 'Luxe & Sur-Mesure'",
            service3Desc: "Une collaboration étroite pour définir une identité visuelle unique. Parfait pour les marques et les projets d'envergure.",
            portfolioTitle: "Notre Galerie de Créations",
            portfolioSubtitle: "Des images qui parlent d'elles-mêmes.",
            portfolioBtn: "Explorer le portfolio complet",
            testimonialsTitle: "Ce que disent nos clients",
            testimonial1Text: "\"Le taux de clics sur mes vidéos a augmenté de 30% depuis que je travaille avec Miniature Studio YT. Incroyable !\"",
            testimonial1Role: "Youtuber Tech",
            testimonial2Text: "\"Un service rapide, professionnel et à l'écoute. Ils ont parfaitement compris l'identité de ma chaîne.\"",
            testimonial2Role: "Créatrice Lifestyle",
            ctaTitle: "Prêt à faire décoller votre chaîne ?",
            ctaDesc: "Ne laissez pas vos vidéos se perdre dans la masse. Donnez-leur l'impact visuel qu'elles méritent.",
            ctaBtn: "Commander ma miniature",
            footerSlogan: "Créativité. Impact. Succès.",
            footerNav: "Navigation",
            navAbout: "À Propos",
            navFaq: "FAQ",
            footerServices: "Services",
            footerService1: "Impact Rapide",
            footerService2: "Créateur Pro",
            footerService3: "Luxe & Sur-Mesure",
            footerContact: "Contactez-nous",
            footerRights: "Tous droits réservés."
        },
        en: {
            navHome: "Home",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navPricing: "Pricing",
            navContact: "Contact",
            navOrder: "Order Now",
            heroTitle: "YouTube Thumbnails That Captivate Your Audience",
            heroSubtitle: "Turn views into loyal subscribers with impactful, professional designs. Your success starts with a click.",
            heroBtnPortfolio: "See Our Work",
            heroBtnPricing: "Discover Pricing",
            servicesTitle: "Our Creation Services",
            servicesSubtitle: "Tailor-made solutions for every content creator.",
            service1Title: "'Quick Impact' Pack",
            service1Desc: "Ideal for creators who need high-quality thumbnails quickly. A powerful design for maximum clicks.",
            service2Title: "'Creator Pro' Subscription",
            service2Desc: "Receive a set number of thumbnails each month. Maintain visual consistency and save time for your videos.",
            service3Title: "'Luxury & Custom' Offer",
            service3Desc: "Close collaboration to define a unique visual identity. Perfect for brands and large-scale projects.",
            portfolioTitle: "Our Creation Gallery",
            portfolioSubtitle: "Images that speak for themselves.",
            portfolioBtn: "Explore Full Portfolio",
            testimonialsTitle: "What Our Clients Say",
            testimonial1Text: "\"The click-through rate on my videos has increased by 30% since working with Miniature Studio YT. Incredible!\"",
            testimonial1Role: "Tech Youtuber",
            testimonial2Text: "\"A fast, professional, and attentive service. They perfectly understood my channel's identity.\"",
            testimonial2Role: "Lifestyle Creator",
            ctaTitle: "Ready to take your channel to the next level?",
            ctaDesc: "Don't let your videos get lost in the crowd. Give them the visual impact they deserve.",
            ctaBtn: "Order My Thumbnail",
            footerSlogan: "Creativity. Impact. Success.",
            footerNav: "Navigation",
            navAbout: "About",
            navFaq: "FAQ",
            footerServices: "Services",
            footerService1: "Quick Impact",
            footerService2: "Creator Pro",
            footerService3: "Luxury & Custom",
            footerContact: "Contact Us",
            footerRights: "All rights reserved."
        }
    };

    /* ==================== MENU MOBILE ==================== */
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Fermer le menu en cliquant sur un lien
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.addEventListener('click', () => {
        if (navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
        }
    }));

    /* ==================== HEADER COLLANT (STICKY) ==================== */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==================== ANIMATION AU DÉFILEMENT (SCROLL) ==================== */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    /* ==================== SYSTÈME DE LANGUE ==================== */
    const langFr = document.getElementById('lang-fr');
    const langEn = document.getElementById('lang-en');

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        // Mettre à jour les classes actives
        langFr.classList.toggle('active', lang === 'fr');
        langEn.classList.toggle('active', lang === 'en');

        // Traduire tous les éléments avec l'attribut data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(elem => {
            const key = elem.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                elem.textContent = translations[lang][key];
            }
        });
    };

    langFr.addEventListener('click', () => setLanguage('fr'));
    langEn.addEventListener('click', () => setLanguage('en'));

    // Appliquer la langue sauvegardée au chargement de la page
    const savedLang = localStorage.getItem('language') || 'fr';
    setLanguage(savedLang);

});
document.addEventListener('DOMContentLoaded', () => {
    // ... (tout le code JS existant) ...

    /* ==================== ACCORDÉON FAQ ==================== */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            item.classList.toggle('active');
        });
    });

    // ... (le reste du code JS existant comme le système de langue) ...
});
