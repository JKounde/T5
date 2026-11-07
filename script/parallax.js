
// =========================================================
// PARALLAX.JS : la souris fait bouger les éléments
// (accompagnement, qui-suis-je, contact)
// Le JS mesure la souris, le CSS fait bouger les éléments
// grâce aux variables --x et --y.
// =========================================================
 
const page = document.querySelector("main");
const mouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 
if (page && !mouvementReduit) {
  window.addEventListener("mousemove", (e) => {
    // Position de la souris, de -0.5 (gauche/haut) à 0.5 (droite/bas)
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
 
    // On envoie ces valeurs au CSS
    page.style.setProperty("--x", x);
    page.style.setProperty("--y", y);
  });
}