function factorialize(num) {
  // create a variable result to store num
  let result = num;

  // if num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) {
    return 1;
  }

  // this is the while loop
  while (num > 1) {
    let whileNum = num;
    whileNum -= 1;
    result *= whileNum;
  }

  return result;
}

exports.factorialize = factorialize;
