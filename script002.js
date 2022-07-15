/**
 * Write a JavaScript program to check from two given integers, whether one is positive and another one is negative
 */

function checkIntegers(a, b) {
  return a > 0 ? b < 0 : b > 0;
}

console.log(checkIntegers(-2, 3));
