class Person {
  constructor(name) {
    this.name = name;
    this.age = 1;
  }
  hello() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
  growUp() {
    this.age++;
  }
}

class Summer {
  constructor() {
    this.sum = 0;
  }

  add(num) {
    this.sum += num;
  }

  getCurrentSum() {
    return this.sum;
  }
}

class Car {
  constructor(color, speed = 0) {
    this.color = color;
    this.speed = speed;
  }

  drive(speed) {
    this.speed = speed;
  }

  isFasterThan(other) {
    return this.speed > other.speed;
  }
}

class Race {
  constructor() {}

  addCars(...cars) {
    this.cars = cars;
  }

  winner() {
    return this.cars.reduce((acc, currentItem) =>
      acc.isFasterThan(currentItem) ? acc : currentItem
    );
  }
}
