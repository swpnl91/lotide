const letterPositions = function(sentence) {
  const results = {};
  let final = [];
  for (let i = 0; i < sentence.length; i++) { 
    //console.log(sentence[i]);
    if (sentence[i] === " ") { // To take care of spaces
      i++;
    } else {
      if (results[sentence[i]]) {   // results[sentence[i]] returns falsy if key doesn't exist
          results[sentence[i]].push(i);  // pushes the index to the existing array for the value of key
          //console.log("true");
      } else {
          results[sentence[i]] = [i];  // creates a new array as value for the key and adds the index
          //console.log("false");
        }

    }
  }
  //console.log(results);
return results;
};


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
//{h:[0], e:[1], l:[2, 3], o:[4]}
//console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
