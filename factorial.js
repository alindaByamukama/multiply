const factorialize = (num) => {
  // create a variable result to store num
  let result = num;

  // if num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) {
    return 1;
  }

  // this is the while loop that decrements the integer by 1
  // and multiplies the decrement with the result variable
  // so long as the integer is greater than 1

  while (num > 1) {
    // eslint no-param-reassign: "error" suggested solution does not work =\
    num -= 1;
    result *= num;
  }

  // returns the factorial of the integer provided
  return result;
};

// returns 1
// console.log(factorialize(0));
// console.log(factorialize(1));
// returns 120
// console.log(factorialize(5));

exports.factorialize = factorialize;
