// ? The forEach() method in JavaScript executes a callback function once for every element in an array, in order.
// It does not return a new array — it’s used only for performing actions like logging, updating DOM, etc.

let data = [1, 2, 3, 4, 5];
let test = [];
data.forEach(num => test.push(num * 2));
console.log("value", test);
