/*const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

}; */

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
};*/


// For objects within objects (sub-objects)

const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  //let bool = true;
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const key of arr1) {
    if (!Array.isArray(object1[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (Array.isArray(object1[key])) {
            if (!eqArrays(object1[key], object2[key])) {
              return false;
            }
          } else if (object1[key] !== object2[key]) {
            return false;    
          } 
  }
   return true;   
};

module.exports = eqObjects;


/*console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

console.log(eqObjects({ a: { x: 3, y: 0, z: 1 }, b: 2 }, { a: { x: 3, y: 0, z: 1 }, b: 2 })); // => true

*/






// For objects with arrays 


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

/*
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  let bool = true;
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const key of arr1) {
      if (Array.isArray(object1[key])) {
          if (!eqArrays(object1[key], object2[key])) {
            return false;
          }
        } else if (object1[key] !== object2[key]) {
           return false;    
        } 
      }
   return true;   
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

*/




/* for primitive data types
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  let bool = false;
  if (arr1.length === arr2.length) {
    for (const key1 of arr1) {
      for (const key2 of arr2) {
         if (key1 === key2) {
              object1[key1] = object2[key2];
              bool = true;
          }
      }
    }
  }
  return bool;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(ab, ba), true);   // => true  */

//const cd = { c: "1", d: ["2", 3] };
//const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

//const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false

//assertEqual(eqObjects(cd, dc), true);
//assertEqual(eqObjects(cd, cd2), false);


//console.log(eqArrays(cd["d"], dc["d"]));




