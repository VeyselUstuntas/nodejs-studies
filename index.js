var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        fs.readFile("index.html", (err, html) => {
            res.write(html);

            function Questions(text, choices, answer) {
                if (!(this instanceof Questions)) {
                    return new Questions(text, choices, answer);
                }
                this.text = text;
                this.choices = choices;
                this.answer = answer;
                res.end();

            }

            Questions.prototype.checkAnswer = function (answer) {
                return answer === this.answer ? true : false;
            };

            function Quiz(questions) {
                if (!(this instanceof Quiz)) {
                    return new Quiz(questions);
                }
                this.questions = questions;
                this.score = 0;
                this.questionIndex = 0;
            };
            Quiz.prototype.getQuestion = function () {
                return this.questions[this.questionIndex];
            };

            Quiz.prototype.isFinish = function () {
                return this.questions.length === this.questionIndex;
            };

            Quiz.prototype.guess = function (answer) {
                let question = this.getQuestion();
                if (question.checkAnswer(answer)) {
                    this.score++;
                }
                this.questionIndex++;
            };

            var q1 = Questions('what’s the best programming language', ['php', 'c#', 'javascript', 'python'], 'javascript');

            var q2 = Questions('what’s the most popular programming', ['php', 'c#', 'javascript', 'python'], 'javascript');

            var q3 = Questions('what’s the best modern programming', ['php', 'c#', 'javascript', 'python'], 'javascript');


            let questions = Array(q1, q2, q3);

            let quiz = Quiz(questions);

            console.log(quiz.isFinish());
            console.log(quiz.getQuestion());
            quiz.guess("javascript");
            

            console.log(quiz.getQuestion());
            quiz.guess("javascript");

            console.log(quiz.getQuestion());
            quiz.guess("python");

            console.log(quiz.score);
            console.log(quiz.isFinish());

            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log("node.js server at port 3000");
});

