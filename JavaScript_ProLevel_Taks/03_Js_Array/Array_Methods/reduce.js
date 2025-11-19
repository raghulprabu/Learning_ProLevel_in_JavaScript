//* The reduce() method executes a reducer function on each element of the array to accumulate it into a single result (value).
// accumulator → stores the result of previous operations
// Returns a single value (number, string, object, etc.)


const numbers = [1, 2, 3, 4];
const total = numbers.reduce((sum, n) => sum + n, 0);
console.log("values ",total); // 10


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);
// { apple: 3, banana: 2, orange: 1 }


const cart = [
  { item: "Laptop", price: 60000, qty: 1 },
  { item: "Mouse", price: 500, qty: 2 },
  { item: "Keyboard", price: 1500, qty: 1 },
];

const totalAmount = cart.reduce((total, item) => total + (item.price * item.qty), 0);
console.log("Total:", totalAmount); // Total: 62500


