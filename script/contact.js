// =========================================================
// CONTACT.JS : la modale du formulaire + l'envoi
// =========================================================

// ===== 1. La modale du téléphone =====
const boutonTelephone = document.querySelector(".telephone");
const modale = document.querySelector("#modale-contact");
// const modale = document.querySelector("#modale-message");
const boutonFermer = document.querySelector(".modale-fermer");

boutonTelephone.addEventListener("click", () => modale.show());
boutonFermer.addEventListener("click", () => modale.close());

// show() ne gère pas la touche Échap : on l'ajoute nous-mêmes
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modale.close();
});

// ===== 2. La pop-up de confirmation =====
const toast = document.querySelector(".toast");

function afficherToast(texte) {
  toast.textContent = texte;
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 4000); // disparaît après 4 s
}

// ===== 3. L'envoi du formulaire sans quitter le site =====
const formulaire = document.querySelector(".formulaire");
const boutonEnvoyer = formulaire.querySelector(".btn-envoyer");

formulaire.addEventListener("submit", async (e) => {
  e.preventDefault(); // on ne quitte pas la page
  boutonEnvoyer.disabled = true; // évite les doubles clics
  boutonEnvoyer.textContent = "Envoi…";

  try {
    const reponse = await fetch(formulaire.action, {
      method: "POST",
      body: new FormData(formulaire), // récupère tous les champs
    });
    const resultat = await reponse.json();

    if (resultat.success) {
      formulaire.reset();
      modale.close();
      afficherToast("Merci ! Votre message a bien été envoyé 🎶");
    } else {
      afficherToast("Oups, le message n'est pas parti. Réessayez ?");
    }
  } catch {
    afficherToast("Problème de connexion. Réessayez dans un instant.");
  }

  boutonEnvoyer.disabled = false;
  boutonEnvoyer.textContent = "Envoyer";
});