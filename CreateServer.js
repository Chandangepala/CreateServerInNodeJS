var http = require('http'); // variable http

http.createServer(function(request, response){

//200, 400, 500
response.writeHead(200,{
    'Content-Type':'text/plain'
});
response.end("Hello Node, Connected NodeMon"); //response when server at port 3000 is called.

}
).listen(3000, console.log("Server is running on port 3000 | Nodemon")); // creating server at on port 3000