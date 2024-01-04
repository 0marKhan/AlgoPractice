// LINEAR SEARCH

// worst case time complexity 0(n)

const linearSearch = (arr, num) => {
  // goes over the arrays entire length
  for (let i = 0; i < arr.length; i++) {
    // if the array is equal to the number returns true
    if (arr[i] == num) {
      return true;
      // else returns false
    } else {
      return false;
    }
  }
};
