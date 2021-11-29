const assertEqual = require('./assertEqual')

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

module.exports = tail;