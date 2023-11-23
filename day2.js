// Challenge 2:
// Write a JavaScript function that accepts a string as a parameter and converts the
// first letter of each word into upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

function upperCase(string){
    let result = string.split(' ');
    for(let i=0;i<result.length;i++)
    {
          let firstCharacter = result[i][0].toUpperCase();
          let remainingCharacter = result[i].slice(1);
          result[i] = firstCharacter + remainingCharacter;
    }
    result = result.join(' ');
    return result;  
}
console.log(upperCase("the quick brown fox"));