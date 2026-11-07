// ===== Le ? qui voyage de carte en carte =====
const section = document.querySelector(".quoi");
const voyageur = document.querySelector(".voyageur");
const titre = document.querySelector(".quoi-texte");
const cartes = document.querySelectorAll(".carte");
let cible = titre; // là où se trouve le ? en ce moment

// Place le ? sur le coin haut droit d'un élément
function allerVers(element) {
  cible = element;
  const s = section.getBoundingClientRect();
  const r = element.getBoundingClientRect();

  // à côté du titre, ou sur le coin d'une carte
  const decalageX = element === titre ? 15 : -40;
  const decalageY = element === titre ? -30 : -60;

  const x = r.right - s.left + decalageX;
  const y = r.top - s.top + decalageY;
  voyageur.style.translate = `${x}px ${y}px`;
}

// Active une carte et y envoie le ?
function activer(carte) {
  cartes.forEach((c) => c.classList.remove("active"));
  carte.classList.add("active");
  allerVers(carte);
}

// Au départ : à côté du titre, une fois TOUTES les images chargées
window.addEventListener("load", () => allerVers(titre));

// L'observateur : il prévient quand une carte passe au milieu de l'écran
const observateur = new IntersectionObserver((entrees) => {
  entrees.forEach((entree) => {
    if (entree.isIntersecting) {
      activer(entree.target);
    } else if (entree.target === cartes[0] && entree.boundingClientRect.top > 0) {
      // on remonte au-dessus de la 1re carte : retour au titre
      entree.target.classList.remove("active");
      allerVers(titre);
    }
  });
}, { rootMargin: "-50% 0px -50% 0px" });

cartes.forEach((carte) => observateur.observe(carte));

// Arrivé tout en bas de la page : le ? va sur la dernière carte
window.addEventListener("scroll", () => {
  const enBas = window.innerHeight + window.scrollY >= document.body.scrollHeight - 5;
  if (enBas) activer(cartes[cartes.length - 1]);
});

// Si on redimensionne la fenêtre, on recalcule la position
window.addEventListener("resize", () => allerVers(cible));