class EmployeePrototype{
    /**
     * @param {string} name 
     * @param {string} surname 
    */
    constructor(name,surname,age){
        /**
         * @type {string}
        */
        this.name=name;

        /**
         * @type {string}
        */
        this.surname=surname;

        /**
         * @type {number}
        */
        this.age=age;
    }
}
module.exports = EmployeePrototype;