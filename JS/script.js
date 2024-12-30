"use strict"
// 1
const celsius = 30;
const farengeit = celsius * (9/5) + 32;
console.log(farengeit);
// 2
const daysInMonth = 31;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = 60 * hoursInMonth;
console.log(minutesInMonth);    
// 3
let health = 100;
let stamina = 100;
health = health - 10;
stamina -= 10;
console.log(health, stamina);
// 4
const totalPrice = 1200;
const discount = 0.1;
const discountedPrice = totalPrice * discount;
console.log(discountedPrice)
// 5
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(floatNumber);
console.log(roundedDown);
// 6
const floatString = "45.67adidas";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);
// 7
const intString = "101.111";
const parsedInt = parseInt(intString);
console.log(parsedInt);
// 8
const number =  256;
const sqrtnumber = Math.sqrt(number);
console.log(sqrtnumber);
// 9
const typeNumber = 17;
const typeString = "17";
console.log(parseInt(typeString));
console.log(typeNumber.toString());