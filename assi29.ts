export{}
// //                                  assingment:29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favorite_fruits : string[] = ["mango","grape","watremelon"]
if (favorite_fruits.includes ("banana")){
console.log("You really like banana");
}else if (favorite_fruits.includes ("apple")){
    console.log("You really like apple");
    
} else if (favorite_fruits.includes ("mango")){
    console.log("You really like mango");
}else if (favorite_fruits.includes ("apricot")){
console.log("You really like apricot");}
    
else if (favorite_fruits.includes ("orange")){
    console.log("You really like orange");
}console.log(favorite_fruits);


