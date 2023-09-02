"use strict";
//                          assingment :6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the
// name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the
// whitespace around the name is displayed. Then print the name after striping the white spaces.
Object.defineProperty(exports, "__esModule", { value: true });
let personName2 = "sumair";
let strippingName = `\t sumair \n `;
console.log("with whitespace " + strippingName);
console.log("without whitespace " + strippingName.trim());
