const eqArrays = require('./eqArrays');


// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    return true; //console.log("🟢 Assertion Passed");
  } else {
    return false; //console.log("🔴 Assertion Failed");
  }

};

module.exports = assertArraysEqual;


