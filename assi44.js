"use strict";
// //                          assingment:44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function Sandwiches(...items) {
    console.log("you have selected these items for sandwiche");
    return console.log(items);
}
Sandwiches("tomato", "latus", "sause");
Sandwiches("chiken paties", "chees");
Sandwiches("crispy burger", "BBQ Sauce", "onion", "tomatto");