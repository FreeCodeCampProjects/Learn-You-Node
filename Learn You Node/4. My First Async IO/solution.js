/*
    Write a program that uses a single asynchronous filesystem operation to  
    read a file and print the number of newlines it contains to the console  
    (stdout), similar to running cat file | wc -l. 

    The full path to the file to read will be provided as the first  
    command-line argument.  
*/

var fs = require('fs');
var file = process.argv[2];

/* Same as the previous problem except now it's the
   Node.js way: asynchronous (with callback function): */

fs.readFile(file, function(err, contents) {
    var lines = contents.toString().split('\n').length;
    console.log(--lines);
});