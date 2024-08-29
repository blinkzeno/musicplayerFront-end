

# Music Streaming Site

## Description

Ce projet est un site de streaming de musique en ligne développé avec React pour l'interface utilisateur et Tailwind CSS pour la stylisation. L'objectif est de créer une plateforme où les utilisateurs peuvent parcourir, écouter et découvrir de la musique.

## Fonctionnalités

- **Navigation dynamique** : Utilisation de `react-router-dom` pour une navigation fluide entre les pages.
- **Lecteur de musique intégré** : Lecture de musique avec les contrôles basiques (lecture/pause, avance rapide, retour).
- **Pages principales** :
  - **Accueil** : Présentation générale du site avec des recommandations de musique.
  - **À propos** : Informations sur le projet et son créateur.
  - **404 Page** : Gestion des erreurs de navigation avec une page non trouvée.
- **Stylisation moderne** : Utilisation de Tailwind CSS pour un design responsive et épuré.
- **Responsive Design** : Adaptation automatique aux différentes tailles d'écrans (mobile, tablette, bureau).
- **Personnalisation de la police** : Utilisation de la police `Inter` comme police par défaut.

## Prérequis

Avant de démarrer, assurez-vous d'avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/) (v14 ou supérieur)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Installation

1. Clonez le dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/votre-nom-utilisateur/music-streaming-site.git
   cd music-streaming-site
   ```

2. Installez les dépendances :

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Lancez l'application en mode développement :

   ```bash
   npm start
   # ou
   yarn start
   ```

   L'application sera accessible à l'adresse `http://localhost:3000`.

## Utilisation

- **Naviguer sur le site** : Utilisez la barre de navigation pour explorer les différentes sections du site.
- **Écouter de la musique** : Sélectionnez une piste et utilisez le lecteur intégré pour jouer la musique.
- **Page d'accueil** : Retrouvez des recommandations personnalisées et les nouveautés musicales.
- **Page À propos** : Apprenez-en plus sur le projet et son créateur.

## Structure du Projet

- **`src/`** : Contient tout le code source de l'application.
  - **`components/`** : Composants réutilisables de l'application (Navbar, Footer, etc.).
  - **`pages/`** : Composants de page (Home, About, NotFound).
  - **`assets/`** : Fichiers multimédias, images, etc.
  - **`App.js`** : Composant principal où les routes sont définies.
  - **`index.js`** : Point d'entrée de l'application.

## Technologies Utilisées

- **React** : Librairie JavaScript pour la construction de l'interface utilisateur.
- **Tailwind CSS** : Framework CSS utilitaire pour une stylisation rapide et responsive.
- **react-router-dom** : Gestion des routes pour une navigation dynamique.

## Personnalisation

Pour changer la police par défaut, modifiez le fichier `tailwind.config.js` comme suit :

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

N'oubliez pas d'ajouter le lien vers Google Fonts pour importer la police désirée :

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```

## Déploiement

Pour déployer l'application, vous pouvez utiliser des services comme Vercel, Netlify, ou GitHub Pages :

1. **Build de l'application** :

   ```bash
   npm run build
   # ou
   yarn build
   ```

2. **Déploiement** : Suivez les instructions spécifiques à la plateforme choisie.

## Contribuer

Les contributions sont les bienvenues ! Si vous avez des suggestions, des corrections ou des fonctionnalités à ajouter, n'hésitez pas à ouvrir une pull request ou à créer une issue.

## Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.

## Auteur

- **@BlinkZeno** - Développeur et créateur du projet

---

Merci d'avoir exploré ce projet ! Si vous avez des questions ou des retours, n'hésitez pas à me contacter.
```

Ce `README.md` fournit une vue d'ensemble complète de ton projet, incluant l'installation, l'utilisation, la structure du projet, les technologies utilisées, et comment contribuer. N'oublie pas de remplacer les éléments spécifiques comme `votre-nom-utilisateur` avec tes informations personnelles.