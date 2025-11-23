// 🔥 async/await
// ✅ Real-World Technical Definition (Easy + Technical)

// async and await are used in JavaScript to handle asynchronous tasks (tasks that take time) in a cleaner, synchronous-looking style.

// ✔ Asynchronous tasks = tasks that do NOT finish immediately

// Examples:

// API calls

// File reading

// Database calls

// Timer functions

// Why async/await?

// Without async/await → code becomes messy with .then() and callbacks.
// With async/await → code looks like normal step-by-step instructions.

// Real-world analogy:

// You order food → you wait for it → then you eat.
// You don’t proceed until the waiter brings it.

// Similarly:

// async → makes a function promise-based

// await → pauses until the promise completes




async function myFunction() {
  return "Hello";
}

async function getData() {
  let response = await fetch("url");
}


async function demo() {
  console.log("1 first Printed ");
  
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("2 (after 2 seconds)");
}

demo();
