var http = require("http");

var server = http.createServer(function (req, res) {

    if (req.url == "/") {
        let target = {
            message1: "hello",
            message2: "everyone",
        }

        let handler = {};

        let handler2 = {
            get(target, prop, receiver) {
                return "world";
            }
        };

        let handler3 = {
            get(target, prop, receiver) {
                if(prop == "message2"){
                    return "world";
                }
            }
        };

        let handler4 = {
            get(target, prop, receiver) {
                if(prop == "message2"){
                    return "world";
                }
                return Reflect.get(...arguments);
            }
        };

        
        let handler5= {
            get(target, prop, receiver) {
                if(prop == "message2"){
                    return new Error("Hata Erişilemez");
                }
                return Reflect.get(...arguments);
            }
        };

        let handler6= {
            get(target, prop, receiver) {
                return target[prop] || "default value";
            }
        };

        let proxy = new Proxy(target, handler);
        let proxy2 = new Proxy(target, handler2);
        let proxy3 = new Proxy(target, handler3);
        let proxy4 = new Proxy(target, handler4);
        let proxy5 = new Proxy(target, handler5);
        let proxy6 = new Proxy(target, handler6);

        console.log("handler1")
        console.log(proxy.message1); // hello
        console.log(proxy.message2); // everyone
        console.log("\n");

        console.log("handler2")
        console.log(proxy2.message1); // world
        console.log(proxy2.message2); // world
        console.log("\n");

        console.log("handler3")
        console.log(proxy3.message1); // undefined
        console.log(proxy3.message2); // world
        console.log("\n");

        console.log("handler4")
        console.log(proxy4.message1); // hello
        console.log(proxy4.message2); // world
        console.log("\n");

        console.log("handler5")
        console.log(proxy5.message1); // hello
        console.log(proxy5.message2); // Hata Erişilemez.
        console.log("\n");

        
        console.log("handler6")
        console.log(proxy6.message1); // hello
        console.log(proxy6.message2); // everyone
        console.log(proxy6.unknown); // default value
        console.log("-----------");

        res.end();
    }

});

server.listen(3000, () => {
    console.log("node.js server at port 3000");
});

