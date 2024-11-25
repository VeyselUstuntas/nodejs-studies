var http = require("http");

var server = http.createServer(function (req, res) {

    let target = {
        message1 : "hello",
        message2: "everyone",
    }

    let handler = {};

    let proxy = new Proxy(target,handler);

    console.log(proxy.message1);
    console.log(proxy.message2);


});

server.listen(3000, () => {
    console.log("node.js server at port 3000");
});

