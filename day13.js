// Challenge 13:
// Problem Statement: Implement a memoization function.
// Description: Write a function that takes a function as its argument and returns a memoized version of the function.
// Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.
const memoAddition = () => {
    const cache = {};
    return (num) => {
        if (num in cache) {
        console.log("Fetching from cache");
        return cache[num];
        } else {
        console.log("Calculating result");
        let result = num + 10;
        cache[num] = result;
        return result;
        }
    };
}
const memoAdd = memoAddition();
console.log(memoAdd(10)); // calculated
console.log(memoAdd(10)); // cached