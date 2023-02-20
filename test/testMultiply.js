const { assert } = require('chai');
const { multiply } = require('../multiply');

describe('Test our multiply function', () => {
  const a = 2;
  const b = 3;
  const c = a * b;

  it('check that a is a number', () => {
    assert.isNumber(a);
  });

  it('check that b is a number', () => {
    assert.isNumber(b);
  });

  it('check that c is equal to a * b', () => {
    assert.isTrue(c);
  });
});
