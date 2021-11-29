
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

}; 

// For handling arrays within arrays (sub-arrays)

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { 
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
            return false;
      }
    } else if (arr1[i] !== arr2[i]) {
        return false;    // Exits function the moment it is false 
      }
  }
  return true;  // returns true by default
};


console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]));  // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false




// For handling normal arrays

/*

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { 
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;    // Exits function the moment it is false 
    }
  }
  return true;  // returns true by default
};

//eqArrays([1, 1, 3], [1, 2, 3])
//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false

//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 1, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);
assertEqual(eqArrays([1, 4, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); */