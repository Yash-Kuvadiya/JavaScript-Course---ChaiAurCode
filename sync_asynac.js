// syncronous programming :

console.log("Hello");
console.log("Hello2");
console.log("Hello3");

// Asyncronous Programming:

console.log("Start...");
setTimeout(function(){
    console.log("After 3 Sec...");
},3000)
console.log("End...");