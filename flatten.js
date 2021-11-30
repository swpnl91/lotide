/*const eqArrays = function(arr1, arr2) {
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


const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log("🟢 Assertion Passed");
  } else {
    console.log("🔴 Assertion Failed");
  }

}; */

const flatten = function(arr) {
  let ans = [];
  let nest = [];

  for (i = 0; i < arr.length; i++) {
    nest = arr[i];
    if (Array.isArray(nest)) {
      
      for (j = 0; j < nest.length; j++) {
        ans.push(nest[j]);
      }
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
};

module.exports = flatten;


/*console.log(flatten([[1, 2], [3, 4], 5, [6], [7,7]]));*/