In JavaScript, "maps" can refer to three distinct concepts: a data structure for storing key-value pairs, a method for transforming arrays, or libraries for rendering geographic maps.

# 1. The Map Object (Data Structure)
A Map is a collection of key-value pairs where keys can be of any data type, including objects and functions.

Key Features: It remembers the original insertion order of keys and provides a size property for easy counting.

Common Methods:
### set(key, value): Adds or updates an element.

### get(key): Retrieves the value associated with the key.

### has(key): Returns true if the key exists.

### delete(key): Removes a specific element.

# 2. The .map() Method (Array Transformation)

The .map() method creates a new array by calling a provided function on every element in the calling array 

.
Usage: It is primarily used to transform data without modifying the original array 

.
Example: const doubled = numbers.map(num => num * 2); 

.
# The Map Object

A JavaScript Map is an object that can store collections of key-value pairs, similar to a dictionary in other programming languages.


### Maps differ from standard objects in that keys can be of any data type.

# Map Characteristics
## Key Types
Map keys can be any type (strings, numbers, objects, etc).

### Insertion Order
The Map remembers the original insertion order of the keys.

### Size
The number of items in a Map is easily retrieved using the size property.

### Performance
Maps are optimized for frequent additions and removals of key-value pairs.

### Iteration
Maps are iterable, allowing for direct use of for...of loops or methods like forEach().


### Iteration Order
The original order is preserved during iteration.


- Maps are similar to both Objects (unique key/value collection) and Arrays (ordered values collection).

- But if you look close, Maps are most similar to Objects.

# How to Create a Map
You create a JavaScript Map by:

Create a new Map and add elements with Map.set()
Passing an existing Array to the new Map() constructor
Examples
Create a new Map and add elements with Map.set()
```
// Create an empty Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
Pass an Array to the new Map() constructor:
```
```
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
```
## Adding Map Values
You can add elements to a Map with the set() method:

Example
```
fruits.set("mangos", 100);
Changing Map Values
The set() method can also be used to change existing Map values:

Example
fruits.set("apples", 200);
The get() Method
The get() method gets the value of a key in a Map:

Example
fruits.get("apples");    // Returns 500


Maps are Objects
Example
// Returns object:
typeof fruits;
instanceof Map returns true:

Example
// Returns true:
fruits instanceof Map;
```