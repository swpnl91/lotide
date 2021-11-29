const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');



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

};

module.exports = middle;