// =========================================================
// MENU.JS : le menu burger (toutes les pages)
// =========================================================
 
const burger = document.querySelector(".burger");
const menu = document.querySelector("#menu");
 
burger.addEventListener("click", () => {
  const ouvert = menu.classList.toggle("ouvert"); // ajoute ou retire la classe
  burger.setAttribute("aria-expanded", ouvert);
  burger.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
});