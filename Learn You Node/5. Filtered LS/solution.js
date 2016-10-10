/* 
    Create a program that prints a list of files in a given directory,  
    filtered by the extension of the files. You will be provided a directory  
    name as the first argument to your program (e.g. '/path/to/dir/') and a  
    file extension to filter by as the second argument.  
    
    For example, if you get 'txt' as the second argument then you will need to  
    filter the list to only files that end with .txt. Note that the second  
    argument will not come prefixed with a '.'.
*/

var fs = require('fs');
var path = require('path');
var firstArg = process.argv[2];
var secondArg = process.argv[3];

fs.readdir(firstArg, function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + secondArg) console.log(file);
  });
});