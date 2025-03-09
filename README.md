<!-- filepath: README.md -->

# UMatch

UMatch est une application web qui permet de découvrir et de se connecter avec des artistes, des influenceurs et des fans.

## Installation

Pour installer les dépendances du projet, exécutez la commande suivante :

```sh
npm install
```

Si vous rencontrez des problèmes de version de TypeScript, vous pouvez forcer l'installation avec la commande suivante :

```sh
npm install --force
```

## Scripts

Voici les scripts disponibles pour ce projet :

- **Démarrer le projet en mode développement :**

  ```sh
  npm start
  ```

- **Construire le projet pour la production :**

  ```sh
  npm run build
  ```

- **Servir le projet en production :**

  ```sh
  npm run start:prod
  ```

- **Exécuter les tests :**

  ```sh
  npm test
  ```

- **Linter le code :**

  ```sh
  npm run lint
  ```

- **Formater le code :**

  ```sh
  npm run format
  ```

## Configuration

### Tailwind CSS

Le projet utilise Tailwind CSS pour le style. Assurez-vous que les fichiers de configuration suivants sont correctement configurés :

- **postcss.config.js**

  ```javascript
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
  ```

- **tailwind.config.js**

  ```javascript
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          white: "#FFFFFF",
          yellow: "#FBB13C",
          green: "#218380",
          red: "#D81159",
          "light-blue": "#73D2DE",
          "dark-blue": "#020A44",
          "dark-red": "#8F2D56",
          black: "#101010",
          "black-80": "#404040",
          "black-60": "#707070",
          "black-40": "#9F9F9F",
          "black-20": "#CFCFCF",
          "light-gray": "#F9F9F9",
          "input-color": "#E7EFF0",
        },
        width: {
          small: "16.666667%",
          medium: "50%",
          large: "83.333333%",
          "x-large": "100%",
          page: "75%",
        },
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
        },
      },
    },
  };
  ```

### i18n

Le projet utilise `i18next` pour la gestion des langues. Assurez-vous que les fichiers de configuration et les traductions sont correctement configurés.

## Déploiement

Pour déployer le projet, construisez-le d'abord pour la production :

```sh
npm run build
```

Ensuite, servez le projet en utilisant la commande suivante :

```sh
npm run start:prod
```
