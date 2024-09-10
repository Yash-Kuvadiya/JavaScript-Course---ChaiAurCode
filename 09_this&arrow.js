
// object for understanding concept of this keyword
const user = {
    username : "yash",
    age : "21",

    welcomMSGFunction : function(){
        console.log(`${this.username},welcome to our Website`)  // this referes current object username variable value 
        

       
        console.log(this)
         // (1) Jo Aaya this write karvama Aave to (in the function) -- it will be print all the variable of this object
       /*OUTPUT :
        {
            username: 'yash',
            age: '21',
            welcomMSGFunction: [Function: welcomMSGFunction]
          }*/
    
    }
}
user.welcomMSGFunction()


// console.log(this)
//(2) jo Aaya this write karvama AAve to (outside of function) -- it would be print the {} empty scope 




 // ARROW FUNCTION 

 const myFunction = () => {
    console.log("This is an arrow function")
 }

 myFunction()

 //arrow function with parameter 

//  const myFunction2 = (num1 , num2) => {
//     return num1 + num2
//  }

 const myFunction2 = (num1,num2) => num1+num2   // this is a short form of the arrow funnction 

// const myFunction2(num1,num2) => (num1+num2)   // if we write our function body in () , then we can't want to use return in our code 

 console.log(myFunction2(10,20))





// this keyword not usable in regular function and arrow function... let's see with example



/*
// Regular Function
const sayHello = function(){
    console.log("This is the SayHello Regular Function")
    let myName="Yash"
    console.log(this.myName) // it will be print "undefined"
}*/

//Arrow Function 
/*const sayHello = () => {
    console.log("This is the SayHello Arrow Function")
    let myName="Yash"
    console.log(this.myName) // it will be print "undefined"
}*/

// sayHello()
