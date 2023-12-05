// Challenge 29:
// Description:
// Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.
// Solution Approach:
// Use Promise.race and a timeout promise.

function raceWithTimeout(promises, timeout) {
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Timed out"));
    }, timeout);
  });
  return Promise.race([...promises, timeoutPromise]);
}

const promise1 = new Promise((resolve, reject) => { setTimeout(() => { resolve("Promise 1 Resolved"); }, 200);});
const promise2 = new Promise((resolve, reject) => { setTimeout(() => { resolve("Promise 2 Resolved"); }, 500);});

raceWithTimeout([promise1, promise2], 300).then((result) => {console.log(result);}) .catch((error) => {  console.log(error);});
