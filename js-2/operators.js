console.log("Js dosyası bağlandı");

var deneme = 5;
varDeneme = 6;

let myVar = 5;
const myVar1 = 6;

const num1 = 10;
const num2 = 69;

const toplam = num1 + num2;
console.log(toplam);

const msg1 = "Hello";
const msg2 = "World!";

const mesaj = msg1 + msg2;
console.log(mesaj);

const firstName = "Koray";
const lastName = "Koksal";

console.log(firstName, "", lastName);
const fullName = firstName + " " + lastName;
console.log(fullName);

const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

const num3 = "6";
const num4 = "7";
console.log(num3 + num4);
console.log(num3 + 7);

console.log(7 + num3);

console.log(typeof (7 + num3));

const x = 55;
const y = 44;

console.log(x - y);

const myNum = "1";
console.log(x - myNum);

const yourNum = "one";
console.log(x - yourNum);

console.log(x - "a");

let carp1 = 7;
let carp2 = 9;

console.log(carp1 * carp2);

console.log("a" * "b");
console.log("a" * 3);

console.log("5" * "9");

console.log(typeof ("5" * "9"));

const böl1 = 81;
const böl2 = 9;
console.log(böl1 / böl2);
console.log(böl1 / "9");
console.log(böl1 / "dokuz");

console.log(böl2 / 0);
console.log(-60 / 0);

console.log(0 / 5);
console.log(0 / -5);

console.log(57 / 9);

const mod1 = 57;
const mod2 = 9;

console.log(mod1 % mod2);
console.log(22 % 7);

const benimSayim = 967;

const birlerBas = benimSayim % 10;
console.log(birlerBas);
const onlarBas = (benimSayim % 100) / 10;
console.log(onlarBas);
const yüzlerBas = benimSayim / 100;
console.log(yüzlerBas);

console.log(
  `yüzlerbas: ${Math.trunc(yüzlerBas)}, onlarbas: ${Math.trunc(
    onlarBas
  )}, birletbas:${birlerBas}`
);

const hazirSayi = 56.78888;
console.log(`hazirSayi of circle ${hazirSayi.toFixed(3)}`);
console.log(`hazirSayi of circle ${Math.floor(hazirSayi)}`);
console.log(`hazirSayi of circle ${Math.ceil(hazirSayi)}`);
console.log(`hazirSayi of circle ${Math.trunc(hazirSayi)}`);
console.log(`hazirSayi of circle ${Math.round(hazirSayi)}`);

const randomNum = Math.random();
console.log(randomNum);

const randomNum2 = Math.random() * 10;
console.log(randomNum2);
console.log(Math.round(Math.random() * 10));

const üs1 = 2;
const üs2 = 3;

console.log(üs1 ** üs2);

const pi = 3.14;
const yariCap = 9;

const alan = pi * yariCap ** 2;
console.log(alan);

let artır = 6;
let artırNew = artır++;
console.log(artırNew);

let nums1 = 14;
let nums2 = 17;

// nums2 += nums1;
console.log(nums2);

nums2 -= nums1;
console.log(nums2);

const num16 = 27;

console.log(num16 == 27);
console.log(num16 == "27");
console.log(num16 === 27);
console.log(num16 === "27");

// const user1 = prompt("lütfen bir sayı giriniz");
// const user2 = prompt("lütfen bir sayı giriniz");
// console.log(user1);
// console.log(user2);
// const isSame = user1 == user2;
// console.log(isSame);

console.log(true == 1);
console.log(null == undefined);

console.log(15 != "15");
console.log(15 !== "15");

console.log(15 > 5);
console.log(15 < 5);

console.log("15" > 5);

console.log("a" > "b");

console.log("a".charCodeAt());
console.log("b".charCodeAt());

console.log("a" > "A");

console.log(15 >= 15);
console.log(15 <= 15);
console.log(15 >= 16);

console.log(15 >= "15");
console.log("14" <= "15");

console.log(true && true);
console.log(" " && true);
console.log(5 && "Merhaba");
console.log(0 && "Dünya");

console.log(5 && 0);
console.log(true && false);
console.log(5 || 15);
console.log(5 || 0);
console.log("" || "Merhaba");
console.log("" || 0);

console.log(!true);
console.log(!false);
console.log(!0);
console.log(!5);
