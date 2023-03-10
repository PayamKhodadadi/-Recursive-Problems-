/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function permutations(array) {
  // Base case: if the array has only one element, return it as a single permutation
  if (array.length === 1) {
    return [array];
  }

  // Recursive case: generate permutations of subarrays and combine them
  let result = [];
  for (let i = 0; i < array.length; i++) {
    // Extract the i-th element and the remaining elements
    let currentElement = array[i];
    let remainingElements = array.slice(0, i).concat(array.slice(i + 1));
    // Generate permutations of the remaining elements
    let permutationsOfRemaining = permutations(remainingElements);

    // Combine the current element with the permutations of the remaining elements
    for (let j = 0; j < permutationsOfRemaining.length; j++) {
      let permutation = [currentElement].concat(permutationsOfRemaining[j]);
      result.push(permutation);
    }
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
