document.addEventListener("DOMContentLoaded", () => {
  const gifUrls = [
    "https://i.gifer.com/45Ra.gif",
    "https://i.gifer.com/7qX0.gif",
    "https://i.gifer.com/Hfj6.gif",
    "https://i.gifer.com/WwaP.gif",
    "https://i.gifer.com/1JwJ.gif",
    "https://i.gifer.com/y7.gif",
    "https://i.gifer.com/XVo6.gif",
    "https://i.gifer.com/VZvw.gif",
    "https://i.gifer.com/WG8L.gif",
    "https://i.gifer.com/ZC9Y.gif"
  ];

  // Priorité à y7.gif
  const y7Boost = 5;
  for (let i = 0; i < y7Boost; i++) {
    gifUrls.push("https://i.gifer.com/y7.gif");
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function spawnGif(url) {
    const img = document.createElement("img");
    img.src = url;
    img.className = "glitch-gif";
    img.style.top = `${randomInt(0, window.innerHeight - 100)}px`;
    img.style.left = `${randomInt(0, window.innerWidth - 100)}px`;
    img.style.width = `${randomInt(80, 160)}px`;
    img.style.zIndex = randomInt(2, 998); // Laisse le bouton en 9999
    document.body.appendChild(img);
  }

  // Génère un nombre de gifs aléatoire entre 20 et 40
  const numberOfGifs = randomInt(20, 40);
  for (let i = 0; i < numberOfGifs; i++) {
    const gif = gifUrls[randomInt(0, gifUrls.length - 1)];
    spawnGif(gif);
  }

  // Place le bouton de retour aléatoirement
  const btn = document.getElementById("return-btn");
  btn.style.top = `${randomInt(0, window.innerHeight - 100)}px`;
  btn.style.left = `${randomInt(0, window.innerWidth - 200)}px`;
});
