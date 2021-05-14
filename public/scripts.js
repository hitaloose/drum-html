class Pad {
  element = null;

  audio = null;

  idTimeout = null;

  constructor(padId) {
    this.audio = new Audio(`./assets/${padId}.mp3`);
    this.element = document.querySelector(`div#${padId}`);
    this.element.onclick = this.play.bind(this);
  }

  play() {
    if (this.idTimeout) {
      clearTimeout(this.idTimeout);
    }

    this.audio.load();
    this.audio.play();

    this.element.classList.add("highlight");

    this.idTimeout = setTimeout(() => {
      this.element.classList.remove("highlight");
    }, 500);
  }
}

const pads = {
  y: new Pad("attack"),
  u: new Pad("open-hihat"),
  i: new Pad("close-hihat"),
  o: new Pad("close-hihat"),
  p: new Pad("conducao"),
  z: new Pad("kick"),
  x: new Pad("kick"),
  c: new Pad("snare"),
  v: new Pad("snare"),
  b: new Pad("ghost-snare"),
  a: new Pad("tom1"),
  s: new Pad("tom1"),
  d: new Pad("tom2"),
  f: new Pad("tom2"),
  g: new Pad("surdo"),
  h: new Pad("surdo"),
};

document.addEventListener("keypress", (e) => {
  const { key } = e;

  if (pads[key]) {
    pads[key].play();
  }
});
