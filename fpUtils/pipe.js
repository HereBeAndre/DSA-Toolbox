// TODO: Move to separate utils folder
const add10 = (a) => a + 10;
const square = (x) => x ** 2;
const halve = (y) => y / 2;

/**
 * It combines the functions parameters from left to right, and returns the combined output
 * @param {Function[]} fns
 * @param {value} any
 * @returns {(any)}
 */
function pipe(...fns) {
  return function piped(value) {
    for (let fn of fns) {
      value = fn(value);
    }
    return value;
  };
}

const piped = pipe(square, add10, halve);
console.log(piped(4));
