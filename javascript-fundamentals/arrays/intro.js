// An array is:

// A list of values stored in order, indexed from 0.

let arr1 = [10, 20, 30];

/* Memory idea:

index:  0   1   2
value: 10  20  30

*/

// Access:

arr[0] // 10

/* Arrays in JS:

are objects
store references
can hold mixed types

*/

let arr = [10, "hi", true, {name: "Hamed"}];

//  2. ADD / REMOVE ELEMENTS

arr.push(40);     // add at end
arr.unshift(5);   // add at start

arr.pop();        // remove last
arr.shift();      // remove first

// push/pop → FAST
// shift/unshift → SLOW (reindexes everything)

// 3. LOOPING ARRAYS (VERY IMPORTANT)



for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Use when:

// you need index
// you need control



// for...of
for (let val of arr) {
    console.log(val);
}
//Cleaner, but no index.


// forEach
arr.forEach(x => console.log(x));

// Cannot break or return


// 4. MOST IMPORTANT METHODS (CORE)

//  1.map (transform)
let nums1 = [1,2,3];

let doubled = nums1.map(x => x * 2);
// [2,4,6]
//  Always returns new array

// 2.filter (select)
let nums2 = [1,2,3,4];

let even = nums2.filter(x => x % 2 === 0);
// [2,4]


// 3.reduce (MASTER LEVEL)
let nums3 = [1,2,3];

let sum = nums3.reduce((acc, val) => acc + val, 0);


// 5. SEARCHING METHODS
arr.includes(10)
arr.indexOf(10)
arr.find(x => x > 5)
arr.findIndex(x => x > 5)

/* Difference

find → returns value
findIndex → returns index

*/

// 6. SLICE vs SPLICE (VERY IMPORTANT)

// slice (safe copy)
arr.slice(1, 3);
// 👉 does NOT change original

// splice (dangerous)
arr.splice(1, 2);
// 👉 modifies original


// 7. SORTING (TRICKY)
[10, 2, 5].sort(); // WRONG
// 👉 JS sorts as strings

// ✅ Correct:
arr.sort((a, b) => a - b); // ascending
arr.sort((a, b) => b - a); // descending


// 8. COPYING ARRAYS (CRITICAL)
let copy = [...arr];

//This is shallow copy

// Problem:
let A = [{x:1}];
let B = [...A];

B[0].x = 10;

//👉 a also changes 😳

// 9. FLATTENING
[1,[2,3]].flat(); // [1,2,3]

// 10. ARRAY DESTRUCTURING
let [B,C] = [10, 20];

// Swap trick 🔥
[B,C] = [C, B];

// 11. PRO HACKS (IMPORTANT)
// Remove duplicates
let unique = [...new Set(arr)];
// Get max/min
Math.max(...arr)
Math.min(...arr)
// Sum quickly
arr.reduce((a,b) => a + b, 0)
// Merge arrays
let merged = [...a, ...b];
// Check if array
Array.isArray(arr)
//12. ADVANCED METHODS (PRO LEVEL)
arr.every(x => x > 0)
arr.some(x => x > 0)
//every → all must pass
//some → at least one

// flatMap
arr.flatMap(x => [x, x*2]);