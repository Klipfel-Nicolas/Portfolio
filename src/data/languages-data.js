//PAGES

export const homeDatas = {
    fr :{
        sentence : "Bienvenue sur mon site personnel, j'espère que vous apprécierez la visite"
    },
    en : {
        sentence : "Welcome on my personal website, I hope you enjoy the visit"
    }
}

export const aboutDatas = {
    fr :{
        sentence : "Les qualités humaines sont au moins aussi importantes que les compétences techniques."
    },
    en : {
        sentence : "Human qualities are at least as important as technical skills"
    }
}

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


//COMPONENTS
export const navDatas = {
    menuFr : [["Accueil", "/"], ["A propos", "/about"], ["Compétences", "/skills"], ["Projets", "/works"], ["Contact", "/contact"]],
    menuEng : [ ["Home", "/"], ["About", "/about"], ["Skills", "/skills"], ["Works", "/works"], ["Contact", "/contact"]]
}

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
        other:{
            title: "other",
            p : "I use git and github to version my projects, Inkscape and gimp for graphics and work on my designs."
        }  
    }
}

