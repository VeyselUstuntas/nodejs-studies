console.log("merhaba");

var http = require("http");

var server = http.createServer(function(req, res) {
    console.log(req.url);

    res.end();
});

server.listen(3000,() => {
    console.log("node.js server at port 3000");
});

