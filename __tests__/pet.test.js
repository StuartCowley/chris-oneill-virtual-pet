const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
  it("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });

  it("initial age of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.age).toEqual(0);
  });
});

describe("growUp", () => {
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });

  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  it("increases hunger by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it("decreases fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });
});

describe("walk", () => {
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
  it("increases fitness by 4", () => {
    const pet = new Pet("fido");
    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });

  it("increases fitness by 4 to a maximum of 10", () => {
    const pet = new Pet("Fido");
    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});

describe("feed", () => {
  it("decreases hunger by 3", () => {
    const pet = new Pet("fido");
    pet.growUp();
    pet.feed();

    expect(pet.hunger).toEqual(2);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("checkup", () => {
  it("checks pets fitness levels", () => {
    const pet = new Pet("Fido");

    pet.fitness = 3;
    expect(pet.checkup()).toEqual("I need a walk");
  });

  it("checks pets hunger", () => {
    const pet = new Pet("Fido");

    pet.hunger = 6;
    expect(pet.checkup()).toEqual("I am hungry");
  });

  it("checks both fitness and hunger", () => {
    const pet = new Pet("Fido");

    pet.fitness = 3;
    pet.hunger = 6;
    expect(pet.checkup()).toEqual("I need a walk and I am hungry");
  });

  it("checkup, pet is doing fine", () => {
    const pet = new Pet("Fido");

    pet.fitness = 6;
    pet.hunger = 3;
    expect(pet.checkup()).toEqual("I feel great!");
  });
});

describe("adoptChild", () => {
  it("adoptChild", () => {
    const parent = new Pet("Dave");

    expect(parent.children).toEqual([]);
  });

  it("adoptChild", () => {
    const parent = new Pet("Dave");
    const child = new Pet("Amelia");
    parent.adoptChild(child);

    expect(parent.children).toEqual([child]);
  });
});

describe("haveBaby", () => {
  it("haveBaby", () => {
    const parent = new Pet("Thom");

    expect(parent.children).toEqual([]);
  });

  it("haveBaby", () => {
    const parent = new Pet("Thom");
    parent.haveBaby("Annie");

    expect(parent.children[0].name).toEqual("Annie");
  });
});
