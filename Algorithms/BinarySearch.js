// **BINARY SEARCH** //

// **POINTS** //

// the array must be sorted
// when you half an array each time the run time is likely O(logn) or O(nlogn)

// **HOW IT WORKS** //

// we first get an array of length n
// we get the low point, middle point, and high point indices for the array

// *first condition* //

// check if the middle point value (arr[middlePoint]) is equal to the number we're looking for
// if it is we return it

// *second condition* //

// check if the midpoint value (arr[midPoint]) is greater than the number we're looking for

//    //low                                //midpoint                            //high
//  [    1      ,         2         ,         3        ,       4        ,           5     ]

//  if it is that means the number we're looking for is in the first half
//  so we set the high to the new midpoint so it can search from the first half

//    //low                                //high
//  [    1      ,         2         ,         3        ,       4        ,           5     ]

// *third condition* //

// check if the midpoint value (arr[midPoint]) is less than the number we're looking for

//    //low                                //midpoint                            //high
//  [    1      ,         2         ,         3        ,       4        ,           5     ]

// if it is that means the number we're looking for is in the second half
// so we set the low to midpoint + 1
// we add the + 1 because mid is not included in the search

//                                                           //low               //high
//  [    1      ,         2         ,         3        ,       4        ,           5     ]

// we keep doing this in a do while loop in which the condition keeps going while low < high

// **CODE** //

const binarySearch = (arr, numToSearch) => {
  // finding lowest point in array
  let low = 0;
  // finding highest point in array
  let high = arr.length;

  do {
    const midPointIndex = Math.floor(low + (high - low) / 2); // get the index of the mid point
    const midPointValue = arr[midPoint]; // get the value of the mid point

    // checking if midpoint equal to the number being searched
    if (midPointValue === numToSearch) {
      return true;

      // checking if the mid point value is greater than the number being searched
    } else if (midPointValue > numToSearch) {
      // make the highest value to search the mid point
      high = midPointIndex;
    }
    // checking if mid point value is less than the number being searched
    else {
      // set the lowest point to the mid point + 1 because in this cause we explose the middle index
      low = midPointIndex + 1;
    }
  } while (low < high);

  return false; // if nothing returned at end of execution it means its false
};
