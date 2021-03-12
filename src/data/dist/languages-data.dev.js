"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skillsDatas = exports.formDatas = exports.navDatas = exports.contactDatas = void 0;
//PAGES
var contactDatas = {
  fr: {
    title: "contactez",
    span: "moi",
    p: "Pour toutes questions n'hésitez pas à me contacter"
  },
  en: {
    title: "contact",
    span: "me",
    p: "If you have questions, feel free to get in touch"
  }
}; //COMPONENTS

exports.contactDatas = contactDatas;
var navDatas = {
  menuFr: [["Accueil", "/"], ["A propos", "/about"], ["Compétences", "/skills"], ["Projets", "/works"], ["Contact", "/contact"]],
  menuEng: [["Home", "/"], ["About", "/about"], ["Skills", "/skills"], ["Works", "/works"], ["Contact", "/contact"]]
};
exports.navDatas = navDatas;
var formDatas = {
  fr: {
    name: "Nom",
    mail: "Email non valide",
    phone: "Téléphone",
    subject: "Sujet",
    button: "Envoyer"
  },
  en: {
    name: "Name ",
    mail: "Email not valid",
    phone: "Phone",
    subject: "Subject",
    button: "Send"
  }
};
exports.formDatas = formDatas;
var skillsDatas = {
  fr: {
    global: "Je suis un développeur full stack orienté front-end, ayant des compétences en :",
    front: {
      title: "Front-End",
      p: "Pour la partie front-end, je travaille sur HTML/CSS ou SCSS, JavaScript. Je peux également utiliser un framework comme React selon les besoins des projets. J'aime particulièrement travailler avec les nombreuses librairies comme three.js, anime.js, GSAP ... Pour la partie Back-end, j'utilise PHP et son framework Symfony. "
    }
  },
  en: {
    global: "I am a full stack developer oriented front-end, with skills in :",
    front: {
      title: "Front-end",
      p: "For the front-end part, I work on HTML/CSS or SCSS, JavaScript. I can also use a framework like React depending on the needs of the projects. I particularly like working with libraries like three.js, anime.js, GSAP ... For the Back-end part, I use PHP and its framework Symfony."
    }
  }
};
exports.skillsDatas = skillsDatas;