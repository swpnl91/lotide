const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  let temp = [];
  if (array.length > 0) {
    for (let i = 0; i < array.length - 1; i++) {
      temp.push(array[i + 1]);
    }
    return temp;
  }
  return temp;
};

const result = (tail(["Yo Yo", "Lighthouse", "Labs"]));
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

/*const result = (tail(["Yo Yo"]));
assertEqual(result.length, 0); // ensure we get back four elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[2], "Chandler");
assertEqual(result[3], "Ross");

const result = (tail([]));
assertEqual(result.length, 0); // ensure we get back 0 elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"*/