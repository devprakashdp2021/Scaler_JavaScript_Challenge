// Challenge 30:
// Description:
// Implement a throttle function that ensures a given function is not called more than once in a specified time interval.
// Solution Approach:
// Use a timestamp to track the last invocation time and prevent calling the function if it's within the throttle interval.
function throttle(func, interval){
    let last = 0;
    return function(...args){
        const now = Date.now();
        if(now - last >= interval){
            last = now;
            return func();
        }else{
            console.log("Too soon");
        }
    }
}
function sayHi(){
    console.log("Hi");
}
const throttled = throttle(sayHi, 1000);
throttled();
throttled();