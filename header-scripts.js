function copyMail() {
  navigator.clipboard.writeText("rafricmak@gmail.com");
  alert("Adresse e-mail copiée !");
}

// Ajout dynamique des pubs rétro
(function () {
  const pubs = [
  { img: "https://boodlebox.neocities.org/ie4.gif", link: "https://miamoalex.net/home" }, // Ton site référence
  { img: "https://boodlebox.neocities.org/inh.gif", link: "https://windows93.net/" }, // Parfaitement dans le thème
  { img: "https://boodlebox.neocities.org/hell2.gif", link: "https://www.cameronsworld.net/" }, // Hommage à Geocities
  { img: "https://boodlebox.neocities.org/arsenic.gif", link: "https://geocities.restorativland.org/" }, // Archive GeoCities
  { img: "https://boodlebox.neocities.org/antibro4.gif", link: "https://cyber.dabamos.de/88x31/" }, // Collection de bannières retro
  { img: "https://boodlebox.neocities.org/02.gif", link: "https://gifcities.org/" }, // Moteur de recherche de gifs GeoCities
  { img: "https://boodlebox.neocities.org/nose.gif", link: "https://www.bonziworld.com/" }, // BonziBuddy revival
  { img: "https://boodlebox.neocities.org/twobit.gif", link: "https://www.theoldnet.com/" }, // Navigateur d’internet passé
  { img: "https://boodlebox.neocities.org/100.gif", link: "https://www.spacejam.com/1996/" }, // Site original de Space Jam
  { img: "https://boodlebox.neocities.org/smiley.gif", link: "https://www.homestarrunner.com/" }, // Cartoon rétro culte
  { img: "https://boodlebox.neocities.org/spel.gif", link: "https://www.frogfind.com/" }, // Moteur de recherche rétro
  { img: "https://boodlebox.neocities.org/bs2.gif", link: "https://motherfuckingwebsite.com/" }, // Design minimaliste satirique
  { img: "https://boodlebox.neocities.org/webspace.gif", link: "https://neocities.org/" }, // Hébergeur à l’ancienne
  { img: "https://i.gifer.com/AADL.gif", link: "https://textfiles.com/" }, // Bibliothèque brute de fichiers .txt
  { img: "https://i.gifer.com/Eoug.gif", link: "https://sadgrl.online/" }, // Un site perso ultra inspiré du style 2000s
  { img: "https://i.gifer.com/IVcr.gif", link: "https://poolside.fm/" }, // Web radio rétro stylée
  { img: "https://i.gifer.com/DqS9.gif", link: "https://winamp2-js.herokuapp.com/" }, // Simulateur Winamp 2.9
  { img: "https://i.gifer.com/Hr5U.gif", link: "https://toastytech.com/" }, // Muséum de vieilles UI Windows
  { img: "https://i.gifer.com/JXmm.gif", link: "https://www.kaleidoscope.app/archive/" } // Archive web artistique
  ];

  const positions = [
    { class: "pub-right", top: "5%" },
    { class: "pub-right", top: "15%" },
    { class: "pub-right", top: "25%" },
    { class: "pub-right", top: "35%" },
    { class: "pub-right", top: "65%" },
    { class: "pub-right", top: "85%" },
    { class: "pub-left", top: "5%" },
    { class: "pub-left", top: "15%" },
    { class: "pub-left", top: "25%" },
    { class: "pub-left", top: "35%" },
    { class: "pub-left", top: "65%" },
    { class: "pub-left", top: "85%" }
  ];

  // Mélanger les positions de manière aléatoire
  const shuffledPositions = positions.sort(() => 0.5 - Math.random());

  // Déterminer le nombre de publicités à afficher
  const numPubs = Math.min(9, pubs.length);

  // Sélectionner les positions pour les publicités
  const selectedPositions = shuffledPositions.slice(0, numPubs);

  // Associer les publicités aux positions sélectionnées
  const shuffledPubs = selectedPositions.map((position, index) => {
    return { ...position, pub: pubs[index] };
  });

  console.log(shuffledPubs);

  shuffledPubs.forEach((item) => {
    const pub = item.pub;
    const position = item;
    const pubElement = document.createElement('a');
    pubElement.href = pub.link;
    pubElement.target = "_blank";
    pubElement.className = `pub ${position.class}`;
    pubElement.style.top = position.top;

    const img = document.createElement('img');
    img.src = pub.img;
    img.alt = "Publicité rétro";
    img.style.width = Math.random() > 0.5 ? "150px" : "200px";

    if (Math.random() > 0.7) {
      pubElement.classList.add('pub-blink');
    }

    pubElement.appendChild(img);
    const container = document.getElementById('pub-container');
    if (container) container.appendChild(pubElement);
  });
})();
