// Challenge 28:
// Description:  
// Create a proxy object that intercepts and logs all property access.  
// Solution Approach:  
// Use the Proxy object to create a wrapper around another object.  

const target = {
    name: 'target',
    value: 42
};

const handler = {
    get: function (target, property, receiver) {
        console.log(`property ${property} has been accessed`);
        return target[property];
    }
};

const proxy = new Proxy(target, handler);
console.log(proxy.name);
console.log(proxy.value);

