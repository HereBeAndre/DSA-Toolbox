/**
 * Returns the property at the specified path name, or undefined if no property is found
 * @param {Object} object
 * @param {string} pathName
 */
const reduceObjectByPathName = (startingObject, pathName) => {
  const path = pathName.split(".");

  return path.reduce(
    (obj, property) =>
      obj && obj[property] !== undefined ? obj[property] : undefined,
    startingObject
  );
};

/**
 * Big-O Time Complexity: O(N)
 * Big-O Space Complexity: O(N)
 */

const user = {
  id: 102,
  email: "jperth@email.com",
  personalInfo: {
    name: "Jack",
    address: [
      {
        line1: "westwish st",
        line2: "washmasher",
        city: "new york",
        state: "NY",
      },
    ],
  },
};

console.log(reduceObjectByPathName(user, "personalInfo.address.0.state")); // NY
console.log(reduceObjectByPathName(user, "personalInfo.address.1.city")); // undefined
