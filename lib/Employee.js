class Employee {
    constructor(name = '', email = '') {
        this.name = name;
        //how to make a constructor that accepts an integer input?
        this.id = Math.floor(Math.random() * 5 + 7);
        this.email = email;
    };

    getName() {
        return `Employee Name: ${this.name}`;
    };

    getId() {
        return `Employee Id: ${this.id}`;
    };

    // getEmail() {

    // };

    // getRole() {
    //     return Employee();
    // };
}

module.exports = Employee