function copyMail() {
  navigator.clipboard.writeText("rafricmak@gmail.com");
  alert("Adresse e-mail copiée !");
}

// Ajout dynamique des pubs rétro
(function () {
  const pubs = [
    { img: "https://boodlebox.neocities.org/ie4.gif", link: "https://web.archive.org/web/20030218022750/http://www.microsoft.com/windows/ie/default.mspx" },
    { img: "https://boodlebox.neocities.org/inh.gif", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { img: "https://boodlebox.neocities.org/hell2.gif", link: "https://en.wikipedia.org/wiki/Geocities" },
    { img: "https://boodlebox.neocities.org/arsenic.gif", link: "https://www.youtube.com/watch?v=IH1Px8qaZtg" },
    { img: "https://boodlebox.neocities.org/antibro4.gif", link: "http://www.windows93.net/" },
    { img: "https://boodlebox.neocities.org/02.gif", link: "https://www.youtube.com/watch?v=3dfaZ9ADMvY" },
    { img: "https://boodlebox.neocities.org/nose.gif", link: "https://www.bonziworld.com/" },
    { img: "https://boodlebox.neocities.org/twobit.gif", link: "https://www.theuselessweb.com/" },
    { img: "https://boodlebox.neocities.org/100.gif", link: "https://www.spacejam.com/1996/" },
    { img: "https://boodlebox.neocities.org/smiley.gif", link: "https://www.homestarrunner.com/" },
    { img: "https://boodlebox.neocities.org/spel.gif", link: "https://www.cameronsworld.net/" },
    { img: "https://boodlebox.neocities.org/bs2.gif", link: "https://www.youtube.com/watch?v=Wq5Y4fRy6Y4" },
    { img: "https://boodlebox.neocities.org/webspace.gif", link: "https://neocities.org/" },
    { img: "https://i.gifer.com/AADL.gif", link: "https://www.youtube.com/watch?v=otCpCn0l4Wo" },
    { img: "https://i.gifer.com/Eoug.gif", link: "https://www.youtube.com/watch?v=oHg5SJYRHA0" },
    { img: "https://i.gifer.com/IVcr.gif", link: "https://www.my-internet-explorer.com/" },
    { img: "https://i.gifer.com/DqS9.gif", link: "https://www.winamp.com/" },
    { img: "https://i.gifer.com/Hr5U.gif", link: "https://www.netscape.com/" },
    { img: "https://i.gifer.com/JXmm.gif", link: "https://www.mozilla.org/en-US/firefox/new/" }
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
