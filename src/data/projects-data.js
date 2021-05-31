import colchis from '../assets/img/colchis.png';
import strassHelp from '../assets/img/strassHelp.png';
import hackathon from '../assets/img/hackathon.png'


export const projectList = {
    projectName : ["Kingdom of Colchis", "StrassHelp", "Hackathon 1st"]
}

export const projects = {
    project0 :{ 
        number : 1,
        title : "Kingdom of Colchis",
        technos : "-JS Vanilla -localStorage",
        image : colchis,
        github : 'https://github.com/Klipfel-Nicolas/Kingdom-of-Colchis',
        description : {
            fr : {
                p1:"Site officiel du Royaume de Colchis.",
                p2:"Site factice proposant un jeu, retrouver les 7 clicks caché pour gagner le trésor du roi, saurez-vous les retrouver.",
                p3:" -Tech challenge pour mon entrée en formation."
            },
            en : {
                p1:"Official site of the Kingdom of Colchis.",
                p2:"Dummy site offering a game, find the 7 hidden clicks to win the king's treasure, will you be able to find them.",
                p3:"-Tech challenge for my entry to school."
            },
            
            color : '#ffff'
        },
    },
    project1 :{ 
        number : 2,
        title : "StrassHelp",
        technos : "-PHP -POO -MVC",
        image : strassHelp,
        github : 'https://github.com/Klipfel-Nicolas/strassHelp',
        description : {
            fr : {
               p1: "Pateforme d'entraide communautaire",
               p2: "StrassHelp est un site d'échange de service et permet de mettre en relation des particuliers afin de profiter ou de faire profiter de ces compétences.",
               p3: "-Projet fictif développé en équipe à 3, en méthode agile SCRUM"
            },
            en : {
                p1: "Community support platform",
                p2: "StrassHelp is a service exchange site and allows individuals to connect in order to benefit or share these skills.",
                p3: "-Fictitious project developed in a team of 3, using the agile SCRUM method"
             },
            color : 'black'
        },
    },
    project2 :{ 
        number : 3,
        title : "Hackathon 1st",
        technos : "-Php -API -Three.js",
        image : hackathon,
        github : 'https://github.com/Klipfel-Nicolas/Hackathon-Nasa',
        description : {
            fr : {
                p1: "Découverte photo de la planète Mars",
                p2: "Mars discovery est un site proposant de découvrir Mars grâce aux photos proposer par les robots de la NASA présent sur la planète",
                p3: "Projet réalisé à 3 en 24 heures sur le thème de l'API de la Nasa"
             },
             en : {
                p1: "Photo discovery of the planet Mars",
                p2: "Mars discovery is a site offering to discover Mars thanks to the photos proposed by the NASA robots present on the planet",
                p3: "Project carried out at 3 in 24 hours on the theme of the NASA API"
             },
            color : '#ffff'
        },
    }

}