const http = require("http");
const EmployeePrototype = require("./EmployePrototype");
const QuestionPrototype = require("./QuestionPrototype");

const server = http.createServer(function (req, res) {
    if (req.url == "/") {


        EmployeePrototype.prototype.Age = function () {
            if (this.age > 60) {
                console.log("Retired");
            }
            else {
                console.log("Not Retired");
            }
        };

        const e1 = new EmployeePrototype("veysel", "ustuntas", 23);
        const e2 = new EmployeePrototype("muffy", "muffys", 4);
        const e3 = new EmployeePrototype("mehmet", "erdogan", 67);

        e3.Age();
        console.log(e3.age);

        EmployeePrototype.prototype.maas = 50000;
        console.log(e1.maas);



        QuestionPrototype.prototype.sum = function () {
            this.sum = this.number1 + this.number2;
        };

        QuestionPrototype.prototype.sub = function () {
            this.sub = this.number1 - this.number2;
        };

        QuestionPrototype.prototype.multip = function () {
            this.multip = this.number1 * this.number2;
        };


        let q1 = new QuestionPrototype(12, 10);

        q1.sum();
        q1.sub();
        q1.multip();

        console.log(q1.sum);
        console.log(q1.sub);
        console.log(q1.multip);


        res.end();
    }

});

server.listen(3000, () => {
    console.log("node.js server at port 3000");
});

