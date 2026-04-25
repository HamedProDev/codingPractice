# JavaScript Array Methods

## 1. JavaScript Array `length`

The `length` property of an array returns the number of elements in the array. It automatically updates as elements are added or removed.

```javascript
let a = ["HTML", "CSS", "JS", "React"];
console.log(a.length);
```

**Output**

```
4
```

**Explanation**
The array `a` contains four elements. The `length` property returns the total count of elements.

---

## 2. JavaScript Array `toString()` Method

The `toString()` method converts the array into a string, with elements separated by commas.

```javascript
let a  = ["HTML", "CSS", "JS", "React"];
let s = a.toString();
console.log(s);
```

**Output**

```
HTML,CSS,JS,React
```

**Explanation**
The array is converted into a comma-separated string.

---

## 3. JavaScript Array `join()` Method

The `join()` method creates a string by joining all elements using a specified separator.

```javascript
let a = ["HTML", "CSS", "JS", "React"];
console.log(a.join('|'));
```

**Output**

```
HTML|CSS|JS|React
```

**Explanation**
The elements are joined into a string separated by `|`.

---

## 4. JavaScript `delete` Operator

The `delete` operator removes a property from an object.

```javascript
let emp = { 
    firstName: "Riya", 
    lastName: "Kaur", 
    salary: 40000
};

console.log(delete emp.salary); 
console.log(emp);
```

**Output**

```
true
{ firstName: 'Riya', lastName: 'Kaur' }
```

**Explanation**
The `salary` property is removed from the object.

---

## 5. JavaScript Array `concat()` Method

The `concat()` method merges multiple arrays into a new array.

```javascript
let a1 = [11, 12, 13];
let a2 = [14, 15, 16];
let a3 = [17, 18, 19];

let newArr = a1.concat(a2, a3);
console.log(newArr);
```

**Output**

```
[11, 12, 13, 14, 15, 16, 17, 18, 19]
```

**Explanation**
Arrays are combined into a single array while preserving order.

---

## 6. JavaScript Array `flat()` Method

The `flat()` method flattens nested arrays.

```javascript
const a1 = [['1', '2'], ['3', '4', '5',['6'], '7']];
const a2 = a1.flat(Infinity);
console.log(a2);
```

**Output**

```
['1', '2', '3', '4', '5', '6', '7']
```

**Explanation**
All nested arrays are flattened into one level.

---

## 7. JavaScript Array `push()` Method

Adds elements to the end of an array.

```javascript
let a = [10, 20, 30, 40, 50];
a.push(60);
a.push(70, 80, 90);
console.log(a);
```

**Output**

```
[10, 20, 30, 40, 50, 60, 70, 80, 90]
```

---

## 8. JavaScript Array `unshift()` Method

Adds elements to the beginning of an array.

```javascript
let a = [20, 30, 40];
a.unshift(10, 20);
console.log(a);
```

**Output**

```
[10, 20, 20, 30, 40]
```

---

## 9. JavaScript Array `pop()` Method

Removes the last element from an array.

```javascript
let a = [20, 30, 40, 50];
a.pop();
console.log(a);
```

**Output**

```
[20, 30, 40]
```

---

## 10. JavaScript Array `shift()` Method

Removes the first element from an array.

```javascript
let a = [20, 30, 40, 50];
a.shift();
console.log(a);
```

**Output**

```
[30, 40, 50]
```

---

## 11. JavaScript Array `splice()` Method

Used to insert or remove elements within an array.

```javascript
let a = [20, 30, 40, 50];
a.splice(1, 3);
a.splice(1, 0, 3, 4, 5);
console.log(a);
```

**Output**

```
[20, 3, 4, 5]
```

**Explanation**

* First call removes 3 elements starting at index 1
* Second call inserts elements at index 1

---

## 12. JavaScript Array `slice()` Method

Returns a portion of an array without modifying the original.

```javascript
const a = [1, 2, 3, 4, 5];
const res = a.slice(1, 4);
console.log(res); 
console.log(a);
```

**Output**

```
[2, 3, 4]
[1, 2, 3, 4, 5]
```

**Explanation**
Extracts elements from index 1 to 3 (excluding 4).

---

## 13. JavaScript Array `some()` Method

Checks if at least one element satisfies a condition.

```javascript
const a = [1, 2, 3, 4, 5];
let res = a.some((val) => val > 4);
console.log(res);
```

**Output**

```
true
```

---

## 14. JavaScript Array `map()` Method

Creates a new array by applying a function to each element.

```javascript
let a = [4, 9, 16, 25];
let sub = a.map(geeks);

function geeks() {
    return a.map(Math.sqrt);
}
console.log(sub);
```

**Output**

```
[ [2, 3, 4, 5], [2, 3, 4, 5], [2, 3, 4, 5], [2, 3, 4, 5] ]
```

**Explanation**
Each element returns the result of mapping square roots over the entire array, producing nested arrays.

---

## 15. JavaScript Array `filter()` Method

Creates a new array with elements that pass a test.

```javascript
let a1 = [1, 2, 3, 4, 5];
let a2 = a1.filter((num) => num > 1);
console.log(a2);
```

**Output**

```
[2, 3, 4, 5]
```

---

## 16. JavaScript Array `reduce()` Method

Reduces an array to a single value.

```javascript
let a = [88, 50, 25, 10];
let sub = a.reduce(geeks);

function geeks(tot, num) {
    return tot - num;
}
console.log(sub);
```

**Output**

```
3
```

**Explanation**
Performs: `88 - 50 - 25 - 10`.

---

## 17. JavaScript Array `reverse()` Method

Reverses the array in place.

```javascript
let a = [1, 2, 3, 4, 5];
a.reverse();
console.log(a);
```

**Output**

```
[5, 4, 3, 2, 1]
```

---

## 18. JavaScript Array `values()` Method

Returns an iterator of array values.

```javascript
const a = ["Apple", "Banana", "Cherry"];
const res = a.values();

for (const value of res) {
    console.log(value);
}
```

**Output**

```
Apple
Banana
Cherry
```

**Explanation**
The iterator allows looping through each element using `for...of`.