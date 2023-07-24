export { mass, newMass } from "../test/test";
let mass = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];
let newMass = mass.sort((prev, next) => prev.health - next.health);
