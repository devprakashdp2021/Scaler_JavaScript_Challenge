// Challenge 8**  
//  Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.  
// Sample array : [1, 2, 3] and subset length is 2  
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

function generateSubsets(arr, len) {
    const subsets = [];
    const generate = (start, subset) => {
      if (subset.length === len) {
        subsets.push(subset);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        generate(i + 1, subset.concat(arr[i]));
      }
    };
    generate(0, []);
    return subsets;
}
console.log(generateSubsets([1, 2, 3], 2));