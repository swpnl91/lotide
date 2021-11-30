/*const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const eqArrays = function(arr1, arr2) {
  let bool = true;
  if (arr1.length !== arr2.length) {
    bool = false; 
    return bool;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      bool = false;
      return bool;    // Exits function the moment bool is false 
    }
  }
  return bool;  //bool is true by default
};


// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: Actual: ${actual}, Expected: ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: Actual: ${actual}, Expected: ${expected}`);
  }

}; */

const takeUntil = function(array, callback) {

  const results = [];

  for (let item of array) {
    if (callback(item)) {
        return results;
    } else {
       results.push(item);
    }
  }
  return results;
};

module.exports = takeUntil;


/*
const results1 = takeUntil (data1, element => (element < 0));
const results2 = takeUntil (data2, element => (element === ','));

//console.log(results1);
//console.log(results2);


assertArraysEqual ([ 1, 2, 5, 7, 2 ], results1);
assertArraysEqual ([ 'I\'ve', 'been', 'to', 'Hollywood' ], results2);  */