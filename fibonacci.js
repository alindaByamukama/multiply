// add two numbers in a loop - reassign each item with the next value

const fibonacci = (n) => {
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

exports.fibonacci = fibonacci;
