
// =========================================================
// QUI-SUIS-JE.JS : la modale de la télé
// show() (et pas showModal()) pour que la télé puisse
// passer devant la modale grâce au z-index.
// =========================================================
 
const boutonTele = document.querySelector(".tele");
const modale = document.querySelector("#modale-qui");
const boutonFermer = document.querySelector(".modale-fermer");
 
boutonTele.addEventListener("click", () => modale.show());
boutonFermer.addEventListener("click", () => modale.close());
 
// show() ne gère pas la touche Échap : on l'ajoute nous-mêmes
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modale.close();
});