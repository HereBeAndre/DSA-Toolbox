/**
 * Returns the number of parantheses needed to balance the input s
 * @param {string} s
 */

/**
 * Big-O Time Complexity: O(N)
 * Big-O Space Complexity: O(N)
 */

const OPENING = "(";
const CLOSING = ")";

const getMin = (s) => {
  let parentheses = [];

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current === OPENING) {
      parentheses.push(current);
    } else if (current === CLOSING) {
      if (parentheses[parentheses.length - 1] === OPENING) {
        parentheses.pop();
      } else {
        parentheses.push("*");
      }
    }
  }
  return parentheses.length;
};

// EXAMPLE:
console.log(getMin("("));
console.log(getMin("()"));
