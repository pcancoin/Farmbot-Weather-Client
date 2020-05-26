# :partly_sunny: :seedling: Farmbot-Weather-Client :seedling: :partly_sunny:

Une interface permettant de visualiser les données météo ainsi que de gérer l'arrosage automatique du Farmbot de l'INSA Rennes.

:warning: **Ce repository contient uniquement le code de la partie client. Pour en savoir plus sur le projet et voir le code du serveur, se référer à : [Farmbot-Weather-Server](https://github.com/pcancoin/Farmbot-Weather-Server)**

## Table des matières

- [:partly_sunny: :seedling: Farmbot-Weather-Client :seedling: :partly_sunny:](#partly_sunny-seedling-farmbot-weather-client-seedling-partly_sunny)
  - [Table des matières](#table-des-matières)
  - [Technologies utilisées](#technologies-utilisées)
  - [Lancement en standalone](#lancement-en-standalone)
    - [Prérequis](#prérequis)
    - [Lancement](#lancement)
    - [Création d'une version optimisée pour la production](#création-dune-version-optimisée-pour-la-production)
  - [Architecture du code](#architecture-du-code)
  - [Contact](#contact)

## Technologies utilisées

Cette application a été réalisée avec [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

-   [ReactJS](https://reactjs.org/) - Framework single page web app
-   [Redux](https://redux.js.org/) - Gestion d'état
-   [Redux Form](https://redux-form.com/8.3.0/) - Formulaires
-   [ChartJS](https://github.com/reactjs/react-chartjs) - Graphiques
-   [React Skycons](https://github.com/roadmanfong/react-skycons) - Icônes météo

## Lancement en standalone

Ce projet fait partie d'un tout avec un serveur. Pour lancer l'ensemble, merci de vous réferer au repository [Farmbot-Weather-Server](https://github.com/pcancoin/Farmbot-Weather-Server).

### Prérequis

-   [NodeJS](https://nodejs.org/en/) avec [npm](https://www.npmjs.com/)

### Lancement

Lancer le serveur de développement :

```sh
npm start
```

L'application doit se lancer automatiquement sur votre navigateur, sinon il devrait être accessible depuis [http://localhost:3000/](http://localhost:3000/). Chaque modification et sauvegarde d'un fichier recompilera et affichera la version modifiée automatiquement.

### Création d'une version optimisée pour la production

```sh
npm run build
```

Cela devrait créer une version prête pour la production dans _build/_

## Architecture du code

<!--### Différents dossiers-->

-   _public/_ : Page html de base, script de base
-   _src/_ :
    -   _actions/_ : Différentes actions de Redux
    -   _apis/_ : Différentes APIs
    -   _components/_ : Composants React de l'application
    -   _reducers/_ : Reducers de Redux

## Contact

Pablo Cancoin - pablo.cancoin@gmail.com
