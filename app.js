var fs = require('fs');
var http = require('http');

var file = fs.createReadStream("readme.md");
var newFile = fs.createWriteStream("readme_copy.md");

file.pipe(newFile);


//Here we get the file name in request
http.createServer(function(req, res){
    var newFile = fs.createWriteStream("requestoutput.md");
    req.pipe(newFile);

    req.on('end', function(){
        res.end('uploaded!');
    })
}).listen(8080);