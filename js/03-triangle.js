let char = '#';
for (let i = 1; i <= 7; i++) {
    for (let j = i; j <= i; j++) {
        console.log(char.repeat(j));
    }
}