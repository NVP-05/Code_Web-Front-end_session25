let n = +prompt("Nhập 1 số nguyên dương bất kỳ");
let sum = 0;
if (n % 2 == 0 && n % 4 == 0) {
  console.log("Số nguyên dương vừa nhập là:" + " " + n);
  console.log("Các số nguyên đằng sau" + " " + n + " " + "là:");
  for (let i = 1; i < n - 1; i++) {
    sum += i;
    console.log(i);
  }
  console.log("Tổng của các số nguyên được in ra là số lẻ là:" + " " + sum);
} else if (n % 2 != 0 && n % 3 == 0) {
  console.log("Số nguyên dương vừa nhập là:" + " " + n);
  console.log("Các số nguyên đằng sau" + " " + n + " " + "là:");
  for (let i = 1; i < n; i++) {
    sum += i;
    console.log(i);
  }
  console.log("Tổng của các số nguyên được in ra là số lẻ là:" + " " + sum);
} else if (n % 2 != 0 && n % 5 == 0) {
  console.log("Số nguyên dương vừa nhập là:" + " " + n);
  console.log("Các số nguyên đằng sau" + " " + n + " " + "là:");
  for (let i = 1; i <= n; i++) {
    sum += i;
    console.log(i);
  }
  console.log("Tổng của các số nguyên được in ra là số lẻ là:" + " " + sum);
} else {
  console.log("Số nguyên dương vừa nhập là:" + " " + n);
  console.log("Các số nguyên đằng sau" + " " + n + " " + "là:");
  for (let i = 1; i < n; i++) {
    sum += i;
    console.log(i);
  }
  console.log("Tổng của các số nguyên được in ra là số lẻ là:" + " " + sum);
}
