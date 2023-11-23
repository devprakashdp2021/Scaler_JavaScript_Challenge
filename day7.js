// Challenge 7**  
// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function check(x, y) {
  return (x === 50 || y === 50 || x + y === 50) ? true : false;
}
console.log(check(50, 50));
console.log(check(20, 34));
console.log(check(20, 30));