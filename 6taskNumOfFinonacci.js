function fibonacci(params) {
  let result = [];

  for (let i = 0; i < params; i++) {
    if (i == 0 || i == 1) {
      result.push(i);
      // console.log(result);
    } else {
      result.push(result[i - 2] + result[i - 1]);
      // console.log(i + ' adalah ini index i');
      // console.log(result);
    }
  }
  return result;
}

console.log(fibonacci(10));
