class Employee {
    /**
     * @param {string} name
     * @param {string} surname
     * @param {number} age
     */
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = function () {
            if (age > 60) {
                return console.log("Retired");
            }
            else {
                return console.log("Not Retired");
            }
        }
    }
}
module.exports = Employee;