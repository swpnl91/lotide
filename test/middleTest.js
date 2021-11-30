
const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });

});

