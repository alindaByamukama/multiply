const { assert } = require('chai');
const { multiply } = require('../multiply');

describe('Test our multiply function', () => {
  it('our failing test', () => {
    assert.equal(multiply(1, 1), 1);
  });

  it('2 multiplied by 2 == 4', () => {
    assert.equal(multiply(2, 2), 4);
  });

  it('3 multiplied by 3 == 9', () => {
    assert.equal(multiply(3, 3), 9);
  });
    
  it('4 multiplied by 4 == 16', () => {
    assert.equal(multiply(4, 4), 16);
  });
    
  it('23 multiplied 45 == 23 * 45 (1035)', () => {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});
