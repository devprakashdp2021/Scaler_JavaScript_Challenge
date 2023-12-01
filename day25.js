// Challenge 25:
// Description:  
// Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.  
// Use any random API that you want  
// Solution Approach:  
// Utilize the .then method to chain promises.

function getData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            return fetch('https://jsonplaceholder.typicode.com/todos/2')
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
        })
}
getData();
