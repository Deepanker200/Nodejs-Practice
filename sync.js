const fs=require("fs");
const https=require("https");

console.log("Hello World");


var a=15;
var b=20;


https.get("https://api.github.com/users/Deepanker200",(res)=>{
    console.log("Fetched Data Successfully");
})

setTimeout(()=>{
    console.log("setTimeout called after 5 seconds");
},5000)

fs.readFile("./data.txt","utf8",(err,data)=>{
    console.log("File Data: ",data);
})


function multiplyFn(x,y){
    const result=a*b;
    return result
}

var c=multiplyFn(a,b);
console.log("Multiplication: ",c);
