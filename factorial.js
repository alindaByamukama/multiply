function factorialize(num) {
  // create a variable result to store num
  let result = num;

  // if num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) {
    return 1;
  }

  // this is the while loop that decrement the integer by 1
  // and multiplies the decrement with the result variable

  while (num > 1) {
    // there is an error here that causes problems in the solution if 'fixed' according to eslint
    num -= 1;
    result *= num;
  }

  // returns the factorial of the integer provided
  return result;
}

// console.log(factorialize(0));
// console.log(factorialize(5));

exports.factorialize = factorialize;
