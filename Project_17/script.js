// function to divide two numbers using Promise
const divideNumbers = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Cannot divide by zero");
      return;
    }

    const result = a / b;
    resolve(result);
  });
};

const testCases = [
  [10, 2],
  [20, 4],
  [15, 3],
  [8, 2],
  [9, 0],
];

// loop through all test cases
testCases.forEach((pair, i) => {
  const a = pair[0];
  const b = pair[1];

  divideNumbers(a, b)
    .then((res) => {
      console.log(`Case ${i + 1}: ${a}/${b} = ${res}`);
    })
    .catch((err) => {
      console.log(`Case ${i + 1}: ${err}`);
    });
});
