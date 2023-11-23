// Challenge 9**  
// Write a JavaScript function to find the first not repeated character.  
// Sample arguments : 'abacddbec'  
// Expected output : 'e'

function firstNotRepeated(str) {
    const counts = {};
    for (let i = 0; i < str.length; i++) {
        counts[str[i]] = counts[str[i]] ? counts[str[i]] + 1 : 1;
    }
    for (let i = 0; i < str.length; i++) {
        if (counts[str[i]] === 1) {
            return str[i];
        }
    }
    return null;
}
console.log(firstNotRepeated('abacddbec'));
