"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//                      assingment:45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car(manufacturer, model, ...optional) {
    let Cars = {
        manufacturer,
        model,
    };
    for (let [option1, option2] of optional) {
        Cars[option1] = option2;
    }
    return Cars;
}
let car_details = car("Honda", 2022, "civic", "black");
let car_details2 = car("Toyota", 2021, "prius", "silver");
