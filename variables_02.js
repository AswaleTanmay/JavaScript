console.log("Difference between let vs var vs const")
console.log("let and var are used to declare variables in JavaScript, while const is used for constants")

// Example of using let and var
// 1) Variables are declared using the `var` keyword, which allows you to declare a variable anywhere in your code and it will

// 1) Variables: can introduce bug due to not secure environment 

var a = 46
var b = "Tanmay"
var c = null
var d = false
console.log(a,b,c,d); // Output: 45 Tanmay null false

// 2) Let: Block Scoped, Double se variable nhi bana sakte

let x = 46 ; // Let is block scoped, meaning it can be accessed only within the block in which it was declared
let y = "Tanmay Aswale"; // Let is block scoped, meaning it can be accessed only within the block in which it was declared
console.log(x,y)
{
    let a = 30;
    console.log(a)
}
a = "Tanmay";  // let a will provide you error
console.log(a)

const author = "Tanmay Aswale"; // can not be changed for any means
console.log(author)
// author = "Rohit";  --->  Error: Cannot assign to read only property 'author' of object '#<Object>'