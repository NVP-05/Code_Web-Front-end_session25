let a = +prompt("Nhập vào 1 số nguyên a bất kỳ");
let b = +prompt("Nhập vào 1 số nguyên b bất kỳ");
let sumLe = 0;
let sumChan = 0;
if (a < b) {
  for (let i = a + 1; i < b; i++) {
    if (i % 2 == 0) {
      sumChan += i;
    } else {
      sumLe += i;
    }
  }
  console.log("Tổng các số lẻ ở giữa a và b là:" + " " + sumLe);
  console.log("Tổng các số chẵn ở giữa a và b là:" + " " + sumChan);
} else {
  for (let i = b + 1; i < a; i++) {
    if (i % 2 == 0) {
      sumChan += i;
    } else {
      sumLe += i;
    }
  }
  console.log("Tổng các số lẻ ở giữa b và a là:" + " " + sumLe);
  console.log("Tổng các số chẵn ở giữa b và a là:" + " " + sumChan);
}
