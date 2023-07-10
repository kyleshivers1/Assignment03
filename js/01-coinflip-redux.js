let coinFlip;
let numFlips = parseInt(prompt(`How many times should I flip the coin?`));
for (let i = 1; i <= numFlips; i++) {
    coinFlip = Math.round(Math.random());
    coinFlip >= 1 ? (console.log(`Tails`)) : (console.log(`Heads`));
}