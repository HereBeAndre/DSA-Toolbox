/**
 * Prints integers one-to-N.
 * Prints “Fizz” if an integer is divisible by three,
 * “Buzz” if it is divisible by five,
 * “FizzBuzz” if it is divisible by both three and five.
 * Prints the integer if none of the conditions above match.
 * @param {number} number - The maximum integer we want to print.
 */

/**
 * Big-O Time Complexity: O(N)
 * Big-O Space Complexity: O(1)
 */
function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (output === "") output = i;
    console.log(output);
  }
}

/**
 * Big-O Time Complexity: O(N)
 * Big-O Space Complexity: O(N)
 */
function fizzBuzzList(number) {
  const output = [];

  for (let i = 1; i <= number; i++) {
    let current = "";
    if (i % 3 === 0) current += "Fizz";
    if (i % 5 === 0) current += "Buzz";
    if (current === "") current = i;
    output.push(current);
  }
  return output;
}
