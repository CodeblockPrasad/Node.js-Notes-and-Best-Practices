
const fs = require('fs');  // fs = File System 
const { off } = require('process');

// Read File 
const text = fs.readFileSync('./example.txt', 'utf-8');
console.log(text);

       // OR

const text1 = fs.readFileSync('./example.txt', 'utf-8');
console.log(text.toString());

// Write File 
fs.writeFileSync('./example.txt', 'Add Notes in File ');

// Update File Name 
fs.renameSync('./example.txt', './hello.txt');

// Create File 
fs.writeFileSync('filename.txt', 'This is the file content.');

//Delete File 
fs.unlinkSync('./hii.txt');
console.log('File Deleted')

// chrome open 
const { exec } = require('child_process');
// For Windows
exec('start chrome');  // when you run this code it will open chrom
exec('start https://www.facebook.com');  //when you run this code it will open facebook 