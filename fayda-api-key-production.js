// IA FAYDA API Key Configuration - Version Production
// Ce fichier sera déployé sur Netlify
// La clé API sera injectée via les variables d'environnement

// Configuration de la clé API pour la production
const FAYDA_API_KEY = (() => {
    // Essayer les variables d'environnement Netlify
    if (typeof window !== 'undefined' && window.NETLIFY_ENV && window.NETLIFY_ENV.OPENAI_API_KEY) {
        return window.NETLIFY_ENV.OPENAI_API_KEY;
    }
    
    // Essayer les variables globales
    if (typeof window !== 'undefined' && window.OPENAI_API_KEY) {
        return window.OPENAI_API_KEY;
    }
    
    // Fallback : clé par défaut (à configurer via variables d'environnement Netlify)
    return 'VOTRE_CLE_API_ICI'; // Remplacez par votre vraie clé API dans les variables d'environnement Netlify
})();

// Configuration automatique de IA FAYDA
function configureAPIKey() {
    if (typeof window !== 'undefined') {
        if (window.FAYDA_CONFIG) {
            window.FAYDA_CONFIG.openai.apiKey = FAYDA_API_KEY;
            console.log('🔑 Clé API OpenAI configurée pour IA FAYDA (Production)');
            console.log('🔑 Clé API (premiers caractères):', FAYDA_API_KEY.substring(0, 10) + '...');
            return true;
        } else {
            console.warn('⏳ FAYDA_CONFIG pas encore chargé, réessai dans 100ms...');
            return false;
        }
    } else {
        console.log('🔑 Clé API prête pour configuration côté serveur');
        return true;
    }
}

// Essayer de configurer immédiatement
if (!configureAPIKey()) {
    // Si ça ne marche pas, réessayer après un délai
    let attempts = 0;
    const maxAttempts = 10;
    const interval = setInterval(() => {
        attempts++;
        if (configureAPIKey() || attempts >= maxAttempts) {
            clearInterval(interval);
            if (attempts >= maxAttempts) {
                console.error('❌ Impossible de configurer la clé API après', maxAttempts, 'tentatives');
            }
        }
    }, 100);
}

// Export pour Node.js si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FAYDA_API_KEY;
}
