export{}

//                                  assingment : 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician = ["samri jadugar","chris angle","David cooperfield"]
function show_magician(){
return console.log(magician);

}
show_magician()

function make_great(){
   let magic = magician.map (magician => 'the great '+magician)
return console.log(magic)

}
make_great()

