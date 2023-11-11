const INITIAL_AGE = 0;
const BASE_HUNGER = 0;
const MAX_FITNESS = 10;

function Pet(name) {
  this.name = name;
  this.age = INITIAL_AGE;
  this.hunger = BASE_HUNGER;
  this.fitness = MAX_FITNESS;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.fitness + 4 <= MAX_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAX_FITNESS;
  }
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.hunger - 3 >= BASE_HUNGER) {
    this.hunger -= 3;
  } else {
    this.hunger = BASE_HUNGER;
  }
};

Pet.prototype.checkup = function () {
  if (this.fitness <= 3 && this.hunger >= 5) {
    return "I need a walk and I am hungry";
  } else if (this.fitness <= 3) {
    return "I need a walk";
  } else if (this.hunger >= 5) {
    return "I am hungry";
  } else {
    return "I feel great!";
  }
};

Pet.prototype.adoptChild = function (child) {
  this.children.push(child);
};

Pet.prototype.haveBaby = function (name) {
  this.children.push(new Pet(name));
};

module.exports = Pet;
