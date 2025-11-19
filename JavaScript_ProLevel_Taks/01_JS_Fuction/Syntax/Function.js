//.    ✅ 1. FUNCTION DECLARATION
//!   A function declaration is when you create a function using the function keyword at the top level.

function adding(a , b) {
    return a+ b
}
console.log(adding(20,10))


// ✅ 2. FUNCTION EXPRESSION
//&  A function stored inside a variable. It allows dynamic creation of functions and is often used in callbacks.

const multiple = function name( x,y) {
    return x * y
}
console.log(multiple(20,3))


//✅ 3. SCOPE
//? Scope means where a variable can be accessed in a program.



//✅ 4. GLOBAL SCOPE
//& Variables declared outside all functions. , Accessible everywhere in the file.

let globalVar = "I am global";

function checkScope() {
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

checkScope();
console.log(globalVar); // Accessible
// console.log(localVar); // Unaccessible, would cause an error

