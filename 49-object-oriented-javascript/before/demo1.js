function Game() {
  this.secret = 0;
  this.numberOfTries = 0;
  this.__proto__ = Game.fns;
}

Game.fns = {};

Game.fns.startNewGame = function () {
  this.secret = Math.floor(Math.random() * 10);
  this.numberOfTries = 0;
};

Game.fns.play = function (guess) {
  if (this.numberOfTries >= 10) {
    alert("Sorry, game over");
    return;
  }
  this.numberOfTries += 1;
  if (guess > this.secret) {
    return 1;
  } else if (guess < this.secret) {
    return -1;
  } else {
    return 0;
  }
};
