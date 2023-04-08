// POUR LE MENU DEROULANT

// on selectionne les classe de la liste du menu et la classe du boutton

const lien = document.querySelector(".liens");
const BouttonDeroulant = document.querySelector(".menu-boutton");

BouttonDeroulant.addEventListener("click", () => {
  lien.classList.toggle("deroule");
});

// POUR FIXER LE MENU EN DEFILANT

const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  const hauteurscroll = window.pageYOffset;
  const hauteurnav = navbar.getBoundingClientRect().height;

  if (hauteurscroll >= hauteurnav) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

//POUR FAIRE FONCTIONNER LE SLIDE

//constante pour les slides et les bouttons
const slides = document.querySelectorAll(".slide");

const Prev = document.querySelector("#prev");
const Next = document.querySelector("#next");

//pour le defilement automatique

const auto = true;

// pour le temps d'intervalle entre chaque carousel
const tempsIntervall = 5000;

let slideInterval;

// on creer des fonctions pourle evenements sur  les deux bouttons

// bouttons next

const nextSlide = () => {
  // mettre la classe current
  const current = document.querySelector(".current");

  // suppreimer la classe current si elle est presente

  current.classList.remove("current");

  // chercher la classe du caroussel suivant
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    // ajouter current au retour du premier slide
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//bouttons next

const prevSlide = () => {
  // mettre la classe current
  const current = document.querySelector(".current");

  // suppreimer la classe current si elle est presente

  current.classList.remove("current");

  // chercher la classe du caroussel precedent
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    // ajouter current au retour du dernier slide
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// on integre les evenements au bouttons

// bouttons next
Next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, tempsIntervall);
  }
});

//bouttons prev

Prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, tempsIntervall);
  }
});

// deroulement automatique

if (auto) {
  // defiler le prochain slide
  slideInterval = setInterval(nextSlide, tempsIntervall);
}
