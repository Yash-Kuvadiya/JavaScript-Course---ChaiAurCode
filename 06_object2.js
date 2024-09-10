// there are two ways to declare the singleton object

const singObj = {}  // way-1 to declare 
// const singObj = new Object()     -- this is the way-2


singObj.id = "1123"
singObj.name = "Yash",
singObj.isLogged = false

//console.log(singObj)
//output : { id: '1123', name: 'Yash', isLogged: false }



// nested object 
const mainObject ={
    email : "yash@gmail.com",
    fullname : {
        username: {
            firstname : "Yash",
            lastname : "patel"
        }
    }
}

// now how to access the details which is in the nested object 

console.log(mainObject)
/* OUTPUT : {
  email: 'yash@gmail.com',
  fullname: { username: { firstname: 'Yash', lastname: 'patel' } }
}*/ 

console.log(mainObject.fullname)
//OUTPUT : { username: { firstname: 'Yash', lastname: 'patel' } }

console.log(mainObject.fullname.username)
//OUTPUT : { firstname: 'Yash', lastname: 'patel' }

console.log(mainObject.fullname.username.firstname)   // OUTPUT : Yash
console.log(mainObject.fullname.username.lastname)  // OUTPUT : Patel