// //                                    assingment :16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
// guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your
//  list. • Print a new set of invitation messages, one for each person in your list.

export {};
let guestlist = ["Imran Khan", "Zia khan", "Altaf hussain", "Arif Alvi"];
guestlist.push("hamza", "pasha", "shezad");
console.log(guestlist + " \n " + "new guests invited because we have got a bigger table");

guestlist.unshift("zeeshan" + " new guest ");
console.log(guestlist);

console.log("add new in middle");
guestlist.splice(4,0,"Babar Azam")
console.log(guestlist);

console.log("guest add at the end");
guestlist.push("Abdul Qadeer Khan")
let i =0
for (i=0 ; i<guestlist.length;i++)
console.log(guestlist[i]+'  " you are invited for dinner "')
export{guestlist}
