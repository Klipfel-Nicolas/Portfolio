//----------------------------PAGES

//HOME
export const homeDatas = {
    fr :{
        sentence : "Bienvenue sur mon site personnel, j'espère que vous apprécierez la visite"
    },
    en : {
        sentence : "Welcome on my personal website, I hope you enjoy the visit"
    }
}
//ABOUT
export const aboutDatas = {
    sentence :{
       fr : "Les qualités humaines sont au moins aussi importantes que les compétences techniques, c'est pourquoi dans tous ceux que je fais, je suis :",
    
        en :"Human qualities are at least as important as technical skills, which is why in all that I do, I am:"
    },

    photos : {
        photo_1 : {
            fr : {
                title : "Determiné",
                paragraphe: '" La différence entre le possible et l\'impossible réside dans la détermination. "',
                author: 'Gandhi'
            },
            en : {
                title :"Determined",
                paragraphe: '"The difference between the possible and the impossible is determination."',
                author : "Gandhi"
            }
        },
        photo_2 : {
            fr : {
                title : "Autodidacte",
                paragraphe: '"On ne peut rien apprendre au gens. On peut seulement les aider à découvrir qu’ils possèdent déjà en eux tout ce qui est à apprendre."',
                author : 'Galilée'
            },
            en : {
                title :"Self-taught",
                paragraphe: '"You can\'t teach people anything. We can only help them discover that they already have everything to learn within them."',
                author : 'Galilée'
            }
        },
        photo_3 : {
            fr : {
            title : "Curieux",
            paragraphe: '" Je ne suis ni particulièrement intelligent ni particulièrement doué. Je suis seulement passionnément curieux. "',
            author : 'Albert Einstein'
        },
        en : {
            title :"Curious",
            paragraphe: '" I am neither particularly intelligent nor particularly gifted. I am only passionately curious. "',
            author : 'Albert Einstein'
        }
        },
        photo_4 : {
            fr : {
                title : "Créatif",
                paragraphe: '" La créativité, c’est inventer, expérimenter, grandir, prendre des risques, briser les règles, faire des erreurs et s‘amuser. "',
                author : 'Mary Lou Cook'
            },
            en : {
                title :"Creative",
                paragraphe: '"Creativity is inventing, experimenting, growing, taking risks, breaking the rules, making mistakes and having fun."',
                author : 'Mary Lou Cook'
            }
        },
        photo_5 : {
            fr : {
                title : "Passioné",
                paragraphe: '" L’homme ne vit pas sa passion, c’est sa passion qui le fait vivre. "',
                author: 'Tom Delamare'
            },
            en : {
                title :"Passionate",
                paragraphe: '" Man does not live his passion, it is his passion that makes him live. "',
                author: 'Tom Delamare'
            }
        },
        
        photo_6 : {
            fr : {
                title : "Optimiste",
                paragraphe: '" Un pessimiste voit la difficulté dans chaque opportunité ; un optimiste voit l’opportunité dans chaque difficulté. "',
                author : 'Winston Churchill'
            },
            en : {
                title :"Optimistic",
                paragraphe: '" A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty. "',
                author : 'Winston Churchill'
            }
        },
        photo_7 : {
            fr : {
                title : "Sportif",
                paragraphe: '" Le sport va chercher la peur pour la dominer, la fatigue pour en triompher, la difficulté pour la vaincre. "',
                author : 'Pierre de Coubertin'
            },
            en : {
                title :"Athletic",
                paragraphe: '" Sport will seek fear to dominate it, fatigue to triumph over it, difficulty to overcome it. "',
                author : 'Pierre de Coubertin'
            }
        }
    }
}

//CONTACT
export const contactDatas = {
   fr : {
       title : "contactez",
       span : "moi",
       p : "Pour toutes questions n'hésitez pas à me contacter"
   },
   en : {
       title : "contact",
       span : "me",
       p : "If you have questions, feel free to get in touch"
   }
}


//-------------------------------------COMPONENTS

//NAV
export const navDatas = {
    menuFr : [["Accueil", "/"], ["A propos", "/about"], ["Compétences", "/skills"], ["Projets", "/works"], ["Contact", "/contact"]],
    menuEng : [ ["Home", "/"], ["About", "/about"], ["Skills", "/skills"], ["Works", "/works"], ["Contact", "/contact"]]
}


//SKILLS
export const skillsDatas ={
    fr :{
        global : "Je suis un développeur full stack orienté front-end, ayant des compétences en :",
        front: {
            title : "Front-End",
            p : "Pour la partie front-end, je travaille sur HTML/CSS ou SCSS, JavaScript. Je peux également utiliser un framework comme React selon les besoins des projets. J'aime particulièrement travailler avec les nombreuses librairies comme three.js, anime.js, GSAP ... "  
        },
        back:{
            title: "Back-End",
            p : "Pour la partie Back-end, j'utilise PHP et son framework Symfony, ainsi que MySQL.  Pour les petits projets rapides je travailles avec firebase."
        },
        library:{
            title: "librairies",
            p : "Je travaille avec plusieurs librairies pour un gain de temps, notamment pour la 3D avec Three.js et les animations avec Gsap."
        },
        other:{
            title: "autre",
            p : "J’utilise git et github pour versionner mes projets, Inkscape et gimp pour les créations graphique et travailler sur mes designs."
        }
    },
    en :{
        global : "I am a full stack developer oriented front-end, with skills in :",
        front : {
            title : "Front-end",
            p : "For the front-end part, I work on HTML/CSS or SCSS, JavaScript. I can also use a framework like React depending on the needs of the projects. I particularly like working with libraries like three.js, anime.js, GSAP ..."  
        },
        back:{
            title: "Back-End",
            p : " For the Back-end part, I use PHP and its framework Symfony. For small quick projects I work with firebase."
        }, 
        library:{
            title: "Library",
            p : "I work with several libraries to save time, especially for 3D with Three.js and animations with Gsap."
        },
        other:{
            title: "other",
            p : "I use git and github to version my projects, Inkscape and gimp for graphics and work on my designs."
        }  
    }
}

//FORM
export const formDatas ={
    fr : {
        name : "Nom",
        mail : "Email non valide",
        phone : "Téléphone",
        subject : "Sujet",
        button : "Envoyer",
        error : "Merci de remplir correctement les champs requis"
    },
    en : {
        name : "Name ",
        mail : "Email not valid",
        phone : "Phone",
        subject : "Subject",
        button : "Send",
        error : "Please fill in the required fields correctly"
    }
}

//PERIODIC SKILLS 

export const table = [
    "Html", "Hyper Text Markup", "language", 1, 1,
    "VS-code", "Visual Studio", "code editor", 3, 1,
    "Css", "Cascading Style Sheets", "language", 10, 1,
    "Inks", "Inkscape",  "graphics editor", 1,2,
    "GIMP", "GNU Image Manipulation Program", "Image Editor", 2, 2,
    "Figma", "Figma", "interface design tool.", 3, 2,
    "GSAP", "Greensocks", "library", 5, 2,
    "Scss", "Syntactically Cascading Style Sheets", "preprocessor", 7, 2,
     "{B}", "Bootsrap", "library", 8, 2,
    "Tailwind", "Tailwind", "library", 9, 2, 
    "MUI", "Material-UI", "library", 10, 2,
    "JS", "Javascript", "language", 1, 3,
    "Vue", "Vue.js", "framework", 3, 3,
    "React", "React", "framework", 4, 3,
    "Node", "Node.js", "runtime built", 5, 3,
    "Three", "Three.js", "library", 7, 3,
    "Redux", "Redux", "library", 8, 3,
    "_LO", "Lodash", "library", 9, 3,
    "npm", "Node Package Manager", "package manager", 10, 3,
    "Php", "Hypertext Preprocessor", "language", 10, 4,
    "Symfony", "Symfony", "framework", 8, 4,
    "Twig", "Twig", "template engine", 6, 4,
    "ApiPlatform", "ApiPlatform", "api creater", 5, 4,
    "MVC", "Model Vue Controller", "design pattern", 3, 4,
    "POO", "Programation Orienté Objet", "programming paradigm", 2, 4,
    "SQL", "Structured Query Language", "language", 1, 5,
    "MySQL", "MySQL", "database management system", 2,5,
    "noSQL", "No Structured Query Language", "language", 4, 5,
    "MongoDB", "MongoDb", "database management system", 5,5,
    "Firebase", "Firebase", "plateform", 7, 5,
    "Git", "Git", "version control", 9, 5,
    "GitHub", "GitHub", "version control platform", 10, 5, 
]
