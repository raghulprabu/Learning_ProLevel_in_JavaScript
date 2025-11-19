const names =["raghul" ]
const role =[" FD developer"]
const add = [ ...names ,...role]
console.log(" details" , add)

const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4]


const fruits = ["apple", "banana"];
const newFruits = [...fruits, "mango"];
console.log(newFruits); // ["apple", "banana", "mango"]


const users = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Priya" }
];

const newUser = { id: 3, name: "Arun" };
const updatedUsers = [...users, newUser];
console.log(updatedUsers);
// [
//   { id: 1, name: "Ravi" },
//   { id: 2, name: "Priya" },
//   { id: 3, name: "Arun" }
// ]
