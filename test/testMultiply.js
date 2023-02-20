const { assert } = require('chai');
const { multiply } = require('../multiply');

describe('Test our multiply function', () => {
  it('our failing test', () => {
    assert.equal(multiply(1, 1), 1);
  });

  it('2 multiplied by 2 == 4', () => {
    assert.equal(multiply(2, 2), 4);
  });
});
