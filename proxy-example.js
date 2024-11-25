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

            set(target,prop,value){
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
            },

            deleteProperty(target,prop){
                if(prop == "name"){
                    console.log("name prop silinemez");
                    return false;
                }
                delete target[prop];
                return true;
            }
        }


        let proxy = new Proxy(person,handler);
        console.log(proxy);
        proxy.age = 23;
        proxy.lastName = "veysel";
        console.log(proxy.name);
        console.log(proxy.job);
        console.log(proxy.age);

        delete proxy.name;
        delete proxy.job;

        console.log(person);
        
        res.end();
    }
});

server.listen(3000);