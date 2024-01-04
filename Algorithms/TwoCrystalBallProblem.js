//**QUESTION**/

// given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized distance

// **SOLUTION** //

// first off we should know distance is always in a sorted way
// because we start from a low number and keep going higher
// technically we could use linear search, but that would'nt really be optimized
// so here we could use BinarySearch instead
// usually we use N/2 and do binary search from the mid point
// but we only have two balls to work with so if it breaks from half we would'nt have much to go with
// so what we could do is jump a square root of times untill we reach the breaking point
// then apply BinarySearch on it from there
// and then go back from there to find the exact point it breaks at
// so if we find the point it breaks at with one ball
// we use an array of 0's and 1's.
// 0's for when its not broken and 1's for when it breaks

// the
const twoCrystalBalls = (breaksArr) => {
  // get the jump distance that we're using
  const jumpAmount = Math.floor(Math.sqrt(breaksArr.length));

  let i = jumpAmount;
  // keeps jumping the jmpAmount distance till we reach true in the breakArr
  for (; i < breaksArr.length; i += jumpAmount) {
    // when it reaches break we stop the loop
    if (breaksArr[i]) {
      break;
    }
  }

  // we minus the jump amount from i becuase we want to get the point before it breaks
  // because before this i is at a point after which it breaks
  i -= jumpAmount;

  // as we know that the breaking value is in the distance between one jump amount

  //                                             breaks here somewhere
  // [ jumpAmount     |      jumpAmount     |          jumpAmount         |        jumpAmount]

  //                                                                 we get here

  // when we get to that point we can tell the crystal ball is broken

  //                                             breaks here somewhere
  // [ jumpAmount     |      jumpAmount     |          jumpAmount         |        jumpAmount]

  //                                     go back here

  //                                    i starts here                                      goes till here

  // the j is for checking the distance stays between one jmpAmount

  for (let j = 0; j < jumpAmount && i < breaksArr.length; j++, i++) {
    if (breaksArr[i]) {
      return i;
    }
  }

  // return this if ball doesnt break
  return -1;
};
