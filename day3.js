// Challenge 3:
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

function checkNumRange(num1,num2){
    return (num1>=50 && num1<=99 || num2>=50 && num2<=99) ? true : false;
}
console.log(checkNumRange(23,45));
console.log(checkNumRange(67,20));