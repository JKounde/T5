// ===== Modale de l'ampoule =====
const boutonAmpoule = document.querySelector(".ampoule");
const modale = document.querySelector("#modale-coaching");
const boutonFermer = document.querySelector(".modale-fermer");

boutonAmpoule.addEventListener("click", () => modale.showModal());
boutonFermer.addEventListener("click", () => modale.close());