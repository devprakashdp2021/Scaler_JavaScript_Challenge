// Challenge 22:
// Problem Statement: Write a function to deeply compare two objects for equality.  
// Description: Given two objects, the function should return true if they are deeply equal and false otherwise.  
// Solution Approach: Recursively compare properties of both objects.

function deepCompare(obj1, obj2) {
    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    if (typeof obj1 === "object") {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (let key in obj1) {
            if (!deepCompare(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    }
    return obj1 === obj2;
}

console.log(deepCompare({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(deepCompare({ a: 1, b: 2 }, { a: 1, b: 3 })); // false