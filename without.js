
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



const words = ["hello", "world", "lighthouse"];


const without = function(arr1, arr2) {
  let ans = [];
    for (i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        ans.push(arr1[i]);;
      } else {
        ans = ans;
      }
    }
  console.log(ans);
}



// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log("🟢 Assertion Passed");
  } else {
    console.log("🔴 Assertion Failed");
  }

};

//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
 without(words, ["lighthouse"]);// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
 assertArraysEqual(words, ["hello", "world", "lighthouse"]);