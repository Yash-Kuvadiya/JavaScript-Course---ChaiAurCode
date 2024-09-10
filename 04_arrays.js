
// arra declaration and calling
const myArr = [1,2,3,4,5]

console.log(myArr)
console.log(myArr[1])


// methods of array

myArr.push(10) // used for insert value in array
myArr.pop() // it will automatically delete last value of the array- same like stack 
myArr.shift() // it will be automatically remove first element from the array

myArr.unshift(4) // this method will print the given value at the first position of the array..so here 40 set on the firstt posititon of the array

console.log(myArr.includes(2)) // "include()" method check that given value is availble in the array or not 
console.log(myArr.indexOf(1)) //"indexOf()" method checks that given index is available in array or not 

console.log(myArr)



// we can also use join for joining the two array 
// ex. of joining two arrays : const newArray = myArr.join()

// slice & splice 

const myNewArr = myArr.slice(1,3) // Aa method ma myArr array ni slice padi jaashe and aema index 1,2 print thashe 
//when i declare new array after use of the Slice 
const arrAfterSlice = myArr
console.log(arrAfterSlice)  // here 1 2 sivaay badhi j value print thashe 


const myNewArr2 = myArr.splice(1,3) //  it will print  1 2 3







// array part-2 

 const mcu = ["ironman" , "thor" , "spiderman"]
 const dc = ["superman" , "batman" , "flash"]

 // here we are check that how  to "join two arrays""

 const newPushArray = mcu.push(dc)
 console.log(newPushArray)
//output : ["ironman" , "thor" , "spiderman", ["superman" , "batman" , "flash"]]

const newConcateArray = mcu.concat(dc)
console.log(newConcateArray)
//output : ["ironman" , "thor" , "spiderman", "superman" , "batman" , "flash"]

const newSpradeArray = [...mcu,...dc]  // this is a sprade method to join two arrays..this metod is most prefered
console.log(newSpradeArray)
//output : ["ironman" , "thor" , "spiderman", "superman" , "batman" , "flash"]



// flat array 

const myArr3 = [1,2,3,[4,5],6,[7,[6,8]]]  
// if we want to create a flat array then....
const flatArray = myArr3.flat(1)  // in this method parameter we can be use the value in which depth we want to print flatted array
console.log(flatArray)


//create array from given value 

console.log(Array.from("Yash")) // output : ["Y","a","s","h"]
