class Question{

    /**
     * @param {number} number1 
     * @param {number} number2 
    */
    constructor(number1, number2){
        this.number1 = number1;
        this.number2 = number2;

        this.sum = function(){
            return (this.number1 + this.number2);
        };

        this.sub = function(){
            return (this.number1 - this.number2);
        };

        this.multip = function(){
            return (this.number1 * this.number2);
        };
    }
}
module.exports = Question;

