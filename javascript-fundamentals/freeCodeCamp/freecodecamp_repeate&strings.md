# How Can You Repeat a String x Number of Times?
When working with JavaScript, you may encounter situations where you need to repeat a string a specific number of times.

## Whether you're generating repeated patterns or simply duplicating text, the repeat() method provides a simple and effective way to achieve this.

The repeat() method is a built-in function in JavaScript that allows you to repeat a string a specified number of times. Here is the basic syntax:

string.repeat(count);
string is the string that you want to repeat, and count is the number of times you want the string to be repeated. Here's an example:

```javascript

let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // "Hello!Hello!Hello!"
```

In this case, the string Hello! is repeated three times, resulting in Hello!Hello!Hello!.


While the repeat() method is useful, there are a few exceptions and limitations to keep in mind.

The count parameter must be a non-negative number. If you pass a negative number, JavaScript will throw a RangeError.
```javascript

let word = "Test";
console.log(word.repeat(-1));  // Throws RangeError: Invalid count value
```
The count must be a finite number. If you try to repeat a string an infinite number of times or use Infinity as the count, you will also get a RangeError.

**In JavaScript, Infinity is a special value that represents an infinite quantity. It's used to denote numbers that are larger than any finite number.**
```javascript

let word = "Test";
console.log(word.repeat(Infinity));  // Throws RangeError: Invalid count value
```
If the count is not an integer (such as a decimal like 2.5), the repeat() method will round it down to the nearest integer.
```javascript

let word = "Test";
console.log(word.repeat(2.5));  // "TestTest"
```
If you pass 0 as the count, the repeat() method will return an empty string.
```javascript

let word = "Test";
console.log(word.repeat(0));  // ""
```
The repeat() method can simplify tasks that involve string duplication, making your code more concise and readable.

Whether you're generating repeated text patterns or filling a space with characters, repeat() can save you from writing loops or more complex code.

You are not limited to passing a number directly into the repeat() method. You can also pass a variable that stores a number value.
```javascript

let count = 4;
let word = "Test";
let repeatedWord = word.repeat(count);
console.log(repeatedWord); // TestTestTestTest
```
In this example, the count variable stores the number of repetitions. This can be useful when the number of repetitions depends on user input or other dynamic values in your program.

# JavaScript Strings Review

## 1. String Basics

A string is a sequence of characters wrapped in single quotes, double quotes, or backticks.

Strings are **immutable**, meaning they cannot be changed after creation.

```javascript
let name = "Jessica";
```

---

## 2. Accessing Characters

You can access characters using bracket notation (index starts at 0).

```javascript
let developer = "Jessica";
console.log(developer[0]); // J
```

---

## 3. Newline Character (\n)

Used to create a new line inside a string.

```javascript
let poem = "Line1\nLine2";
console.log(poem);
```

---

## 4. Escaping Characters

Use backslash () to escape quotes.

```javascript
let statement = "She said, \"Hello!\"";
console.log(statement);
```

---

## 5. Template Literals

Use backticks (`) and allow string interpolation.

```javascript
let name = "Jessica";
let greeting = `Hello, ${name}!`;
console.log(greeting);
```

---

## 6. ASCII / Unicode

### charCodeAt()

Returns the character code.

```javascript
console.log("A".charCodeAt(0)); // 65
```

### fromCharCode()

Converts code to character.

```javascript
console.log(String.fromCharCode(65)); // A
```

---

## 7. indexOf()

Finds position of a substring.

```javascript
let text = "The quick brown fox";
console.log(text.indexOf("fox")); // 16
console.log(text.indexOf("cat")); // -1
```

---

## 8. includes()

Checks if a string contains a substring.

```javascript
console.log(text.includes("fox")); // true
console.log(text.includes("cat")); // false
```

---

## 9. slice()

Extracts part of a string.

```javascript
let text = "freeCodeCamp";
console.log(text.slice(0, 4)); // free
console.log(text.slice(-3)); // amp
```

---

## 10. Case Methods

### toUpperCase()

```javascript
console.log("hello".toUpperCase()); // HELLO
```

### toLowerCase()

```javascript
console.log("HELLO".toLowerCase()); // hello
```

---

## 11. replace() and replaceAll()

### replace()

```javascript
console.log("I like cats".replace("cats", "dogs"));
```

### replaceAll()

```javascript
console.log("cats cats".replaceAll("cats", "dogs"));
```

---

## 12. repeat()

Repeats a string.

```javascript
console.log("Hello".repeat(3)); // HelloHelloHello
```

---

## 13. trim Methods

### trim()

Removes both sides spaces.

```javascript
"  hello  ".trim();
```

### trimStart()

Removes left spaces.

### trimEnd()

Removes right spaces.

---

## 14. prompt()

Gets input from user.

```javascript
let answer = prompt("What's your name?");
```
# JavaScript Strings Quiz Answers

## 1. What is the return value for the `includes()` method?

**Answer:** If the substring is found within the string, the method returns true. Otherwise, it returns false.

---

## 2. Which option demonstrates string interpolation?

**Answer:** `Hello, ${user}!`

---

## 3. Which of the following options is the newline character?

**Answer:** \n

---

## 4. Which of the following statements is correct about strings?

**Answer:** Strings are immutable.

---

## 5. What does ASCII stand for?

**Answer:** American Standard Code for Information Interchange

---

## 6. Which method extracts a portion of a string and returns a new string?

**Answer:** slice()

---

## 7. What is the purpose of the prompt() method?

**Answer:** It displays a dialog box that waits for user input.

---

## 8. Correct way to access the third character of a string?

```javascript
const developer = "Jessica";
developer[2];
```

---

## 9. How to obtain ASCII value of first character in "hello"?

**Answer:** "hello".charCodeAt(0)

---

## 10. Method to obtain character from ASCII value?

**Answer:** fromCharCode()

---

## 11. Which indexOf logs -1?

```javascript
const organization = "freeCodeCamp";
console.log(organization.indexOf("c"));
```

**Answer:** This returns -1

---

## 12. How to check if "JavaScript" contains "Script"?

**Answer:** includes()

---

## 13. Extract "Script" from "JavaScript"?

**Answer:** "JavaScript".slice(4)

---

## 14. Convert "JavaScript" to uppercase?

**Answer:** toUpperCase()

---

## 15. Convert "JavaScript" to lowercase?

**Answer:** toLowerCase()

---

## 16. Replace "dogs" with "cats"?

**Answer:** replace()

---

## 17. Method used to repeat a string?

**Answer:** repeat()

---

## 18. What does "abc".repeat(3) return?

**Answer:** abcabcabc

---

## 19. Remove whitespace from both ends?

**Answer:** trim()

---

## 20. Correct escaping syntax?

**Answer:** "She said, "Hello!""
