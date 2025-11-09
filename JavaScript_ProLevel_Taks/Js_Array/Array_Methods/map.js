const nums = [1, 2, 3, 4, 5];
const multiple = nums.map(nums => nums * 2)
console.log("multiple the number ",multiple)


const names = ["ravi", "sita", "kumar"];
const letter = names.map(names => names.toUpperCase())
console.log(letter)


const prices = [100, 250, 400];
const formatted = prices.map(p => `₹${p.toFixed(2)}`);
console.log(formatted); 


// const userSummaries = users.map(user => ({
//   name: user.name,
//   status: user.active ? "Active" : "Inactive",
//   category: user.age >= 18 ? "Adult" : "Minor"
// }));
// console.log("Intermediate - User summaries:", userSummaries);



const orderItems = [
  { product: "Laptop", price: 1000, quantity: 2, tax: 0.1 },
  { product: "Mouse", price: 25, quantity: 5, tax: 0.1 }
];

const invoiceItems = orderItems.map(item => ({
  product: item.product,
  subtotal: item.price * item.quantity,
  taxAmount: item.price * item.quantity * item.tax,
  total: item.price * item.quantity * (1 + item.tax)
}));
console.log("Advanced - Invoice items:", invoiceItems);