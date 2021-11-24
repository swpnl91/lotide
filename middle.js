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



const middle = function(arr) {

  let midArr = [];
  let midpt = Math.floor(arr.length / 2);  // to find the midpoint of an array

  if (arr.length === 1 || arr.length === 2) {   // Takes care of empty arrays and single element arrays
    return midArr; 
  } else if (arr.length % 2 === 0) {    // for arrays with even number of elements
    midArr.push(arr[midpt - 1]);
    midArr.push(arr[midpt]);
  } else if (arr.length % 2 !== 0) {   // for arrays with odd no. of elements
    midArr.push(arr[midpt]);
  } else {
    midArr = midArr;
  }

  return midArr;

}

console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));