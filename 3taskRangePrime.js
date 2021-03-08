function prime(start, end) {
  // console.log(start, end);
  if (start > end) {
    return "Invalid input";
  }
  let bagi = 0;
  let primeNum = [];
  for (let i = start; i <= end; i++) {
    // console.log(i);
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        bagi++;
        // console.log(bagi);
      }
    }
    if (bagi === 2) {
      primeNum.push(i);
      // console.log(bagi);
      // console.log(primeNum); 
    }
    bagi = 0;
  }
  return primeNum.join(",");
}

console.log(prime(20, 50));
