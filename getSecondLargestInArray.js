/**
 * Returns the second largest number inside an array.
 * @param {Array} array
 */

/**
 * Big-O Time Complexity: O(N)
 * Big-O Space Complexity: O(1)
 */

const getSecondLargestInArray = (array) => {
  let max = (secondMax = -Infinity);

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (current > max) {
      [secondMax, max] = [max, current];
    } else if (current < max && current > secondMax) {
      secondMax = current;
    }
  }
  return secondMax;
};
