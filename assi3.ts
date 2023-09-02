//                              assingments :3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
//  and titlecase.
// uppercase
export {}
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
