let n;
let S = 1;
let P = 1;
do {
  n = +prompt("Nhập 1 số nguyên dương bất kỳ");
  if (n < 1) {
    console.log("Vui lòng nhập 1 số nguyên dương.");
    break;
  } else {
    for (let i = 2; i <= n; i++) {
      P = P * i;
      S = S + P;
    }
    console.log("Kết quả =" + " " + S);
    break;
  }
} while (1 == 1);
