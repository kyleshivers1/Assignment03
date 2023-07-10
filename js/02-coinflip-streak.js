let coinFlip;
let num = 0;
do {
  num++;
  coinFlip = Math.round(Math.random());
  coinFlip >= 1 ? console.log(`Tails`) : console.log(`Heads`);
} while (coinFlip <= 0);
console.log(`Game over!`);
