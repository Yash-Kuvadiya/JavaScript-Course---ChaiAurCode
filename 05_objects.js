
// this is the way to create an object in javascript 
// This type of the object call as the non-singleton object 

const JsObject = {
    name:"Yash",
    full_name : "Yash kUvadiya",
    contact:"9874563210",
    isLogged:"False",
}



// if we want to print any single value from user so, the way is...
console.log(JsObject.full_name)  // this is way-1
console.log(JsObject["name"])   // this is way-2

// use object with function 


// object - funtion created 
JsObject.greeting = function(){
    console.log(`Hello Users I'm ${this.full_name}`)
}

// function called 
console.log(JsObject.greeting())