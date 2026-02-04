function findPairsDivisibleBy17() {
  let count = 0;
  const pairs = [];
  for (let i = 1; i <= 100; i++) {
    for (let j = i + 1; j <= 100; j++) {
      let sum = i + j;
      if (sum % 17 === 0) {
        pairs.push(`(${i}, ${j}) = ${sum}`);
        count++;
      }
      console.log("(" + `${i}` + "," + `${j}` + ") = " + `${sum}`);
    }
  }
  console.log(`Tổng cộng: ${count} cặp`);
}
findPairsDivisibleBy17();
