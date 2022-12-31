/**
 * Returns a boolean representing whether two arrays contain a common item
 * @param {Array} array1
 * @param {Array} array2
 * @returns boolean
 */
const containCommonItem = (array1, array2) => {
  const map = new Map();

  for (let i = 0; i < array1.length; i++) {
    const current = array1[i];
    if (!map.has(current)) map.set(current, true);
  }

  for (let j = 0; j < array2.length; j++) {
    const current = array2[j];
    if (map.has(current)) return map.get(current);
  }
  return false;
};

console.log(containCommonItem([1, 2, 3], [10, 20, 3])); // true
console.log(containCommonItem([1, 2, 3], [10, 20, 30])); // false
