const instructions = document.querySelector(".instructions");
const intro = document.querySelector(".intro");

class Game {
  constructor(container, animals) {
    this.el = container;
    this.animals = animals;
    this.currentAnimalIndex = 0;
    this.setupUi();
    container.addEventListener("click", this.check);
  }

  setupUi() {
    const frag = document.createDocumentFragment();
    for (let animal of animals) {
      const image = document.createElement("img");
      image.src = animal.image;
      frag.appendChild(image);
    }
    this.el.appendChild(frag);
  }

  check = (e) => {
    const realImageArray =
      this.animals[this.currentAnimalIndex].image.split("/");
    const realImageName = realImageArray[realImageArray.length - 1];

    const selectedImageArray = e.target.src.split("/");
    const selectedImageName = selectedImageArray[selectedImageArray.length - 1];

    alert(realImageName === selectedImageName ? "Yes" : "No try again");
  };

  start = () => {
    this.currentAnimalIndex = Math.floor(Math.random() * this.animals.length);
    this.sound();
  };

  sound = () => {
    this.animals[this.currentAnimalIndex].soundMe();
  };
}

class Animal {
  constructor(image, sound) {
    this.image = image;
    this.sound = sound;
    this.audioEl = new Audio(this.sound);
  }

  soundMe() {
    this.audioEl.play();
  }
}

const animals = [
  new Animal("img/camel.jpg", "mp3/camel.mp3"),
  new Animal("img/dog.jpg", "mp3/bark.mp3"),
  new Animal("img/dolphin.jpg", "mp3/dolphin.mp3"),
  new Animal("img/kitten.jpg", "mp3/kitten.mp3"),
];

// Create all the animals
const container = document.querySelector(".animals");
const game = new Game(container, animals);

// Connect start button to game
const startButton = document.querySelector("#start");
startButton.addEventListener("click", game.start);

// Connect repeat button to game
const repeatButton = document.querySelector("#repeat-sound");
repeatButton.addEventListener("click", game.sound);
