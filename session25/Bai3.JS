let n, m;
let sum = 0;
do {
  n = +prompt("Nhập số nguyên dương n bất kỳ");
  if (n < 1) {
    console.log("Vui lòng nhập 1 số nguyên dương.");
    break;
  } else {
    for (let i = 1; i < n; i++) {
      if (sum > n) {
        sum = sum - i;
        break;
      }
      sum += i;
      m = i;
    }
    m = m - 1;
    console.log("Tổng =" + sum);
    console.log("Số nguyên dương m lớn nhất và bé hơn n là:" + " " + m);
    break;
  }
} while (1 == 1);
