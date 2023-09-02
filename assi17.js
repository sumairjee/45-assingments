"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestlist = void 0;
//                                         assingment :17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestlist = ["Imran Khan", "Zia khan", "Altaf hussain", "Arif Alvi"];
exports.guestlist = guestlist;
let updateGuestList = guestlist.slice(2);
console.log(updateGuestList);
console.log('"Due to space unavailablity we can invite only two guests"' +
    "\n" +
    guestlist);
let notinvitedGuest = guestlist.pop();
console.log(notinvitedGuest + ' "We are sorry we cannot invite you to dinner"');
let notinvitedGuest2 = guestlist.pop();
console.log(notinvitedGuest2 + ' "We are sorry we cannot invite you to dinner"');
let i = 0;
for (i = 0; i < guestlist.length; i++) //console.log(guestlist);
 {
    console.log(guestlist[i] + ' "You are still invited"');
}
guestlist.pop();
guestlist.pop();
console.log(guestlist);
