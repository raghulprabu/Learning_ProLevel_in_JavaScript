let count = 1

 const trimmer = setInterval(() => {
    console.log("count " ,count)
    count++;

    if (count > 5) {
       clearInterval(trimmer); // Stop after 5 times
    }
}, 1000);