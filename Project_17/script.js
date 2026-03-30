// arrow function returning a Promise
const divideNumbers = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Error: Division by zero is not allowed");
    } else {
      resolve(a / b);
    }
  });
};

// dummy test cases (at least 5)
const testCases = [
  [10, 2],
  [20, 5],
  [15, 3],
  [8, 4],
  [9, 0], // error case
];

testCases.forEach((test, index) => {
  const a = test[0];
  const b = test[1];

  divideNumbers(a, b)
    .then(function (result) {
      console.log("Case " + (index + 1) + ": " + a + "/" + b + " = " + result);
    })
    .catch(function (error) {
      console.log("Case " + (index + 1) + ": " + error);
    });
});
