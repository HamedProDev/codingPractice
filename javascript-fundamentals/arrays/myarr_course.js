

let new_arr = new Array('jar','cpp','js','py');
console.log(new_arr);

 new_arr[new_arr.length-1] = 'obj';
console.log(new_arr);

 new_arr.push('vue'); // Add at ending
 new_arr.unshift('yarn'); // add at beginning
console.log(new_arr);

 new_arr.splice(1,3);
 
 new_arr.length = 10;
console.log(new_arr);

 for(x=0; x< new_arr.length ; x++){
    console.log(`This loop will repeate ${new_arr.length} times`)
}

new_str = new_arr.toString()
console.log(new_str)

console.log(Array.isArray(new_arr)); // Way to check for Array

console.log(typeof(new_str))


