const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["Harry", "Ron", "Hermione", "Hagrid", "Tom"];

//const results1 = map (words, word => word[0]);
//didn't work maybe because the function is supposed to be declared first. Worked if put at the end

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map (words, word => word[0]); // as it works after you change its position
const results2 = map (words2, word => word[0]);


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

};

assertArraysEqual (['g', 'c', 't', 'm', 't'], results1);
assertArraysEqual (['H', 'R', 'H', 'H', 'T'], results2);
