const { assert } = require('chai');
const { multiply } = require('../multiply');

describe('Test our multiply function', () => {
  it('our failing test', () => {
    assert.equal(multiply(1, 1), 1);
  });
});
