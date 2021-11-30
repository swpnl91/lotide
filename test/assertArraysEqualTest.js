
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


describe("#assertArraysEqual", () => {
  
  it("returns false for [1, 1, 3], [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual([1, 1, 3], [1, 2, 3]), false);
  });

  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); 
  });

}); 



