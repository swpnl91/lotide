const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};



/*const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"*/

const findKey = function (obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {  // Remember that condition is checked with x.star and not x hence callback(obj[key]) and not callback(key)
        return key;
    }
  }
  return;
};


const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"




assertEqual(results1, "noma");
//assertEqual(1, 1);
//assertEqual(1, 11);
//assertEqual("Lighthouse Labs", "Lighthouse Labs");