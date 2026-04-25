// Old way
function fn(a,b){
    return a+b;
}
console.log(fn(2,5));

// New ES6+ way
let fun = (a,b) => {
   return a+b
}
console.log(fun(1,2));

// Function to return big number

let check = (num1 = 5, num2 = 3) =>{
    if(num1 > num2){
        return num1 +` is the biggest`
    }
    else{
        return num2 + ` is the biggest`
    }
}
console.log(check())
// JavaScript closure
function outerFun() {
let x = 10;
function innerFun() {
let y= 20;
console.log(x+y);
}
return innerFun;
}
