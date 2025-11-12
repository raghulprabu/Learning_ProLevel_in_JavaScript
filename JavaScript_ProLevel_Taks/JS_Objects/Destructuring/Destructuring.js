// Destructuring in JavaScript is a syntax that allows you to unpack (extract) values from 
// arrays or properties from objects into individual variables easily.

//!    Destructuring objects

const details = { name:'raghul' , age :20 , place:'salem'}
const {name , age , place} = details;
console.log(name)
console.log(age)
console.log(place)


//& Destructuring Array

const datas = [ 100 ,200,300]
const [ x ,y , z , i=400] =datas
console.log(x)
console.log(y)
console.log(z)
console.log(i)

//? Desturacturing in spreed opearctor 

const mydata = [ 10 ,20,30,40,50,60]
const [ first , second , ...third]= mydata
console.log(first)
console.log(second)
console.log(third)


//^ Unwantted value skipped destructring

const Nums = [500, 600, 700, 800,900]
const [ firsts , , , fourth] = Nums
console.log(firsts)
console.log(fourth)

