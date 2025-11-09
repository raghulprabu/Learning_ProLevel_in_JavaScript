const numbers = [1, 2, 3, 4, 5];
const multip = numbers.filter(n => n >= 3);
console.log(multip);



const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Charlie", age: 30, active: true },
  { name: "David", age: 16, active: true }
];

const check = users.filter(users => users.age >= 18 && users.active)
console.log("Intermediate - Active adults:", check);



const students = [
  { name: "Ravi", score: 80 },
  { name: "Priya", score: 40 },
  { name: "Kiran", score: 65 }
];

const result = students.filter(students => students.score >= 50)
console.log("student passed",result)



const user = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Charlie", age: 30, active: true },
  { name: "David", age: 16, active: true }
];
const count = user.filter(user => user.name.length >= 5)
console.log("Name count",count)



const online = [
  { id: 1, active: true, name: "John" },
  { id: 2, active: false, name: "Rita" },
  { id: 3, active: true, name: "Maya" },
];
const current = online.filter(online => online.active)
console.log(" checking online person ",current)

