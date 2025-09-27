# 🚀 Configuration IA FAYDA pour Netlify

## 🔧 Configuration des Variables d'Environnement

### Étape 1 : Accéder aux paramètres Netlify

1. **Connectez-vous** à votre compte Netlify
2. **Sélectionnez** votre site "Sitefaf"
3. **Allez dans** "Site settings"
4. **Cliquez sur** "Environment variables" dans le menu de gauche

### Étape 2 : Ajouter la variable d'environnement

1. **Cliquez sur** "Add a variable"
2. **Nom de la variable** : `OPENAI_API_KEY`
3. **Valeur** : Votre clé API OpenAI (commence par `sk-proj-...`)
4. **Cliquez sur** "Save"

### Étape 3 : Redéployer le site

1. **Allez dans** "Deploys" dans le menu principal
2. **Cliquez sur** "Trigger deploy" → "Deploy site"
3. **Attendez** que le déploiement soit terminé

## 🔍 Vérification

### Après le déploiement :

1. **Ouvrez** votre site sur Netlify
2. **Ouvrez** la console développeur (F12)
3. **Cherchez** les messages :
   ```
   🔑 Clé API OpenAI configurée pour IA FAYDA (Production)
   🤖 IA FAYDA initialized successfully!
   ✅ Configuration OpenAI chargée correctement
   ```

### Si le chatbot n'apparaît pas :

1. **Vérifiez** que la variable d'environnement est bien définie
2. **Vérifiez** que le déploiement s'est bien terminé
3. **Videz le cache** du navigateur (Ctrl+F5)
4. **Consultez** les erreurs dans la console

## 🛠️ Dépannage

### Erreur "Configuration OpenAI manquante" :
- ✅ Vérifiez que `OPENAI_API_KEY` est définie dans Netlify
- ✅ Vérifiez que la clé API est correcte
- ✅ Redéployez le site après avoir ajouté la variable

### Chatbot invisible :
- ✅ Vérifiez que tous les scripts sont chargés
- ✅ Vérifiez les erreurs JavaScript dans la console
- ✅ Vérifiez que le bouton "IA FAYDA" est présent

### Chatbot ne répond pas :
- ✅ Vérifiez votre quota OpenAI
- ✅ Vérifiez que la clé API est valide
- ✅ Testez avec une question simple

## 📋 Structure des fichiers

### Fichiers déployés :
- ✅ `fayda-config.js` - Configuration principale
- ✅ `fayda-api-key-production.js` - Configuration clé API (production)
- ✅ `fayda-ia.js` - Logique du chatbot
- ✅ Toutes les pages HTML

### Fichiers NON déployés (sécurité) :
- ❌ `fayda-api-key.js` - Version locale (dans .gitignore)

## 🔒 Sécurité

### Bonnes pratiques :
- ✅ **Ne jamais** commiter la clé API dans le code
- ✅ **Utiliser** les variables d'environnement Netlify
- ✅ **Surveiller** l'utilisation de votre clé API
- ✅ **Régénérer** la clé si elle est compromise

## 📞 Support

### Si vous rencontrez des problèmes :
1. **Vérifiez** ce guide
2. **Consultez** les logs Netlify
3. **Testez** en local avec `fayda-api-key.js`
4. **Vérifiez** votre configuration OpenAI

---

**IA FAYDA** - Assistant virtuel pour la Fayda Tijani 🤖✨
