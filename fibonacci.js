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

// take a fibonacci number and return its index - if it's 0 or 1 we return that same value

const fibonacciNumLoop = (n) => {
  // if (n <= -1) {
  //   console.error('No negative number inputs please.');
  // }
  if (n === 0 || n === 1) {
    return n;
  }

  let a = 0;
  let b = 1;
  let c = 1;
  let result = 1;

  while (c < n) {
    c = a + b;
    a = b;
    b = c;
    result += 1;
  }

  return result;
};

// console.log(fibonacciNumLoop(-1));

exports.fibonacciIndexLoop = fibonacciIndexLoop;
exports.fibonacciNumLoop = fibonacciNumLoop;
