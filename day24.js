// Challenge 24:
// Description:  
// Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.  
// Solution Approach:  
// Use a timer and clear it on each invocation to delay the function execution.  

function debounce(func, delay) {    
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    }
}

function print() {
    console.log('Hello World');
}

const debouncedPrint = debounce(print, 500);
debouncedPrint(); // this should call print
debouncedPrint(); // this should not call print

