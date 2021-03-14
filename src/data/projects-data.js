import colchis from '../assets/img/colchis.png';
import sushi from '../assets/img/sushi.png';
import bibliflix from '../assets/img/bibliflix.png'


export const projectList = {
    projectName : ["Kingdom of Colchis", "SushiBar", "Biblifix"]
}

export const projects = {
    project0 :{ 
        number : 1,
        title : "Kingdom of Colchis",
        technos : "JS Vanilla-localStorage",
        image : colchis,
        description : {
            fr : {
                p1:"Site officiel du Royaume de Colchis.",
                p2:"7 clicks cachés protègent le trésor du Roi, saurez-vous les retrouver.",
                p3:"Accompagné par le localStorage pour mémoriser les click découvert même après avoir quitté le royaume, il vous faudra beaucoup de patience et de malice !"
            },
            en : {
                p1:"Official site of the Kingdom of Colchis.",
                p2:"7 hidden clicks protect the King's treasure, will you be able to find them.",
                p3:"Accompanied by the localStorage to memorize the clicks discovered even after leaving the kingdom, you will need a lot of patience and mischief!"
            },
            color : '#ffff'
        },
    },
    project1 :{ 
        number : 2,
        title : "SushiBar",
        technos : "JS Vanilla-animations",
        image : sushi,
        description : {
            fr : {
               p1: "Site pour restaurant japonais",
               p2: "Véritable sparing partner, ce site m'as permis de découvrir, m'exercer et progresser sur JavaScript et notamment les animations",
               p3: "Au programme, parallaxes, hover, transition etc... Le tout sans librairie"
            },
            en : {
                p1: "Japanese restaurant website",
                p2: "Real sparing partner, this site allowed me to discover, practice and progress on JavaScript and in particular animations",
                p3: "Parallaxes, hover, transition etc ... All without library"
             },
            color : '#ffff'
        },
    },
    project2 :{ 
        number : 3,
        title : "Bibliflix",
        technos : "React-Redux-Bootstrap-Firebase",
        image : bibliflix,
        description : {
            fr : {
                p1: "Blog de lecture",
                p2: "Developper avec React et Redux, aidé de bootsrap pour crée un MVP, firebase pour l'authentification et la base de données.",
                p3: "Ce projet est en cours de développement."
             },
             en : {
                p1: "Reading blog",
                p2: "Developed with React and Redux, helped by bootsrap to create an MVP, firebase for authentication and the database.",
                p3: "This project is under development."
             },
            color : 'black'
        },
    }

}