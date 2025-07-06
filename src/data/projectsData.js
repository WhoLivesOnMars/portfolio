import one from '../assets/png/one.png'
import two from '../assets/png/two.png'
import three from '../assets/png/three.png'
import four from '../assets/png/four.png'
import five from '../assets/png/five.png'
import six from '../assets/png/six.png'
import seven from '../assets/png/seven.png'
import eight from '../assets/png/eight.png'



export const projectsData = [
    {
        id: 1,
        projectName: 'Mesto - Galerie photo',
        projectDesc: 'Application web de voyage en une seule page avec authentification. Il permet d’ajouter, supprimer ou liker des photos provenant d’une API externe, modifier son profil et changer son avatar.',
        tags: ['HTML' ,'CSS', 'JavaScript', 'React'],
        code: 'https://github.com/WhoLivesOnMars/react-mesto-auth',
        demo: 'https://wholivesonmars.github.io/react-mesto-auth/',
        image: one
    },
    {
        id: 2,
        projectName: 'Couture',
        projectDesc: 'Couture est une plateforme web développée avec Symfony 6, permettant aux utilisateurs de réserver des objets liés à la couture (machines, accessoires, etc.). L’application prend en charge différents rôles utilisateur et propose un design responsive adapté aussi bien aux ordinateurs qu’aux appareils mobiles.',
        tags: ['PHP', 'Symfony', 'Twig', 'CSS'],
        code: 'https://github.com/WhoLivesOnMars/couture',
        demo: 'https://couture-info4.khanina.etu.mmi-unistra.fr/',
        image: two
    },
    {
        id: 3,
        projectName: 'Le jeu Snake',
        projectDesc: 'Le projet est un jeu développé en JavaScript avec Vite, structuré en modules ES6. Il propose deux modes de jeu — Survivant et Aventure, une interface responsive, une gestion dynamique du canvas ainsi qu’une architecture orientée objet pour les entités du jeu.',
        tags: ['JS', 'HTML', 'CSS', 'Vite'],
        code: 'https://github.com/WhoLivesOnMars/snake-game',
        demo: 'https://wholivesonmars.github.io/snake-game/',
        image: three
    },
    {
        id: 4,
        projectName: 'La Quête Médiévale',
        projectDesc: 'Un jeu d’exploration à la première personne, développé dans le cadre du module SAE 402 – Réalité Virtuelle. Le joueur incarne un aventurier explorant différents environnements pour collecter des objets, éviter des ennemis et progresser dans plusieurs scènes. Le gameplay repose sur la découverte, l’interaction et la navigation.',
        tags: ['Unity', 'C#', 'Blender'],
        code: 'https://github.com/WhoLivesOnMars/jeu-unity',
        demo: 'https://wholivesonmars.github.io/jeu-unity/',
        image: four
    },
    {
        id: 5,
        projectName: 'Ferme Humbert',
        projectDesc: 'Projet d’amélioration du design du site web de la Ferme Humbert, une exploitation spécialisée dans l’agriculture biologique. Le nouveau design met en valeur l’identité locale de la ferme et permet un accès plus facile et intuitif à ses informations, tout en offrant la possibilité d’acheter ses produits avec paiement en ligne.',
        tags: ['Figma'],
        code: 'https://www.figma.com/design/6X4mT8yczalsKV7CxZMxGy/CREA3_TP6_KHANINA_Daria?node-id=405-744&m=dev&t=oq0NYDrrEwx4YoPl-1',
        demo: 'https://www.figma.com/proto/6X4mT8yczalsKV7CxZMxGy/CREA3_TP6_KHANINA_Daria?node-id=405-744&t=oq0NYDrrEwx4YoPl-1',
        image: five
    },
    {
        id: 6,
        projectName: 'ALSACE NAUTILE CLUB',
        projectDesc: 'Projet d’amélioration du design du site web de l’Alsace Nautile Club, une association spécialisée dans la plongée. Le nouveau design propose une navigation claire vers les informations sur les activités, les horaires, les encadrants et l’inscription. Il inclut également une boutique en ligne dédiée au merchandising du club.',
        tags: ['Figma'],
        code: 'https://www.figma.com/design/eigXQeORkxPVHBkU2q0o0y/SAE302_GROUPE3_DESIGN?node-id=219-44&m=dev&t=xHWkMLGgKrl63JrN-1',
        demo: 'https://www.figma.com/proto/eigXQeORkxPVHBkU2q0o0y/SAE302_GROUPE3_DESIGN?node-id=219-44&t=xHWkMLGgKrl63JrN-1',
        image: six
    },
    {
        id: 7,
        projectName: 'Wingo - Modélisation d’Aviation',
        projectDesc: 'Ce site web développé en PHP est consacré à la vente, la location et l’échange de pièces et de modèles dans le domaine de l’aéromodélisme. Le projet suit une architecture orientée objet avec des classes dédiées aux différentes entités et fonctionnalités.',
        tags: ['PHP', 'SQL', 'Twig', 'CSS'],
        code: 'https://github.com/WhoLivesOnMars/wingo',
        demo: 'https://khanina.etu.mmi-unistra.fr/KHANINA_Daria/index.php',
        image: seven
    },
    {
        id: 8,
        projectName: 'Traveling in Russia',
        projectDesc: 'Site web responsive en une seule page, ce projet est une plateforme d’information dédiée aux voyages en Russie. Il propose des descriptions concises de chaque lieu et permet d’accéder facilement à des ressources externes pour approfondir ou organiser son voyage.',
        tags: ['HTML', 'CSS'],
        code: 'https://github.com/WhoLivesOnMars/russian-travel?tab=readme-ov-file',
        demo: 'https://wholivesonmars.github.io/russian-travel/index.html',
        image: eight
    },
]