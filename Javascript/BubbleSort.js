// **BUBBLE SORT** //

// time complexity O(N^2)

// **HOW IT WORKS** //

// the first loop runs till the length of the array
// the second loop runs till the length of the array minus 1
// we also minus i from it, as forward as we move with i, we sort that many

// **CODE** //

const BubbleSort = (arr) => {
  // first loop goes till length of array
  for (let i = 0; i < arr.length; i++) {
    // second loop goes till length of array - 1 as we dont need to check the last element
    // - i as well as we dont need to check the elements at the end that are sorted
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // sort the elements here
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
