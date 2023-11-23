// Challenge 6**
// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

function sum(x, y) {
  return (x === y) ? (x + y) * 3 : x + y;
}
console.log(sum(3, 3));
console.log(sum(3, 4));
