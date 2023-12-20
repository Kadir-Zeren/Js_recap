// let sayi = Number(prompt("bir sayı giriniz"));
// console.log(typeof sayi);

// let sayi2 = "10";
// sayi = sayi + sayi2;
// console.log(sayi);

console.log(Number("123"));
console.log(Number("12.3"));
console.log(Number("0"));
console.log(Number(" "));
console.log(Number(""));
console.log(Number(null));

const myNumber = "three";
let myNumber2 = Number(myNumber);
console.log(myNumber2);
console.log(typeof myNumber2);

const dolar = "1000.2";
const tl = "2000.3";

const totalMoney = Number(dolar) + +tl;
console.log(totalMoney);

const dolarInt = parseInt(dolar);
console.log(dolarInt);
const tlFloat = parseFloat(tl);
console.log(tlFloat);

console.log("conditions");

const calismaSuresi = prompt("calisma süresi:");
let maas = prompt("maasini giriniz:");
if (calismaSuresi >= 10) {
  maas = maas * 1.1;
  console.log("zamli maasiniz", maas);
  console.log(`zamli maasiniz ${maas} `);
} else {
  console.log("uzgunuz maasiniza zam yapamiyioruz", maas);
}
