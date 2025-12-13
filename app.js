// console.log(global);     //global is not under v8 engine
// console.log(this);       //Empty Object
// console.log(globalThis);     //Standard

// console.log(globalThis===global);        //true


const add=require("./sum");
const test=require("./testing")
// const {calculateSum,x}=require("./testing")      //Avoid if x is more than 1 time in the program


add(1,2)

const x=100

console.log(test.x);

// console.log("Imported x: ",x)   // It will give an error to avoid this i don't have to destructure on the fly
console.log(x);
