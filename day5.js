// Challenge 5: 
// Write a JavaScript exercise to get the filename extension.

function fileExtensionName(filename){
    return filename.split('.').pop();
}
console.log(fileExtensionName('index.html'));
console.log(fileExtensionName('index.css'));