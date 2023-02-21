const { assert } = require('chai');
const { factorialize } = require('../factorial');

describe('Test our factorial function', () => {
  it('fails if integer is a decimal', () => {
    assert.equal(factorialize(0.75), 'integer must be a whole number');
  });

  it('fails if integer is a negative number', () => {
    assert.equal(factorialize(-1), 'integer must be a positve number');
  });

  it('factorial 0 returns 1', () => {
    assert.equal(factorialize(0), 1);
  });

  it('factorial 1 returns 1', () => {
    assert.equal(factorialize(1), 1);
  });

  it('factorial 5 returns 120', () => {
    assert.equal(factorialize(5), 120);
  });
});
