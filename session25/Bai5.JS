let n = +prompt("Nhập 1 số nguyên n bất kỳ");
let a = 0;
let b;
while (n > 0) {
  b = n % 10;
  n = Math.floor(n / 10);
  if (b % 2 == 0) {
    a++;
  }
}
console.log("Có" + " " + a + " " + "chữ số chẵn trong số nguyên n.");
