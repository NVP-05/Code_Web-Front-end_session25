let n;
let f0 = 0;
let f1 = 0;
let fn = 1;
do {
  n = +prompt("Nhập 1 số nguyên dương bất kỳ");
  if (n < 1) {
    console.log("Vui lòng nhập 1 số nguyên dương.");
    break;
  } else {
    for (let i = 1; i <= n; i++) {
      f0 = f1;
      f1 = fn;
      fn = f0 + f1;
      console.log(fn);
    }
    break;
  }
} while (1 == 1);
