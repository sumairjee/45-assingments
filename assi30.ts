export{}
//                              assingment : 30 
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let array = ["H.R", "USER","admin", "Accounts","Security"]
let i = 0

for (i = 0 ; i<array.length;i++)
if (array[i] == "admin"){
console.log("hello "+ array[i]+" , would you like to see status report?");
}else {console.log("hello "+ array[i]+" , thank you for logging in again");}





