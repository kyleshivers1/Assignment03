let num = 0;
do {
  num++;
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(`Marco! Polo!`);
  } else if (num % 3 === 0) {
    console.log(`Marco!`);
  } else if (num % 5 === 0) {
    console.log("Polo!");
  } else {
    console.log(`${num}`);
  }
} while (num < 100);
