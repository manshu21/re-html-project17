**_Promise-Based Divide Function_**

This is a small JavaScript project that demonstrates how to use Promises for handling asynchronous operations. The main functionality of this project is to divide two numbers and handle possible errors, such as division by zero.

**_Overview_**

The project uses a function that returns a Promise. If the division is valid, the Promise is resolved with the result. If the divisor is zero, the Promise is rejected with an error message.

Multiple test cases are used to check both successful and error scenarios, and the results are displayed in the browser console.

**_Files Included_**
1.index.html – Basic HTML structure with an image and script link
2.style.css – Basic CSS reset and styling
3.script.js – Contains the main logic for the Promise-based division

**_How It Works_**
1.A function divideNumbers(a, b) is created using an arrow function
2.It returns a Promise:
3.If b is 0, the Promise is rejected
Otherwise, it resolves with the division result
4.An array of test cases is defined
5.Each test case is executed using a loop
6.Results are handled using .then() and .catch() and printed in the console

**_How to Run_**
1.Download or copy all project files into one folder
2.Make sure the file structure is correct
3.Open index.html in any browser
4.Open the browser console to view the output

**_Example Output_**
Case 1: 10/2 = 5
Case 2: 20/5 = 4
Case 3: 15/3 = 5
Case 4: 8/4 = 2
Case 5: Error: Division by zero is not allowed
