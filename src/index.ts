import { createServer, IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs";

const server = createServer(function (req: IncomingMessage, res: ServerResponse) {
    if (req.url === "/") {
        readFile("./public/index.html", (err, html) => {
            if (err) {
                res.end("Internal Server Error");
            } else {
                res.end(html);
            }
        });
    } else if (req.url === "/products") {
        readFile("./public/product.html", (err, html) => {
            if (err) {
                res.end("Internal Server Error");
            } else {
                res.end(html);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log("Node.js server at port 3000");
});
