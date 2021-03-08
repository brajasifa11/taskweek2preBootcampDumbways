var s = '';
var pola = 6;

function faktorial(n) {
  var a = 1;
  var i = 1;

  while(i <= n) {
    a *= i;
    i++;
    // console.log(a + ' ini a dari while');
  }
  return a;
}

for (var i = 0; i < pola; i++) {
  // console.log(faktorial(i) + ' ini dari perulangan pertama');
  for (var j = pola; j >= i; j--) {
    // console.log(faktorial(j) + ' ini dari perulagan kedua');
    s += ' ';
  }
  for (var j = 0; j <= i; j++) {
    s += faktorial(i) / (faktorial(j) * faktorial(i - j)) + ' ';
  }
  s += '\n';
}

console.log(s);
