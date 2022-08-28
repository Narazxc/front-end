/*
// Values and Variables
let js = 'amazing';

console.log(40 + 10);


console.log('Jonas');

let firstName = "Bob & Vegan";
console.log(firstName);
*/

/*
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

//const job;

var job = 'Programmer';
job = 'Teacher';

lastName = 'Schedtmann';
console.log(lastName);
*/

/*
// Math operators
const now = 2037;
const ageNara = now - 2002;
const ageSarah = now - 2018;
console.log(ageNara, ageSarah);

console.log(ageNara * 2, ageNara / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Sitha';
const lastName = 'Sovannara';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4;
x++; // x = x + 1;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageNara > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 2002 > now - 2018);
*/

/*
const now = 2037;
const ageNara = now - 2002;
const ageSarah = now - 2018;

console.log(now - 2002 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageNara + ageSarah) / 2;
console.log(ageNara, ageSarah, averageAge);
*/

/////////////////
// Coding Challenge #1
//1
console.log("TEST DATA 1:");
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

//2
let markBMI = markWeight / markHeight ** 2;
console.log("Mark's BMI: " + markBMI);

let johnBMI = johnWeight / (johnHeight * johnHeight);
console.log("John's BMI: " + johnBMI);

//3
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

console.log("\n"); // separate line

console.log("TEST DATA 2:");
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
console.log("Mark's BMI: " + markBMI);

johnBMI = johnWeight / (johnHeight * johnHeight);
console.log("John's BMI: " + johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);



