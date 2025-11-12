// In JavaScript, a Promise is an object that represents the eventual completion 
// (or failure) of an asynchronous operation and its resulting value. 
//^  A promises  is  a way to  handle operaction that take time to complete


function checkOrder() {
    return new Promise((resolve , reject)=>{
        let orderID = document.querySelector("#order_id").value

        if(orderID == "Order123"){
            resolve(" your order is delivered")
        }else{
            reject("your order is pending ")
        }

    })
    
}

document.querySelector("#checkbtn").addEventListener('click',() =>{
    checkOrder ().then((success) =>{
        document.querySelector('#result').innerHTML = "Sucess is complete"
    }).catch(() =>{
       document.querySelector('#result').innerHTML = "your order is failor"
    })
})