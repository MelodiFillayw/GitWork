function merge(arr1, arr2) {
 
  let results = [];
  let i = 0; 
  let j = 0; 

  // Loop through both arrays as long as there are elements in them

  while (i < arr1.length && j < arr2.length) {
// Compare the elements from both arrays

    if (arr2[j] > arr1[i]) {
// If the element in arr1 is smaller, add it to the results

      results.push(arr1[i]);

      i++;
    } else {
// If the element in arr2 is smaller or equal, add it to the results
      results.push(arr2[j]);
      j++;
    }
  }

  // Add all remaining elements from arr1 to the results.

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

    while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

// will add the remaining elements from arr2 to results.


  return results;

}

function mergeSort() {}

module.exports = { merge, mergeSort};