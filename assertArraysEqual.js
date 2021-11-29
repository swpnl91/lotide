const eqArrays = require('./eqArrays');


// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log("🟢 Assertion Passed");
  } else {
    console.log("🔴 Assertion Failed");
  }

};

module.exports = assertArraysEqual;


