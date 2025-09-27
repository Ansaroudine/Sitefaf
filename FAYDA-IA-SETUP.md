# FAYDA IA - Configuration et Déploiement

## 🤖 Présentation

FAYDA IA est un assistant virtuel intelligent intégré au site de la Fédération Ansaroudine de France. Il aide et guide les talibés sur des questions concernant la Fayda Tijani et les activités de la fédération.

## 📋 Fonctionnalités

- **Interface moderne** : Chatbot avec design responsive
- **Questions rapides** : Boutons prédéfinis pour les questions courantes
- **Historique** : Sauvegarde des conversations dans le navigateur
- **Notifications** : Indicateur de nouvelles interactions
- **Webhook** : Intégration avec votre système IA via API

## 🔧 Configuration du Webhook

### 1. Modifier l'URL du Webhook

Éditez le fichier `fayda-config.js` et remplacez l'URL par défaut :

```javascript
const FAYDA_CONFIG = {
    webhookUrl: 'https://votre-webhook-url.com/api/fayda-ia',
    // ... reste de la configuration
};
```

### 2. Format des Requêtes

Le chatbot envoie des requêtes POST avec le format suivant :

```json
{
    "message": "Question de l'utilisateur",
    "context": {
        "page": "/index.html",
        "timestamp": "2024-01-01T12:00:00.000Z",
        "userAgent": "Mozilla/5.0..."
    },
    "history": [
        {
            "sender": "user",
            "content": "Message précédent",
            "timestamp": "2024-01-01T11:59:00.000Z"
        }
    ]
}
```

### 3. Format des Réponses

Votre webhook doit répondre avec :

```json
{
    "response": "Réponse de FAYDA IA",
    "status": "success"
}
```

## 🚀 Exemple d'Implémentation Webhook

### Node.js/Express

```javascript
app.post('/api/fayda-ia', async (req, res) => {
    try {
        const { message, context, history } = req.body;
        
        // Traitement avec votre IA (OpenAI, Claude, etc.)
        const aiResponse = await processWithAI(message, context);
        
        res.json({
            response: aiResponse,
            status: 'success'
        });
    } catch (error) {
        res.status(500).json({
            response: 'Désolé, je rencontre un problème technique.',
            status: 'error'
        });
    }
});
```

### Python/Flask

```python
@app.route('/api/fayda-ia', methods=['POST'])
def fayda_ia():
    try:
        data = request.get_json()
        message = data.get('message')
        context = data.get('context', {})
        history = data.get('history', [])
        
        # Traitement avec votre IA
        ai_response = process_with_ai(message, context, history)
        
        return jsonify({
            'response': ai_response,
            'status': 'success'
        })
    except Exception as e:
        return jsonify({
            'response': 'Désolé, je rencontre un problème technique.',
            'status': 'error'
        }), 500
```

## 📱 Interface Utilisateur

### Bouton de Chat
- **Position** : Bas gauche de l'écran
- **Design** : Bouton vert avec icône robot
- **Notification** : Point rouge pour attirer l'attention

### Fenêtre de Chat
- **Taille** : 380px × 500px sur desktop
- **Responsive** : Pleine largeur sur mobile
- **Animations** : Transitions fluides

### Questions Rapides
- Qu'est-ce que la Fayda Tijani ?
- Comment rejoindre Ansaroudine France ?
- Où sont les séances de Hadra ?
- Comment contacter la fédération ?

## 🎨 Personnalisation

### Couleurs
Les couleurs suivent la charte graphique du site :
- **Vert principal** : `#2d5a27`
- **Vert secondaire** : `#4a7c59`
- **Vert clair** : `#e8f5e8`

### Messages
Modifiez les messages dans `fayda-config.js` :

```javascript
messages: {
    welcome: "Votre message d'accueil personnalisé",
    error: "Message d'erreur personnalisé",
    // ...
}
```

## 🔒 Sécurité

### Headers Recommandés
```javascript
headers: {
    'X-API-Key': 'votre-cle-secrete',
    'X-Source': 'fayda-ia-chatbot',
    'X-Version': '1.0.0'
}
```

### Validation des Données
- Vérifiez la longueur des messages (max 500 caractères)
- Sanitisez les entrées utilisateur
- Limitez le taux de requêtes par IP

## 📊 Analytics (Optionnel)

Le chatbot peut envoyer des métriques utiles :

```javascript
// Dans votre webhook
const metrics = {
    page: context.page,
    timestamp: context.timestamp,
    messageLength: message.length,
    hasHistory: history.length > 0
};
```

## 🛠️ Débogage

### Console du Navigateur
```javascript
// Accéder à l'instance FAYDA IA
console.log(window.faydaIA);

// Vérifier l'historique
console.log(window.faydaIA.messageHistory);

// Tester le webhook
window.faydaIA.setWebhookUrl('https://votre-webhook.com/api/fayda-ia');
```

### Logs Recommandés
- Loggez toutes les requêtes entrantes
- Enregistrez les erreurs de traitement
- Surveillez les performances

## 📈 Optimisations

### Performance
- **Cache** : Mettez en cache les réponses fréquentes
- **Compression** : Compressez les réponses JSON
- **CDN** : Utilisez un CDN pour les assets statiques

### UX
- **Typing Indicator** : Simulez la frappe de l'IA
- **Suggestion** : Proposez des questions suivantes
- **Raccourcis** : Ajoutez des commandes rapides

## 🚀 Déploiement

1. **Configurez votre webhook** avec l'URL de production
2. **Testez** sur un environnement de staging
3. **Déployez** sur Netlify avec les fichiers mis à jour
4. **Surveillez** les logs et les performances

## 📞 Support

Pour toute question sur l'implémentation de FAYDA IA :
- Vérifiez les logs de la console du navigateur
- Testez votre webhook avec des outils comme Postman
- Consultez la documentation de votre fournisseur d'IA

---

**FAYDA IA** - Assistant virtuel pour la Fayda Tijani et Ansaroudine France 🤖✨
