//Bouton de la barre de navigation
const toggleButton = document.getElementsByClassName("toggle-button")[0]
//Navigation 
const nav = document.querySelector("nav");
// Partie droite de la barre de navigation
const navbarRight = document.getElementsByClassName("nav-right")[0]

//Première slide "objectif"
const div1 = document.getElementById("div1");
//Deuxième slide "adhérer"
const div2 = document.getElementById("div2");
//Bouton pour changer de slide
const btn = document.getElementsByClassName("glass-button")[0]

/* Afficher les éléments en dessous de la barre de navigation */
toggleButton.addEventListener("click", () => {
    navbarRight.classList.toggle('active')
})
/* Fait appraître des éléments à partir de x scrolls */
window.addEventListener("scroll", function(){
    let element = document.querySelector("element");
    let scroll = document.querySelector("scroll");

    //Navigation qui reste en haut et change de couleurs
    nav.classList.toggle("sticky", window.scrollY > 0);

    //Fait appraître le titre
    element.classList.toggle("appear", window.scrollY > 0);
    //Fait disparaître l'icône de scroll
    scroll.classList.toggle("disappear", window.scrollY > 0);
})

/* Animations barre au dessus du texte */
let title0 = document.getElementById("title0");
let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");
let title4 = document.getElementById("title4");

//Si le scroll de la page atteint la moitié d'une div particulière, animé le titre
var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
    if (entries[0].target.id == 'actu'){
      title0.id = "title-change";
    }
    if (entries[0].target.id == 'rejoindre'){
      title1.id = "title-change";
    }
    if (entries[0].target.id == 'adherents'){
      title2.id = "title-change";
    }
}, { threshold: [0.5] });

var observe = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
    if (entries[0].target.id == 'evenements'){
      title3.id = "title-change";
    }
    if (entries[0].target.id == 'blog'){
      title4.id = "title-change";
    }
}, { threshold: [0.2] });

observer.observe(document.querySelector("#actu"));
observer.observe(document.querySelector("#rejoindre"));
observer.observe(document.querySelector("#adherents"));
observe.observe(document.querySelector("#evenements"));
observe.observe(document.querySelector("#blog"));

/* Bouton slide */
btn.onclick = function () {
  //Animation du bouton
  btn.setAttribute("id", "click");
  //Retour à la position initiale au bout de 200ms
  setTimeout(function(){ 
    btn.setAttribute("id", "none");
  }, 200);
  //Changer de slide
  if (div1.style.display !== "none") {
    div1.style.display = "none";
    div2.style.display = "block";
  } else {
    div1.style.display = "block";
    div2.style.display = "none";
  }
};

