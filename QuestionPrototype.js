
class QuestionPrototype {
    /**
     * @param {number} number1 
     * @param {number} number2 
    */
    constructor(number1, number2) {
        /**
         * @type {number}
        */
        this.number1 = number1;

        /**
         * @type {number}
        */
        this.number2 = number2;

        /**
         * @type {number}
        */
        this.sum;

        /**
         * @type {number}
        */
        this.sub;

        /**
         * @type {number}
        */
        this.multip;
    }
}
module.exports = QuestionPrototype;
