class Beat {
  constructor(audio) {
    this.audio = new Audio(audio);
  }
  play() {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}

class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.element = document.getElementById(keyCode);
    this.createTransitionEnd();
    this.setButtonColorinHTML();
  }
  setButtonColorinHTML() {
    this.element.style.borderColor = this.color;
  }
  createTransitionEnd() {
    this.element.addEventListener("transitionend", () => {
      this.deselect();
    });
  }

  select() {
    this.element.style.backgroundColor = this.color;
    this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
  }
  deselect() {
    this.element.style.backgroundColor = "transparent";
    this.element.style.boxShadow = "none";
  }
}

let beats = {
  65: {
    beat: new Beat("./assets/Piano Chord 331.mp3"),
    button: new Button("#3498db", 65),
  },
  83: {
    beat: new Beat("./assets/Piano Chord 209.mp3"),
    button: new Button("#3498db", 83),
  },
  68: {
    beat: new Beat("./assets/Piano Chord 208.mp3"),
    button: new Button("#3498db", 68),
  },
  70: {
    beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
    button: new Button("#2ecc71", 70),
  },
  71: {
    beat: new Beat("./assets/Drum Snare Roll.mp3"),
    button: new Button("#2ecc71", 71),
  },
  72: {
    beat: new Beat("./assets/PREL Musical 57.mp3"),
    button: new Button("#2ecc71", 72),
  },
  74: {
    beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
    button: new Button("#2ecc71", 74),
  },
  75: {
    beat: new Beat("./assets/Musical Compos 33.mp3"),
    button: new Button("#9b59b6", 75),
  },
  76: {
    beat: new Beat("./assets/Musical Orches 4.mp3"),
    button: new Button("#9b59b6", 76),
  },
};

triggerBeat = (event) => {
  var code = event.keyCode;
  if (code in beats) {
    beats[code].beat.play();
    beats[code].button.select();
  }
};

document.addEventListener("keydown", triggerBeat);
