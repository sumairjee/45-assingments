"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Eric";
let upperCaseName = personName.toUpperCase();
console.log(upperCaseName);
// lowercase
let lowerCaseName = personName.toLowerCase();
console.log(lowerCaseName);
//titlecase
let CaseName = "eric";
let first = CaseName.charAt(0);
let rem = CaseName.slice(1);
let titlecase = first.toUpperCase() + rem;
console.log(titlecase);
