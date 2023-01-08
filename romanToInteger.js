const DICT = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * Given a Roman number, returns its numeric value
 * @param {string} str
 * @returns {number}
 */
const romanToInteger = (str) => {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const current = DICT[str[i]];
    const next = DICT[str[i + 1]];

    next > current ? (result -= current) : (result += current);
  }
  return result;
};

console.log(romanToInteger("MCD")); // 1400
console.log(romanToInteger("CXLIV")); // 144
