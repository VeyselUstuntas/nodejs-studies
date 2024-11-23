import { createServer } from "http";
import { readFile } from "fs";
var server = createServer(function (req, res) {
    if (req.url == "/") {
        readFile("index.html", (err, html) => {
            res.write(html);
            res.end();
        });
    }
    else if (req.url == "/products") {
        readFile("product.html", (err, html) => {
            res.write(html);
            res.end();
        });
    }
    else {
        readFile("not-found.html", function (err, html) {
            res.write(html);
            res.end();
        });
    }
});
server.listen(3000, () => {
    console.log("node.js server at port 3000");
});
//# sourceMappingURL=index.js.map