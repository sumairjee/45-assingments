//                                       assingment :15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send
// out a new set of invitations. You’ll have to think of someone else to invite.
//.Start with your program from Exercise 14. Add a print statement at the end of your program stating the
// name of the guest who can’t make it.
//.Modify your list, replacing the name of the guest who can’t make it with the name of the new person you
//are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

export {};
let guestList = [
  "Imran Khan",
  "Zia khan",
  "Altaf hussain",
  "Pervaiz Mushraf",
  "Benazir Bhutto",
];
// console.log(guestList);
let b = guestList.pop();
let c = guestList.pop();

console.log(guestList);

guestList.push("Arif Alvi");
console.log(guestList);
console.log(b + "\n" + c + " you can`t make it ");
console.log(guestList[3] + " you are a new guest");
let i = 0;
for (i = 0; i < guestList.length; i++)
  console.log(guestList[i] + " you are still in our guest list ");
export{guestList}

