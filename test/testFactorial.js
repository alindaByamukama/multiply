const { assert } = require('chai');
const { factorialize } = require('../factorial');

describe('Test our factorial function', () => {
  it('factorial 0 returns 1', () => {
    assert.equal(factorialize(0), 1);
  });

  it('factorial 5 returns 120', () => {
    assert.equal(factorialize(5), 120);
  });
});
