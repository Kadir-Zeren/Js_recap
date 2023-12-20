// let sayi = Number(prompt("bir sayı giriniz"));
// console.log(typeof sayi);

// let sayi2 = "10";
// sayi = sayi + sayi2;
// console.log(sayi);

// console.log(Number("123"));
// console.log(Number("12.3"));
// console.log(Number("0"));
// console.log(Number(" "));
// console.log(Number(""));
// console.log(Number(null));

// const myNumber = "three";
// let myNumber2 = Number(myNumber);
// console.log(myNumber2);
// console.log(typeof myNumber2);

// const dolar = "1000.2";
// const tl = "2000.3";

// const totalMoney = Number(dolar) + +tl;
// console.log(totalMoney);

// const dolarInt = parseInt(dolar);
// console.log(dolarInt);
// const tlFloat = parseFloat(tl);
// console.log(tlFloat);

// console.log("conditions");

// const calismaSuresi = prompt("calisma süresi:");
// let maas = prompt("maasini giriniz:");
// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1);
//   console.log("zamli maasiniz", maas);
//   console.log(`zamli maasiniz ${maas} `);
// } else {
//   console.log("uzgunuz maasiniza zam yapamiyioruz", maas);
// }

// console.log("güle güle");

// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1);
//   console.log(`zamli maasiniz: ${maas}`);
// }
// console.log("Güle güle");

// const grade = prompt("please enter your grade:");
// let result = "";

// if (grade < 0) {
//   console.log("grade con not be small your grade");
// } else if (grade < 40) {
//   result = "FF";
// } else if (grade <= 50) {
//   result = "DD";
// } else if (grade <= 65) {
//   result = "CC";
// } else if (grade <= 89) {
//   result = "BB";
// } else if (grade <= 100) {
//   result = "AA";
// } else {
//   console.log("grade can not be bigger than 100");
// }

// if (result != "") {
//   console.log(`Your score:${result}`);
// }
const n1 = +prompt("num1");
const n2 = +prompt("num2");
const n3 = +prompt("num3");

if (n1 > n2) {
  if (n1 > n3) {
    console.log("biggest", n1);
  }
}

if (n1 > n2 && n1 > n3) {
  console.log("biggest", n1);
} else if (n2 > n1 && n2 > n3) {
  console.log("biggest", n2);
} else if (n3 > n1 && n3 > n2) {
  console.log("biggest", n3);
}
