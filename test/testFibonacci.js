//   F(n) = F(n-1) + F(n-2), where F(0) = 0, F(1) = 1
// find a fibonacci number under the given index

const { assert } = require('chai');
const { it } = require('mocha');
const { fibonacci } = require('../fibonacci');

describe('Test our multiply function', () => {
  it('fails if index o is not equal to 0', () => {
    assert.notEqual(fibonacci(0), 0);
  });

  it('fails if index 1 is not equal to 1', () => {
    assert.notEqual(fibonacci(1), 1);
  });

  it('succeeds if index 2 is sum of previous two indices', () => {
    assert.equal(fibonacci(2), 1);
  });
});
