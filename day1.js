// Challenge 1:
// Write a Javascript function that reverses a Number.
// Sample Data and output:
// Example:
// x = 32243;
// Expected output: 34223

function reverseNumber(number){
    let reversedNumber = 0;
    while(number!=0){
        let lastDigit = number%10;
        reversedNumber = (reversedNumber*10) + lastDigit;
        number = Math.floor(number/10);
    }
    return reversedNumber;
}
console.log("Reversed Number =", reverseNumber(12345));