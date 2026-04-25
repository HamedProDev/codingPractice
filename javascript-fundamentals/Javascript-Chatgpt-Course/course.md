# 🚀 Async Arrow Functions & Async/Await in JavaScript

This lesson explains async arrow functions and async/await from beginner to advanced level with clear examples.

---

# 1. What is `async`?

When you add `async` before a function, it means:

> The function always returns a Promise.

### Example

```javascript
const greet = async () => {
    return "Hello";
};
```

Even though it returns a string, JavaScript converts it into:

```javascript
Promise.resolve("Hello")
```

---

# 2. What is `await`?

`await` pauses execution until a Promise is resolved.

👉 You can only use `await` inside an `async` function.

### Example

```javascript
const fetchData = async () => {
    let data = await fetch("https://api.example.com");
    let result = await data.json();
    console.log(result);
};
```

---

# 3. Basic Async Arrow Function

```javascript
const fetchData = async () => {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
};
```

### Step-by-step

1. Function starts
2. fetch() sends request
3. await pauses execution
4. response is received
5. JSON is parsed
6. data is printed

---

# 4. Async vs .then()

### Old way

```javascript
fetch("url")
    .then(res => res.json())
    .then(data => console.log(data));
```

### Modern way

```javascript
const load = async () => {
    const res = await fetch("url");
    const data = await res.json();
    console.log(data);
};
```

👉 Async/await is cleaner and easier to read.

---

# 5. Error Handling

Use `try...catch` to avoid crashes.

```javascript
const load = async () => {
    try {
        const res = await fetch("url");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
};
```

---

# 6. Forms of Async Arrow Functions

### No parameters

```javascript
const run = async () => {
    return 10;
};
```

### With parameters

```javascript
const add = async (a, b) => a + b;
```

### Multi-line

```javascript
const process = async (x) => {
    let y = x * 2;
    return y;
};
```

---

# 7. Creating Delay (Promise + await)

```javascript
const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const run = async () => {
    console.log("Start");
    await wait(2000);
    console.log("After 2 seconds");
};

run();
```

---

# 8. Parallel Execution (IMPORTANT)

### Slow (sequential)

```javascript
await task1();
await task2();
```

### Fast (parallel)

```javascript
await Promise.all([task1(), task2()]);
```

---

# 9. Async in Arrays

### Wrong way

```javascript
arr.map(async x => x * 2);
```

### Correct way

```javascript
const results = await Promise.all(
    arr.map(async x => x * 2)
);
```

---

# 10. Real API Example

```javascript
const getUsers = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();

        return users.map(user => user.name);
    } catch (err) {
        console.log(err);
    }
};

getUsers().then(names => console.log(names));
```

---

# 11. Mental Model

* `async` → function takes time
* `await` → wait until task finishes

Think of it like:

> "Pause here until result is ready"

---

# 12. Common Mistakes

❌ Missing await

```javascript
const data = fetch("url");
```

❌ Using await outside async

```javascript
await fetch("url");
```

❌ No error handling

---

# 13. Advanced Tip

```javascript
const fn = async () => await something();
```

👉 But often `return await` is unnecessary unless using try/catch.

---

# 🚀 Practice Tasks

1. Create async function that waits 3 seconds
2. Fetch API data and print it
3. Run multiple async tasks using Promise.all
4. Build mini user loader system

---

# 🎯 End of Lesson

You now understand:

* async functions
* await keyword
* Promises
* real-world API usage
* performance optimization

Keep practicing until it becomes natural 🔥

