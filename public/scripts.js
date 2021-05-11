class Pad {
  element = null;

  padId = "";

  idTimeout = null;

  constructor(padId) {
    this.padId = padId;
    this.element = document.querySelector(`div#${padId}`);
    this.element.onclick = this.play.bind(this);
  }

  play() {
    if (this.idTimeout) {
      clearTimeout(this.idTimeout);
    }

    const audio = new Audio();
    audio.src = `./assets/${this.padId}.wav`;
    audio.play();

    this.element.classList.add("highlight");

    this.idTimeout = setTimeout(() => {
      this.element.classList.remove("highlight");
    }, 500);
  }
}

const kick = new Pad("kick");
const snare = new Pad("snare");
const closeHiHat = new Pad("close-hihat");
const openHiHat = new Pad("open-hihat");
const attack = new Pad("attack");

const pads = {
  p: closeHiHat,
  o: openHiHat,
  i: attack,
  z: kick,
  x: snare,
};

document.addEventListener("keypress", (e) => {
  const { key } = e;

  if (pads[key]) {
    pads[key].play();
  }
});
