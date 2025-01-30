// Tell me about var let and const and why we shouldnt use var variable to define values.

var name = 'Myname'
console.log(name);
// the thing is we dont have to use the var variable because you someone can overwrite the value of the existing value without
// knowing below is example.
var name = 'Jani'
console.log(name);
// here as we saw there is new name variable we used and both we have defined with different values . how someone other developer
// can overwrite your existing value without knowing


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// now let see about let keyword.
let mydob = 1990 // you have declared the value
console.log(mydob); // we are printing the value.

// now let see if we can change same as we did in var variable
// let mydob = 1991 //  xxxx<<<<<<<<<<<<<<<<<<<<<< this will start giving you error because you cannot change the value like this
mydob = 1991 // you can declare the value of let without putting the let word infront of the value .as developer will know the
// value is already declared
console.log(mydob)

    // ^

// SyntaxError: Identifier 'mydob' has already been declared

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// now we learn about const variable 
/*
const variable is to define the value const mean constant who dont change. its meaning the things you dont want to change
in your entire coding website or application.
for example date of birth because a person date of birth never change . he born on the day it can never be changed.

*/

const dateofbirth = 1990
console.log(dateofbirth);
// const dateofbirth = 1992 xxxx
// dateofbirth = 1992 xxx 
console.log(dateofbirth);

