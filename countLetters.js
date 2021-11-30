/*const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};*/


const countLetters = function(str) {

  let results = {};     // An empty object;
  for (let char of str) {   // looping through the passed string
    if (char !== " ") {    // ignoring spaces
      if (results[char]) {   // checkig if the character exists as a key with value as true or not
        results[char] += 1;    // incrementing 1 if yes 
      } else {
        results[char] = 1;       // assigned 1 if it occurs and not present in the object 
      }
    }
  }
  return results;
}

module.exports = countLetters;

/*
let obj = countLetters("lighthouse in the house");

assertEqual(obj["l"], 1);
assertEqual(obj["h"], 4);
assertEqual(obj["t"], 2);
assertEqual(obj["s"], 2);

countLetters("lighthouse in the house");*/
