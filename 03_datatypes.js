// there are two type of the datatypes in the java script :
    // 1. primitive : int , string , boolean ,symbol,etc..
    // 2. Non- Premitive : Array , objects, functions 

// mainly "OBJECT" datatype is used for the the provide unique identifier to the variable 

let id1 = Symbol("123")  //  here for id1 variable we can pass the unique value in symblic manner 
let id2 = Symbol("123") // it is same like above id1 variable 

console.log(id1==id2) 
// here it will print false , because both are different based on their symbolic value