// Create a new Map
const myMap = new Map();

// 1. set(key, value)
myMap.set('name', 'Hamed');
myMap.set('age', 18);
myMap.set(1, 'One'); 

console.log(myMap);


// 2. get(key)
console.log(myMap.get('name')); 
console.log(myMap.get('age')); 
console.log(myMap.get(1)); 
console.log(myMap.get('invalidKey')); 

// 3. has(key)
console.log(myMap.has('name'));
console.log(myMap.has('address')); 
console.log(myMap.has(1)); 

// 4. delete(key)
myMap.delete('age');
console.log(myMap.has('age')); 
console.log(myMap);

// 5. clear()
myMap.clear();
console.log(myMap); // Output: Map {}

console.log(myMap.size); 

myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap.size); 
console.log(myMap);