var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        fs.readFile("index.html", (err, html) => {
            res.write(html);
            res.end();
        });
    }
    else if (req.url == "/products") {
        fs.readFile("product.html", (err, html) => {
            res.write(html);
            res.end();
        });
    }
    else {
        fs.readFile("not-found.html", function (err, html) {
            res.write(html);
            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log("node.js server at port 3000");
});

