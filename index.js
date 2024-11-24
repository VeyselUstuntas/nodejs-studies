const { rejects } = require("assert");
var http = require("http");

var server = http.createServer(async function (req, res) {

    function firstPromise() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve("1. asenkron işlem. Bir sonraki işlem 5 sn sonra...");
                reject("1. işlem Hata");
            }, 2000);
        });
    }

    function secondPromise() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve("2. asenkron işlem.");
                
                reject("2. işlem Hata");
            }, 5000);
        });
    }

    async function runAsyncOperation() {
        console.log("Asenkron işlem başladı. Sonraki işlem 2 sn sonra...");

        let firstAsyncPromise = await firstPromise();
        console.log(firstAsyncPromise);

        let secondAsyncPromise = await secondPromise();
        console.log(secondAsyncPromise);
        console.log("Asenkron işlem tamamlandı");
        res.end();
    }
    await runAsyncOperation();
    res.end();

});

server.listen(3000, () => {
    console.log("node.js server at port 3000");
});
