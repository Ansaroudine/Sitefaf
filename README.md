# Site Web - Fédération Ansaroudine de France

Un site web moderne et responsive pour la Fédération Ansaroudine de France, une organisation religieuse tijani.

## 🎨 Design

- **Couleurs** : Thème vert et blanc conforme à la charte graphique
- **Responsive** : Adapté pour tous les appareils (desktop, tablette, mobile)
- **Moderne** : Interface utilisateur intuitive et élégante
- **Accessible** : Navigation claire et structure sémantique

## 📁 Structure du projet

```
Sitefaf/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript pour les interactions
├── logo-faf.png        # Logo de la Fédération (à ajouter)
└── README.md           # Documentation
```

## 🚀 Fonctionnalités

### Navigation
- **Menu responsive** avec hamburger sur mobile
- **Navigation fluide** entre les sections
- **Indicateur de section active** dans le menu

### Sections
1. **Accueil** - Page d'accueil avec présentation
2. **Fédération** - Informations sur l'organisation
3. **ACS** - Actions Caritatives et Sociales
4. **À propos** - Informations de contact et présentation

### Interactions
- **Animations au scroll** pour les éléments
- **Effets de hover** sur les cartes et boutons
- **Bouton "Retour en haut"** automatique
- **Effet parallax** sur la section héro

## 🛠️ Installation et utilisation

1. **Télécharger les fichiers** dans un dossier
2. **Ajouter le logo** : Placez votre logo FAF dans le fichier `logo-faf.png`
3. **Ouvrir le site** : Double-cliquez sur `index.html` ou utilisez un serveur local

### Serveur local (recommandé)
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (si vous avez live-server installé)
npx live-server

# Puis ouvrir http://localhost:8000
```

## 📱 Responsivité

Le site s'adapte automatiquement à :
- **Desktop** (1200px+)
- **Tablette** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🎯 Personnalisation

### Couleurs
Les couleurs sont définies dans `styles.css` avec des variables CSS :
```css
:root {
    --primary-green: #2d5a27;
    --secondary-green: #4a7c59;
    --light-green: #6b9c73;
    /* ... */
}
```

### Contenu
Modifiez le contenu directement dans `index.html` :
- Texte des sections
- Informations de contact
- Liens sociaux

### Images
Remplacez les icônes Font Awesome par vos propres images si souhaité.

## 📞 Contact

Pour toute question ou modification :
- **Email** : contact@federation-ansaroudine.fr
- **Téléphone** : +33 1 XX XX XX XX

## 🌟 Fonctionnalités avancées

- **SEO optimisé** avec structure sémantique
- **Performance** optimisée avec CSS et JavaScript minifiés
- **Accessibilité** conforme aux standards web
- **Cross-browser** compatible avec tous les navigateurs modernes

---

*Développé avec ❤️ pour la communauté tijani*
