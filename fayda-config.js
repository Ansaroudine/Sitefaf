// FAYDA IA Configuration
// Ce fichier contient la configuration pour FAYDA IA

const FAYDA_CONFIG = {
    // URL du webhook pour les réponses IA
    // Remplacez par votre URL de webhook
    webhookUrl: 'https://votre-webhook-url.com/api/fayda-ia',
    
    // Configuration de l'IA
    ai: {
        // Modèle d'IA à utiliser
        model: 'gpt-3.5-turbo',
        
        // Paramètres de température (0.0 = déterministe, 1.0 = créatif)
        temperature: 0.7,
        
        // Nombre maximum de tokens dans la réponse
        maxTokens: 500,
        
        // Contexte spécifique à la Fayda Tijani
        systemPrompt: `Tu es FAYDA IA, un assistant virtuel spécialisé dans la Fayda Tijani et Ansaroudine France. 
        
Ton rôle est d'aider et guider les talibés (disciples) de Cheikh Ibrahim NIASS en France.

Tu dois :
- Répondre aux questions sur la Fayda Tijani avec précision et respect
- Guider les utilisateurs vers les activités d'Ansaroudine France
- Fournir des informations sur les séances de Hadra, les contacts, etc.
- Utiliser un langage respectueux et spirituel approprié
- Toujours mentionner "As-salamu alaykum" pour saluer
- Terminer par "Barakallahu fik" ou "Allahu a'lam" selon le contexte

Informations importantes sur Ansaroudine France :
- Adresse : 13 rue des Terres au Curé, Paris 13ème
- Président : Souleymane SOW (+33 6 74 16 44 82)
- ACS Présidente : Hadja Aminata (07 53 76 71 98)
- ACS Vice-Président : Malik Fall (07 89 89 75 45)
- Gestion commandes : Yacine Diouf (07 82 11 82 41)

Reste toujours dans le contexte de la spiritualité tijani et de la communauté Ansaroudine.`
    },
    
    // Messages par défaut
    messages: {
        welcome: "As-salamu alaykum ! Je suis FAYDA IA, votre assistant virtuel pour la Fayda Tijani et Ansaroudine France. Comment puis-je vous aider aujourd'hui ?",
        
        error: "Désolé, je rencontre un problème technique. Veuillez réessayer plus tard ou contactez directement la fédération.",
        
        typing: "FAYDA IA tape...",
        
        offline: "Je suis temporairement indisponible. Vous pouvez contacter directement la fédération pour vos questions."
    },
    
    // Questions rapides
    quickQuestions: [
        {
            question: "Qu'est-ce que la Fayda Tijani ?",
            icon: "fas fa-question-circle"
        },
        {
            question: "Comment rejoindre Ansaroudine France ?",
            icon: "fas fa-users"
        },
        {
            question: "Où sont les séances de Hadra ?",
            icon: "fas fa-map-marker-alt"
        },
        {
            question: "Comment contacter la fédération ?",
            icon: "fas fa-phone"
        },
        {
            question: "Quels sont les horaires des séances ?",
            icon: "fas fa-clock"
        },
        {
            question: "Comment acheter des livres ?",
            icon: "fas fa-book"
        }
    ],
    
    // Configuration de l'interface
    ui: {
        // Délai avant d'afficher la notification (en millisecondes)
        notificationDelay: 3000,
        
        // Durée de l'animation de frappe (en millisecondes)
        typingDuration: 2000,
        
        // Nombre maximum de messages à garder en mémoire
        maxHistoryLength: 20,
        
        // Sauvegarder l'historique dans localStorage
        saveHistory: true,
        
        // Afficher l'heure des messages
        showTimestamps: true,
        
        // Position du chatbot (bottom-left, bottom-right)
        position: 'bottom-left'
    },
    
    // Configuration du webhook
    webhook: {
        // Timeout pour les requêtes (en millisecondes)
        timeout: 10000,
        
        // Nombre de tentatives en cas d'échec
        retryAttempts: 3,
        
        // Délai entre les tentatives (en millisecondes)
        retryDelay: 1000,
        
        // Headers supplémentaires pour les requêtes
        headers: {
            'X-API-Key': '', // Ajoutez votre clé API si nécessaire
            'X-Source': 'fayda-ia-chatbot',
            'X-Version': '1.0.0'
        }
    }
};

// Fonction pour configurer FAYDA IA après initialisation
function configureFaydaIA() {
    if (window.faydaIA) {
        // Configurer l'URL du webhook
        window.faydaIA.setWebhookUrl(FAYDA_CONFIG.webhookUrl);
        
        console.log('🤖 FAYDA IA configured with webhook:', FAYDA_CONFIG.webhookUrl);
    }
}

// Exporter la configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FAYDA_CONFIG;
}

// Configuration automatique après le chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Attendre que FAYDA IA soit initialisé
    setTimeout(configureFaydaIA, 1000);
});
