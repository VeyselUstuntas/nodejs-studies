const http = require("http");

const server = http.createServer(function(req,res){
    if(req.url == "/"){

        let person = {
            name: "veysel",
            job : "engineer",
        };

        let handler = {
            get(target,prop, receive){
                return Reflect.get(...arguments);
            },

            set(target,prop, value){
                if(prop == "age"){
                    if(value > 0 && Number.isInteger(value)){
                        return Reflect.set(target,prop,value);
                    }
                    else{
                        return new Error("Yaş 0 dan büyük ve integer değer olmalıdır");
                    }
                }
                else if(prop == "lastName"){
                    return Reflect.set(target,prop,value);
                }
            }
        }


        let proxy = new Proxy(person,handler);
        proxy.age = 23;
        proxy.lastName = "veysel";
        console.log(proxy.name);
        console.log(proxy.job);
        console.log(proxy.age);
        console.log(person);
        
        res.end();
    }
});

server.listen(3000);