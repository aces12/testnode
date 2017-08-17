var http = require('http');
var fs = require('fs');
var server = http.createServer(
//     function(req, res){
//     console.log('Client has request');
//     // console.dir(req);
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     res.write("<!DOCTYPE html>");
//     res.write("<html>");
//     res.write("<head>");
//     res.write("<title>response page</title>");
//     res.write("</head>");
//     res.write("<body>");
//     res.write("<h1>response from node JS</h1>");
//     res.write("</body>");
//     res.write("</html>");
//     res.end();
// }
);
var host = '127.0.0.1';
var port = 3000;
server.listen(port, host, '50000', function(){
    console.log('WebServer started : %s, %d', host, port);
});

server.on('connection', function(socket){
    var addr = socket.address;
    console.log('Client Connected : %s, %d', addr.address, addr.port);
});

server.on('request', function(req, res){
    console.log('Client has request');
    // console.dir(req);
    // res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    // res.write("<!DOCTYPE html>");
    // res.write("<html>");
    // res.write("<head>");
    // res.write("<title>response page</title>");
    // res.write("</head>");
    // res.write("<body>");
    // res.write("<h1>response from node JS</h1>");
    // res.write("</body>");
    // res.write("</html>");
    // res.end();
    
    var filename = 'home.png';
    // fs.readFile(filename, function(err, data){
    //     res.writeHead(200, {"Content-Type": "image/png"});
    //     res.write(data);
    //     res.end();
    // });

    var infile = fs.createReadStream(filename, {flags: 'r'});

    infile.pipe(res);
});

server.on('close', function(){
    console.log('WebServer terminated');
});