


 const Person ={
    firstName:"Raghul",
    SecondName:"RAG",
    age:23,
    fullName : function () {
        return this.firstName + " "+this.SecondName
    }
 }

  console.log (Person.fullName())

  const anotherperson ={
    firstName:"thila",
    SecondName:" lusu"
  }
   let  fulldetails = Person.fullName.bind(anotherperson)
//   console.log("checking call ",Person.fullName.call(anotherperson))
  console.log("checking bind",fulldetails)