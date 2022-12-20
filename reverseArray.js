/**
 * Reverses an array and returns it.
 * @param {Array} array
 */

/**
 * Big-O Time Complexity: O(N)
 * Big-O Space Complexity: O(1)
 */

// Reverse in place, no extra memory
const reverseArray = (array) => {
  for (let start = 0, end = array.length - 1; start < end; start++, end--) {
    [array[start], array[end]] = [array[end], array[start]];
  }
  return array;
};

/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */

/**
 * Big-O Time Complexity: O(N)
 * Big-O Space Complexity: O(1)
 */

// Initialize empty array, extra memory
const reverseArrayII = (array) => {
  const newArray = [];
  for (let end = array.length - 1; end >= 0; end--) {
    newArray.push(array[end]);
  }
  return newArray;
};
