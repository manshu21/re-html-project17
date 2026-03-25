// improved function with better error handling
const divideNumbers = (a, b) => {
  return new Promise((resolve, reject) => {
    // check if inputs are numbers
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Inputs must be valid numbers");
      return;
    }

    // check division by zero
    if (b === 0) {
      reject("Cannot divide by zero");
      return;
    }

    resolve(a / b);
  });
};

// async/await version
const divideNumbersAsync = async (a, b) => {
  try {
    const result = await divideNumbers(a, b);
    return result;
  } catch (error) {
    throw error;
  }
};

const testnum = [
  [10, 2],
  [9, 0],
  ["a", 2],
];

const runTests = async () => {
  for (let i = 0; i < testnum.length; i++) {
    const [a, b] = testnum[i];

    try {
      const res = await divideNumbersAsync(a, b);
      console.log(`Case ${i + 1}: ${a}/${b} = ${res}`);
    } catch (err) {
      console.log(`Case ${i + 1}: ${err}`);
    }
  }
};

runTests();
