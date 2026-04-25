# JavaScript Map


A JavaScript `Map` holds key-value pairs and is similar to a HashMap or Dictionary in other languages.

## Key Features

- Preserves the original insertion order.
- Supports any data type (objects, primitives, functions) as keys or values.
- Uses hashing internally → average time complexity is **O(1)** for:
  - Insert
  - Delete
  - Search
- Only **unique keys** are allowed.
  - Adding the same key again overwrites the previous value.
- Recommended over objects when frequent insertions and deletions are needed.

---

## Creating a Map

### 1. Using the `Map()` constructor

```js
let myMap = new Map();

let anotherMap = new Map([
    ['name', 'GFG'],
    ['age', 30],
    ['city', 'Noida']
]);

console.log(anotherMap);