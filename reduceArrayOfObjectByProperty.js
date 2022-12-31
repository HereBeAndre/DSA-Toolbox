/**
 * Returns a manipulated version of the input array
 * @param {Array} array
 * @param {string} property
 */
const reduceArrayOfObjectsByProperty = (array, property) => {
  return array.reduce((acc, curr) => {
    const key = curr[property];
    if (!acc[key]) acc[key] = [];
    acc[key].push(curr);
    return acc;
  }, {});
};

const data = [
  {
    categoryName: "Fantasy",
    categoryId: "F1",
    description: "Fantasy books",
  },
  {
    categoryName: "Biography",
    categoryId: "B1",
    description: "Biography books",
  },
];

console.log(reduceArrayOfObjectsByProperty(data, "categoryId")); /*
{
    F1: [
            {
                categoryName: 'Fantasy',
                categoryId: 'F1',
                description: 'Fantasy books'
            }
        ],
    B1: [
            {
                categoryName: 'Biography',
                categoryId: 'B1',
                description: 'Biography books'
            }
        ]
}
*/
