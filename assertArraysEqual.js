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
    console.log("🟢 Assertion Passed");
  } else {
    console.log("🔴 Assertion Failed");
  }

};

// TEST CODE
assertArraysEqual([1, 1, 3], [1, 2, 3]); // false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual([1, 4, 3], [1, 2, 3]); // false
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // false

