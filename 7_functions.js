
// Function basics 


// //function define 
// function twoNumberAddition(number1,number2){
//     console.log("This is Addition of two number:")
//     return number1+number2
// }

// //function call
// console.log(twoNumberAddition(10,20))



// function loginUserMessage(username){
//     return `${username} Just Logged In`
// }

// console.log(loginUserMessage("Yash"))


// another way to function declarattion 

// let FunctionPI = function(){
//     console.log("Value of PI is 3.14")
// }

// FunctionPI();




// use rest operator in Function 
// Jo 1 j parameter ma more than 1  value print karavvi hoi to rest opeator no use thaai 6e
// Rest Operator use with the (...) 3 dots

function Testing(...item){
    return item
}
console.log(Testing(200,300,400))

// OUTPUT : [200,300,400]        [ using rest opeator we print all given data in the array ]



// function with object

//object
const userObject ={
    username:"",
    age : ""
}

//function for Above object value fetch
function handleUserObject(anyobject){  // "anyobject" is generics of user object
    console.log(`My Name is ${anyobject.username} and My Age is ${anyobject.age}`)
}

//above function call with refernce to above object
handleUserObject({
    username:"Yash",
    age:"21"
})

//OUTPUT : My Name is Yash and My Age is 21



// Functions woth array 
 const userArray = [100,200,300,400,500]

 // above function call with refernce to above array
 function handleUserArray(anyArray){
    return anyArray[2]
 }

 //above function call with refernce to above array
 console.log(handleUserArray(userArray))