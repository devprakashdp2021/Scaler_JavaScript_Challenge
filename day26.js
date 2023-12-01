// Challenge 26:  
// Description:  
// Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.  
// Solution Approach:  
// Combine map, filter, and reduce array methods.  

function calculateTotal(arr) {
    return arr.filter(num => num % 2 !== 0).map(num => num * num).reduce((acc, num) => acc + num);
}

const numbers = [1, 2, 3, 4];
console.log(calculateTotal(numbers)); 

const numbers2 = [1, 2, 5, 7];
console.log(calculateTotal(numbers2));