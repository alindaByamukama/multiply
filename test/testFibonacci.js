//   F(n) = F(n-1) + F(n-2), where F(0) = 0, F(1) = 1
// find a fibonacci number under the given index

const { assert } = require('chai');
const { it } = require('mocha');
const { fibonacciIndexLoop } = require('../fibonacci');
const { fibonacciNumLoop } = require('../fibonacci');

describe('Test our fibonacci index function', () => {
  it('fails if index o is not equal to 0', () => {
    assert.notEqual(fibonacciIndexLoop(0), 0);
  });

  it('fails if index 1 is not equal to 1', () => {
    assert.notEqual(fibonacciIndexLoop(1), 1);
  });

  it('succeeds if index 2 is sum of previous two indices', () => {
    assert.equal(fibonacciIndexLoop(2), 1);
  });
});

// find the index of a given fibonacci number in a sequence

describe('Test our fibonacci number function', () => {
//   it('fails if value is less than 0', () => {
//     assert.notEqual(fibonacciNumLoop(-1), 1);
//   });
  it('fails if value 0 does not return index 0', () => {
    assert.notEqual(fibonacciNumLoop(0), 0);
  });

  it('succeeds if value 1 does not return index 1', () => {
    assert.equal(fibonacciNumLoop(1), 1);
  });

  it('succeeds if value 55 returns index 10', () => {
    assert.equal(fibonacciNumLoop(55), 10);
  });
});
