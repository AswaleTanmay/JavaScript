// Operators and Expressions in javascript

console.log("Operators in JavaScript")
//Arithemetic Operators

let a = 46;
let b = 12;
console.log("a+b=",a+b);         //----> Addition Operator
console.log("a-b=",a-b);        //----> Substraction Operator
console.log("a*b=",a*b);       //----> Multiplication Operator
console.log("a/b=",a/b);      //-----> Division operator return exact answer of the expression performed i.e., 3.8333333333333335
console.log("a%b",a%b);      //-----> Modulus operator
console.log("a**b=",a**b);   //----> Exponentiation Operator i.e., b to the power of a i.e., 12 times multiplication of 46 i.e., 89762301673555230000

// Increment and Decrement Operators

console.log("a++ =",a++);  //----> In this Increment operator the a operator get increment after the exection of program Here a will be 46
console.log(a);   //-----> Here value of a will be 47
console.log("++b =",++b); //-----> In this Increment operator the a operator get increment before the full exection here b will be 13
console.log(b);   //-----> Here value of b will be 13
console.log("a-- =",a--);  //----> In this Decrement operator the a operator get decrement after the exection of program Here value of a will be 47
console.log(a);    //-----> Here value of a will be 46
console.log("--b =",--b);   //----> In this Decrement operator the a operator get decrement brfore the full exection of program Here value of b will be 12
console.log(b);     //-----> Here value of a will be 12

//Assignment Operators
let x=50;
console.log(x);
x+=10;                          //------>Adds 10 to the existing value of x  (x=50+10) 60
console.log("Value after addition is: ",x)
x-=10;                           //------>Subtracts 10 from the existing value of x (x=50-10) 50
console.log("Value after subtraction is : ",x)
x/=10;                            //------>Divides the existing value of x by 10 (x=50/10) 1
console.log("Value after division is : ",x)
x*=10;                             //------>Multiplies the existing value of x with 10 (x=50*10) 50
console.log("Value after multiplication is : ",x)
x%=10;                             //------>Remainder the existing value of x with 10 (x=50%10) 0
console.log("The remainder when divided by 10 is : ",x)
x**=10;                            //------>Exponentiation the existing value of x with 10 (x=50**10) 
console.log("Value after exponentiation is : ",x)


//Comparison operators

let c=10;
let d="20";
console.log("c==d is",c==d);
console.log("c!=d is",c!=d);
console.log("c===d is",c===d);  //-----> checks the data types if same
console.log("c!==d is",c!==d); //-----> checks the data types if not same
console.log("c<d is",c<d);
console.log("c<=d is",c<=d);
console.log("c>d is",c>d);
console.log("c>=d is",c>=d);


//Logical operators
let e=true;
let f=false;
console.log("e&&f is",e && f);   //-----> true and and true then true both the condition must be true
console.log("e||f is",e || f);   //----> if one condition is true then also true if both are false then false
console.log("!(e && f) is", !(e && f));  //-----> true ko false false ko true


//Bitwise operators
let g = 98;
let h = 13;
console.log("g & h is",g&h);      //-----> bitwise AND operation
console.log("g | h is",g|h);       //-----> bitwise OR operation
console.log("g ^ h is",g^h);        //-----> bitwise XOR operation
console.log("~g is", ~g);         //-----> Bitwise NOT operator
