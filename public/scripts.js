const kick = document.querySelector("div#kick");
const snare = document.querySelector("div#snare");
const closeHiHat = document.querySelector("div#close-hihat");
const openHiHat = document.querySelector("div#open-hihat");
const attack = document.querySelector("div#attack");

const play = (fileName) => {
  const audio = new Audio();
  audio.src = `./assets/${fileName}.wav`;
  audio.play();
};

const idTimeout = {};
const handleClickPad = (fileName, element) => {
  if (idTimeout[fileName]) {
    clearTimeout(idTimeout[fileName]);
  }

  play(fileName);
  element.classList.add("highlight");

  idTimeout[fileName] = setTimeout(() => {
    element.classList.remove("highlight");
  }, 500);
};

kick.onclick = () => handleClickPad("kick", kick);
snare.onclick = () => handleClickPad("snare", snare);
closeHiHat.onclick = () => handleClickPad("close-hihat", closeHiHat);
openHiHat.onclick = () => handleClickPad("open-hihat", openHiHat);
attack.onclick = () => handleClickPad("attack", attack);

document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "p":
      handleClickPad("close-hihat", closeHiHat);
      break;
    case "o":
      handleClickPad("open-hihat", openHiHat);
      break;
    case "i":
      handleClickPad("attack", attack);
      break;
    case "z":
      handleClickPad("kick", kick);
      break;
    case "x":
      handleClickPad("snare", snare);
      break;

    default:
      break;
  }
});
