"use strict";
//                                          Assingment :14
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list 
// that includes at least three people you’d like to invite to dinner. Then use your list to print a message
//  to each person, inviting them to dinner.
let guestList = ["Imran Khan", "Zia khan", "Altaf hussain", "Pervaiz Mushraf", "Benazir Bhutto"];
exports.guestList = guestList;
let v = 0;
for (v = 0; v < 3; v++) {
    console.log("hello " + guestList[v] + " you are invited for dinner");
}
;
