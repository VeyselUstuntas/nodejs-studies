var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    if (req.url == "/") {

        let welcome = function (value1, value2) {
            console.log("Welcome " + this.name +" "+ value1 +" "+ value2);
        }


        let veysel = {
            name: "veysel",
        }

        let muffy = {
            name: "muffy",
        }

        welcome.call(veysel,"Ustuntas",23);
        welcome.call(muffy,"MUFFY",3);

        welcome.apply(veysel,["Ustuntas",23]);
        welcome.apply(muffy,["MUFFY",3]);

        let welcomeVeysel = welcome.bind(veysel);
        welcomeVeysel("Ustuntas",23);
        let welcomeMuffy = welcome.bind(muffy);
        welcomeMuffy("MUFFY",3);

        res.end();
    }
});

server.listen(3000, () => {
    console.log("node.js server at port 3000");
});

