const mydata = () =>{
    console.log(" this is raghul")
}
const another = () =>{
    console.log("how is this ?")
}
 mydata(another())



 function greet(name,callback) {
  console.log("Hello " + name);
     callback();
}

function afterGreeting() {
  console.log("Welcome to JavaScript!");
}

greet("Raghul", afterGreeting);



 const datas =["raghul" , "hellos" , "JSscript" , "callMode"]
 datas.forEach(function name() {
    console.log(datas)
 });


 //! using SetTimeOut 

 setTimeout(function name(){
    console.log("raghul")
 },3000)


 //*  using setInterval callback

 setInterval( function game() {
    console.log("start the game ")
 },3000)


