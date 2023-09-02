//                              assingment :42
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician = ["samri jadugar","chris angle","David cooperfield"]
function show_magician(){
return console.log(magician);

}
function make_great(){
   let magic = magician.map (magician => 'the great '+magician)
return console.log(magic)

}
make_great()




