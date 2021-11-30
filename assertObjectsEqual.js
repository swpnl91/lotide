
/*
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const key of arr1) {
      if (Array.isArray(object1[key])) {
          if (!eqArrays(object1[key], object2[key])) {
            return false;
          }
        } else if (object1[key] !== object2[key]) {
           return false;    
        } 
      }
   return true;   
};  */

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;    // Importing uitl library's inspect function
    if (eqObjects(actual, expected)) {
      console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};

module.exports = assertObjectsEqual;


/*

let ab = { a: '1', b: 2 };
let ba = { b: 2, a: '1' };

assertObjectsEqual(ab, ba);   */
