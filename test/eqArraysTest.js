const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  
  it("returns false for [1, 1, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 1, 3], [1, 2, 3]), false);
  });

  it("returns false for [1, 2, 3], [1, 2, 3, 4]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });

  it("returns true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

}); 






