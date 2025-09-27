// FAYDA IA Configuration
// Ce fichier contient la configuration pour FAYDA IA

const FAYDA_CONFIG = {
    // Configuration OpenAI
    openai: {
        apiKey: '', // À configurer par l'utilisateur
        model: 'gpt-3.5-turbo-1106', // Modèle le plus économique
        maxTokens: 300, // Réduit pour économiser les tokens
        temperature: 0.7
    },
    
    // Configuration de l'IA
    ai: {
        // Modèle d'IA à utiliser
        model: 'gpt-3.5-turbo-1106',
        
        // Paramètres de température (0.0 = déterministe, 1.0 = créatif)
        temperature: 0.7,
        
        // Nombre maximum de tokens dans la réponse
        maxTokens: 500,
        
        // Contexte spécifique à la Fayda Tijani
        systemPrompt: `Tu es IA FAYDA, un assistant virtuel exclusivement dédié à la Fayda Tijani, Cheikh Ibrahim NIASS et Ansaroudine France.

BASE DE CONNAISSANCES :

FAYDA TIJANI :
- Définition : Mouvement de renouveau spirituel au sein de la Tariqa Tijaniyya, initié par Cheikh Ibrahim NIASS au début du XXe siècle. Signifie "inondation" en arabe.
- Principes : Transmission du Wird Tijani, pratique du Zikr, organisation des Hadra, enseignement spirituel, promotion de la fraternité.
- Pratiques : Wird Tijani quotidien, Zikr, Hadra collectives, Tarbiya (éducation spirituelle), Khidma (service communautaire).

CHEIKH IBRAHIM NIASS (1900-1975) :
- Titre : Khalif de la Tariqa Tijaniyya
- Lieu : Kaolack, Sénégal
- Héritage : Fondateur de la Fayda Tijani, diffusion massive de la voie tijani
- Enseignements : Simplicité spirituelle, accessibilité pour tous, importance de la fraternité, éducation islamique

ANSAROUDINE FRANCE :
- Mission : Promouvoir les valeurs de la Fayda Tijani en France
- Activités : Séances de Hadra, enseignement arabe/Coran, accompagnement scolaire, manifestations culturelles, actions sociales
- Valeurs : Fraternité, solidarité, respect, tolérance, éducation, service communautaire

CONTACTS ANSAROUDINE FRANCE :
- Adresse : 13 rue des Terres au Curé, Paris 13ème
- Président : Souleymane SOW (+33 6 74 16 44 82)
- ACS Présidente : Hadja Aminata (07 53 76 71 98)
- ACS Vice-Président : Malik Fall (07 89 89 75 45)
- Gestion commandes : Yacine Diouf (07 82 11 82 41)

RÈGLES STRICTES :
1. RÉPONSE UNIQUEMENT sur la Fayda Tijani, Cheikh Ibrahim NIASS et Ansaroudine
2. Hors sujet : "Je suis spécialisé dans la Fayda Tijani et Cheikh Ibrahim NIASS. Comment puis-je vous aider concernant la spiritualité tijani ?"
3. Langage respectueux et spirituel
4. Commence par "As-salamu alaykum"
5. Termine par "Barakallahu fik" ou "Allahu a'lam"

RESTE STRICTEMENT dans l'univers tijani et Ansaroudine France.`
    },
    
    // Base de connaissances sur la Fayda Tijani
    knowledgeBase: {
        fayda: {
            definition: "La Fayda Tijani est un mouvement de renouveau spirituel au sein de la Tariqa Tijaniyya, initié par Cheikh Ibrahim NIASS au début du XXe siècle. Elle signifie 'inondation' en arabe, symbolisant la diffusion massive de la voie tijani.",
            principes: [
                "Transmission de la Wird Tijani (litanies)",
                "Pratique du Zikr (invocation divine)",
                "Organisation des Hadra (séances de dhikr)",
                "Enseignement de la spiritualité islamique",
                "Promotion de la fraternité et de l'entraide"
            ],
            pratiques: [
                "Wird Tijani : récitation quotidienne des litanies",
                "Zikr : invocation répétée des noms d'Allah",
                "Hadra : séances collectives de dhikr",
                "Tarbiya : éducation spirituelle",
                "Khidma : service à la communauté"
            ]
        },
        cheikhIbrahim: {
            nom: "Cheikh Ibrahim NIASS",
            titre: "Khalif de la Tariqa Tijaniyya",
            periode: "1900-1975",
            lieu: "Kaolack, Sénégal",
            heritage: "Fondateur de la Fayda Tijani, il a contribué à la diffusion massive de la voie tijani en Afrique de l'Ouest et dans le monde.",
            enseignements: [
                "Simplicité dans la pratique spirituelle",
                "Accessibilité de la voie tijani à tous",
                "Importance de la fraternité et de l'entraide",
                "Enseignement de l'islam authentique",
                "Promotion de l'éducation et de la culture"
            ]
        },
        ansaroudine: {
            mission: "Promouvoir les valeurs de la Fayda Tijani en France",
            activites: [
                "Séances de Hadra régulières",
                "Enseignement de l'arabe et du Coran",
                "Accompagnement scolaire et éducatif",
                "Manifestations culturelles",
                "Actions sociales et humanitaires"
            ],
            valeurs: [
                "Fraternité et solidarité",
                "Respect et tolérance",
                "Éducation et formation",
                "Service à la communauté",
                "Promotion de la paix sociale"
            ]
        }
    },
    
    // Messages par défaut
    messages: {
        welcome: "As-salamu alaykum ! Je suis IA FAYDA, votre assistant virtuel pour la Fayda Tijani et Ansaroudine France. Comment puis-je vous aider aujourd'hui ?",
        
        error: "Désolé, je rencontre un problème technique. Veuillez réessayer plus tard ou contactez directement la fédération.",
        
        typing: "IA FAYDA tape...",
        
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
        // Vérifier la configuration OpenAI
        const isConfigured = window.faydaIA.checkConfiguration();
        
        if (isConfigured) {
            console.log('🤖 IA FAYDA configured with OpenAI API');
            console.log('🎯 Domaine spécialisé : Fayda Tijani, Cheikh Ibrahim NIASS, Ansaroudine France');
        } else {
            console.warn('⚠️ IA FAYDA: Configuration OpenAI manquante');
        }
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
