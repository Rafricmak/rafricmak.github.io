document.addEventListener('DOMContentLoaded', function () {
  function waitForContainer(callback) {
    const checkExist = setInterval(() => {
      const container = document.getElementById('pub-container');
      if (container) {
        clearInterval(checkExist);
        callback(container);
      }
    }, 100);
  }

  waitForContainer(function (container) {
    const pubs = [
      { img: "https://boodlebox.neocities.org/ie4.gif", link: "https://windows93.net" },
      { img: "https://boodlebox.neocities.org/inh.gif", link: "https://www.cameronsworld.net" },
      { img: "https://boodlebox.neocities.org/hell2.gif", link: "https://theuselessweb.com" },
      { img: "https://boodlebox.neocities.org/arsenic.gif", link: "https://www.bonziworld.com" },
      { img: "https://boodlebox.neocities.org/antibro4.gif", link: "https://archive.org/details/win3_browser" },
      { img: "https://boodlebox.neocities.org/02.gif", link: "https://www.dialupmodem.com" },
      { img: "https://boodlebox.neocities.org/nose.gif", link: "https://www.my-internet-explorer.com" },
      { img: "https://boodlebox.neocities.org/twobit.gif", link: "https://www.windows93.net" },
      { img: "https://boodlebox.neocities.org/100.gif", link: "https://www.spacejam.com/1996/" },
      { img: "https://boodlebox.neocities.org/smiley.gif", link: "https://www.patience-is-a-virtue.org" },
      { img: "https://boodlebox.neocities.org/spel.gif", link: "https://corndog.io/" },
      { img: "https://boodlebox.neocities.org/bs2.gif", link: "https://www.internetarchaeology.org" },
      { img: "https://boodlebox.neocities.org/webspace.gif", link: "https://neocities.org" },
      { img: "https://i.gifer.com/AADL.gif", link: "https://heavens-above.com" },
      { img: "https://i.gifer.com/Eoug.gif", link: "https://www.lingscars.com/" },
      { img: "https://i.gifer.com/IVcr.gif", link: "https://www.netscapenow.com" },
      { img: "https://i.gifer.com/DqS9.gif", link: "https://www.archive.org/details/winamp_classic" },
      { img: "https://i.gifer.com/Hr5U.gif", link: "https://www.fat-pie.com" },
      { img: "https://i.gifer.com/JXmm.gif", link: "https://www.geocities.ws" }
    ];

    const sides = ["pub-left", "pub-right"];
    const numPubs = Math.floor(Math.random() * (15 - 6 + 1)) + 6;
    const shuffledPubs = pubs.sort(() => 0.5 - Math.random()).slice(0, numPubs);

    shuffledPubs.forEach(() => {
      const pub = pubs[Math.floor(Math.random() * pubs.length)];
      const side = sides[Math.floor(Math.random() * sides.length)];
      const randomTop = Math.floor(Math.random() * 80) + 10;

      const pubElement = document.createElement('a');
      pubElement.href = pub.link;
      pubElement.target = "_blank";
      pubElement.className = `pub ${side}`;
      pubElement.style.top = `${randomTop}%`;

      const img = document.createElement('img');
      img.src = pub.img;
      img.alt = "Publicité rétro";
      img.style.width = Math.random() > 0.5 ? "150px" : "200px";

      if (Math.random() > 0.7) {
        pubElement.classList.add('pub-blink');
      }

      pubElement.appendChild(img);
      container.appendChild(pubElement);
    });
  });
});
