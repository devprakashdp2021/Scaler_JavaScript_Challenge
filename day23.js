// Challenge 23:
// Problem : Closure Challenge  
// Description:  
// Write a function counter that returns a new function on each invocation. The returned function, when called, should increment the counter value and return it.  
// Solution Approach:  
// Utilize closure to maintain the state of the counter.  

function counter() {
    let count = 0;
    return function () {
        return ++count;
    }
}

let count1 = counter();
let count2 = counter();
console.log(count1()); // 1
console.log(count1()); // 2
console.log(count2()); // 1
console.log(count2()); // 2