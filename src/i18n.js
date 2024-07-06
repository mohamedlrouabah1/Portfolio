import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      type: {
        softwareDeveloper: 'Software Developer',
        mulesoftDeveloper: 'MuleSoft Developer',
        javaDeveloper: 'Java Developer',
        salesforceDeveloper: 'Salesforce Developer',
      },
      navbar: {
        home: "Home",
        about: "About",
        projects: "Projects",
        resume: "Resume"
      },
      resume: {
        downloadEnglishCV: "Download English CV",
        downloadFrenchCV: "Download French CV",
        downloadCV: "Download CV"
      },
      home: {
        greeting: 'Hi There!',
        intro: "I'M",
        name: 'MOHAMMED ROUABAH'
      },
      home2: {
        introduction: 'LET ME INTRODUCE MYSELF',
        aboutMe: "I'm a Computer Science student, with a passion for developing and creating content.",
        fluentIn: 'I am fluent in classics like Java, Javascript, and Python.',
        interests: "My field of Interest's are building new Cloud Technologies and Products and also in areas related to Salesforce.",
        findMeOn: 'FIND ME ON',
        connectWithMe: 'Feel free to connect with me'
      },
      projects: {
        recentWorks: 'My Recent',
        works: 'Works',
        recentProjects: 'Here are a few projects I\'ve worked on recently.',
        appconnectDescription: 'APPConnect is a dedicated platform for managing missions or projects. It is designed to help professionals and companies organize, plan, and track their tasks and activities without going through an intermediary.',
        alpesTransportDescription: 'Personal project undertaken during my academic coursework; the objective was to scrape transportation websites for use with Wikibase.',
        stellaStoneDescription: 'The StellaStone app is a simulation program for space travel experiences. It allows users to engage with historical events, explore space, and deepen their knowledge while enjoying an interactive experience.',
        foodiesDescription: 'The Foodies application main use is to use RDFs graph scrapped from website page and display them in format of annuary of restaurants and their menus.',
        textTranslationDescription: 'Make Text Translation using transformers/GRU and LSTM models.',
        bitcoinPredictionDescription: 'Make Bitcoin Prediction models and historical data to get the best prediction.',
      },
      about: {
        who: "Who",
        iAm: "I'M",
        professional: "Professional",
        skillset: "Skillset",
        tools: "Tools",
        iuse: "I use",
        quote1: "Hi Everyone, I am",
        quote2: "Mohammed Rouabah",
        quote3: "from",
        quote4: "Lyon, France.",
        quote5: "I'm currently learning Salesforce and MuleSoft through my internship.",
        quote6: "I'm about to complete my Master's degree in Computer Science from the University of Jean Monnet.",
        quote7: "Apart from coding, some other activities that I love to do!",
        activities: {
          playingGames: "Playing Games",
          microsoldering: "Microsoldering",
          travelling: "Travelling"
        }
      }
    },
  },
  fr: {
    translation: {
      type: {
        softwareDeveloper: 'Développeur de logiciels',
        mulesoftDeveloper: 'Développeur MuleSoft',
        javaDeveloper: 'Développeur Java',
        salesforceDeveloper: 'Développeur Salesforce',
      },
      navbar: {
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        resume: "CV"
      },
      resume: {
        downloadEnglishCV: "Télécharger le CV en anglais",
        downloadFrenchCV: "Télécharger le CV en français",
        downloadCV: "Télécharger le CV"
      },
      home: {
        greeting: 'Bonjour !',
        intro: 'Je suis',
        name: 'MOHAMMED ROUABAH'
      },
      home2: {
        introduction: 'PERMETTEZ-MOI DE ME PRÉSENTER',
        aboutMe: "Je suis étudiant en informatique, passionné par le développement et la création de contenu.",
        fluentIn: "Je maîtrise des langages classiques comme Java, Javascript et Python.",
        interests: "Mes domaines d'intérêt incluent le développement de nouvelles technologies et produits Cloud ainsi que des domaines liés à Salesforce.",
        findMeOn: 'ME TROUVER SUR',
        connectWithMe: 'N\'hésitez pas à me contacter'
      },
      projects: {
        recentWorks: 'Mes Récentes',
        works: 'Projets',
        recentProjects: 'Voici quelques projets sur lesquels j\'ai récemment travaillé.',
        appconnectDescription: 'APPConnect est une plateforme dédiée à la gestion de missions ou de projets. Elle est conçue pour aider les professionnels et les entreprises à organiser, planifier et suivre leurs tâches et activités sans passer par un intermédiaire.',
        alpesTransportDescription: 'Projet personnel réalisé dans le cadre de mes études; l\'objectif était de scraper des sites web de transport pour les utiliser avec Wikibase.',
        stellaStoneDescription: 'L\'application StellaStone est un programme de simulation pour des expériences de voyage spatial. Elle permet aux utilisateurs de s\'engager avec des événements historiques, d\'explorer l\'espace et d\'approfondir leurs connaissances tout en profitant d\'une expérience interactive.',
        foodiesDescription: 'L\'application Foodies a pour principal usage d\'utiliser des graphes RDFs scrapés à partir de pages web et de les afficher sous forme d\'annuaire de restaurants et de leurs menus.',
        textTranslationDescription: 'Réaliser la traduction de texte en utilisant des modèles transformers/GRU et LSTM.',
        bitcoinPredictionDescription: 'Créer des modèles de prédiction Bitcoin et utiliser des données historiques pour obtenir la meilleure prédiction.',
      },
      about: {
        who: "Qui",
        iAm: "suis-je",
        professional: "Compétences",
        skillset: "Professionnelles",
        tools: "Outils",
        iuse: "que j'utilise",
        quote1: "Bonjour à tous, je suis",
        quote2: "Mohammed Rouabah",
        quote3: "de",
        quote4: "Lyon, France.",
        quote5: "Je suis actuellement en train d'apprendre Salesforce et MuleSoft dans le cadre de mon stage.", 
        quote6: "Je suis sur le point de terminer mon master en informatique à l'Université Jean Monnet.", 
        quote7: "En dehors du developpement logiciel, j'aime faire d'autres activités !",
        activities: {
          playingGames: "Jouer aux jeux",
          microsoldering: "Microsoudage",
          travelling: "Voyager"
        }
      }
    },
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
