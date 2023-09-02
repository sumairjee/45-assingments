"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//                          assingment : 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let a = "string";
console.log(a == "string");
console.log(a == "stiring");
console.log(a == "String");
let b = 20;
console.log(b == 20);
console.log(b != 20);
console.log(b < 20);
console.log(b > 20);
console.log(b >= 20);
console.log(b <= 20);
console.log("operators");
let c = 5;
console.log(c >= 5 && c < 10);
console.log(c > 5 && c < 10);
console.log(c >= 5 || c < 10);
console.log(c > 5 || c < 10);
console.log(!(c < 10));
console.log(!(c > 10));
console.log("array check");
console.log(Array.isArray([1, 3, 5]));
// Expected output: true
console.log(Array.isArray('[]'));
// Expected output: false
