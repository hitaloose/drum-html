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
    audio.src = `./assets/${this.padId}.mp3`;
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
const tom1 = new Pad("tom1");
const tom2 = new Pad("tom2");
const surdo = new Pad("surdo");
const conducao = new Pad("conducao");

const pads = {
  p: conducao,
  o: closeHiHat,
  i: openHiHat,
  u: attack,
  z: kick,
  x: kick,
  c: snare,
  v: snare,
  a: tom1,
  s: tom1,
  d: tom2,
  f: tom2,
  g: surdo,
  h: surdo,
};

document.addEventListener("keypress", (e) => {
  const { key } = e;

  if (pads[key]) {
    pads[key].play();
  }
});
