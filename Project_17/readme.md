Simple Promise-based Division Project

This is a small JavaScript project that demonstrates how to use **Promises** for performing division. The idea is simple: divide two numbers, and handle the case where division by zero occurs.

It's a beginner-friendly example to understand how async operations and error handling work in JavaScript.

---

Project Structure

```
├── index.html
├── style.css
└── script.js
```

---

Concepts Used

- JavaScript Promises
- Arrow Functions
- Basic Error Handling
- Array iteration using `forEach`

---

How It Works

- A function `divideNumbers(a, b)` returns a Promise
- If `b === 0`, the Promise is rejected with an error
- Otherwise, the Promise resolves with the division result
- Multiple test cases are stored in an array
- Each test case is executed and logged in the console

Code Overview

### HTML (`index.html`)

A basic HTML structure that includes:

- A simple image container
- A link to the CSS file
- A script file for JavaScript logic

### CSS (`style.css`)

Includes a simple reset:

- Removes default margin and padding
- Uses `box-sizing: border-box`

JavaScript (`script.js`)

Handles the main logic:

- Creates a Promise-based division function
- Runs test cases using a loop
- Uses `.then()` for success
- Uses `.catch()` for handling errors

---

Example Output (Console)

```
Case 1: 10/2 = 5
Case 2: 20/4 = 5
Case 3: 15/3 = 5
Case 4: 8/2 = 4
Case 5: Cannot divide by zero
```

---

How to Run

1. Download or clone the project
2. Open `index.html` in your browser
3. Open Developer Tools (Inspect → Console)
4. View the output
