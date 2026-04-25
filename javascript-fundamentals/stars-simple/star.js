for (let i = 5; i >= 1; i--) {
    console.log("* ".repeat(i));
}
// Others 
const message = 'Hamed';

for (let i = 0;i < message.length; i++){
    let codePoint = message.codePointAt(i);
    console.log(codePoint)
}

let fname = 'Hamed';
let lname = 'Hussein';


let name = fname.padEnd(6)+lname ;
console.log(name)
console.log(`the last character of fname is ${fname[fname.length-1]}`)