"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//                              assingment : 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["ishrat", "faraz", "fahad", "anns", "arman"];
let new_users = ["salman", "shahzaib", "ishrat", "saim", "faraz"];
function listCheck(current_users, new_users) {
    const lowerCase = current_users.map((user) => user.toLowerCase());
    for (const newUser of new_users) {
        const lowerCaseNew = newUser.toLowerCase();
        if (lowerCase.includes(lowerCaseNew)) {
            console.log("username " + newUser + " has already been used ");
        }
        else {
            console.log("username " + newUser + " is available");
        }
    }
}
listCheck(current_users, new_users);
