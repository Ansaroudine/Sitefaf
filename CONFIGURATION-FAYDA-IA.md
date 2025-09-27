# 🤖 Configuration FAYDA IA - Assistant Virtuel Tijani

## 📋 Prérequis

Pour que FAYDA IA fonctionne, vous devez configurer votre clé API OpenAI.

## 🔑 Configuration de la Clé API

### Étape 1 : Obtenir une clé API OpenAI

1. Allez sur [OpenAI Platform](https://platform.openai.com/)
2. Créez un compte ou connectez-vous
3. Allez dans "API Keys"
4. Créez une nouvelle clé API
5. Copiez la clé (commence par `sk-`)

### Étape 2 : Configurer la clé dans le projet

1. **Ouvrez le fichier** `fayda-api-key.js`
2. **Remplacez** `VOTRE_CLE_API_ICI` par votre vraie clé API
3. **Sauvegardez** le fichier

```javascript
// Dans fayda-api-key.js
const FAYDA_API_KEY = 'sk-votre-vraie-cle-api-ici';
```

### Étape 3 : Vérifier la configuration

1. **Ouvrez** votre site dans un navigateur
2. **Ouvrez** la console développeur (F12)
3. **Cherchez** le message : `🔑 Clé API OpenAI configurée pour FAYDA IA`

## 🎯 Fonctionnalités de FAYDA IA

### Domaine de compétence strict :
- ✅ **Fayda Tijani** : Histoire, principes, pratiques
- ✅ **Cheikh Ibrahim NIASS** : Biographie, enseignements
- ✅ **Ansaroudine France** : Activités, contacts
- ✅ **Spiritualité tijani** : Zikr, Hadra, pratiques
- ❌ **Questions hors sujet** : Redirection vers le domaine tijani

### Base de connaissances intégrée :
- Définition de la Fayda Tijani
- Biographie de Cheikh Ibrahim NIASS
- Activités d'Ansaroudine France
- Contacts et informations pratiques
- Valeurs et principes spirituels

## 🔒 Sécurité

### Fichiers protégés :
- `fayda-api-key.js` - **NE JAMAIS COMMITER** sur GitHub
- `.gitignore` - Protège les fichiers sensibles
- Clé API - Stockée localement uniquement

### Bonnes pratiques :
1. **Ne partagez jamais** votre clé API
2. **Ne commitez jamais** le fichier `fayda-api-key.js`
3. **Surveillez** l'utilisation de votre clé API
4. **Régénérez** la clé si elle est compromise

## 🚀 Déploiement

### En local :
1. Configurez `fayda-api-key.js`
2. Ouvrez le site dans un navigateur
3. Testez FAYDA IA

### Sur Netlify :
1. **Important** : Le fichier `fayda-api-key.js` n'est PAS déployé
2. **Configurez** la clé directement sur le serveur
3. **Utilisez** les variables d'environnement Netlify

### Variables d'environnement Netlify :
```bash
OPENAI_API_KEY=sk-votre-cle-api-ici
```

## 🛠️ Personnalisation

### Modifier le prompt système :
Éditez `fayda-config.js` → `systemPrompt`

### Ajouter des connaissances :
Éditez `fayda-config.js` → `knowledgeBase`

### Changer le modèle IA :
Éditez `fayda-config.js` → `openai.model`

## 📊 Monitoring

### Console du navigateur :
- Messages de configuration
- Erreurs d'API
- Logs de conversation

### OpenAI Dashboard :
- Utilisation des tokens
- Coûts par requête
- Limites de taux

## 🔧 Dépannage

### Erreur "Configuration OpenAI manquante" :
- Vérifiez que `fayda-api-key.js` est chargé
- Vérifiez que la clé API est correcte
- Vérifiez l'ordre des scripts dans HTML

### Erreur "OpenAI API error" :
- Vérifiez votre quota OpenAI
- Vérifiez la validité de votre clé
- Vérifiez votre connexion internet

### Chat ne répond pas :
- Vérifiez la console pour les erreurs
- Vérifiez que la clé API est configurée
- Testez avec une question simple

## 📞 Support

Pour toute question sur la configuration de FAYDA IA :
1. Vérifiez ce guide
2. Consultez les logs de la console
3. Vérifiez votre configuration OpenAI

---

**FAYDA IA** - Assistant virtuel spécialisé dans la Fayda Tijani 🤖✨
