// add two numbers in a loop - reassign each item with the next value

const fibonacciIndexLoop = (n) => {
  let a = 0;
  let b = 1;
  let c = n;

  for (let index = 2; index <= n; index += 1) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};

// take a number and return its index - if it's 0 or 1 we return that same value

const fibonacciNumLoop = (n) => {
  if (n <= 1) {
    return n;
  }

  let a = 0;
  let b = 1;
  let c = n;
  let result = 1;

  while (c < n) {
    c = a + b;
    a = b;
    b = c;
    result += 1;
  }

  return result;
};

exports.fibonacciIndexLoop = fibonacciIndexLoop;
exports.fibonacciNumLoop = fibonacciNumLoop;
