class Employee {
    constructor(name = '', email = '') {
        this.name = name;
        //how to make a constructor that accepts an integer input?
        this.id = Math.floor(Math.random() * 5 + 7);
        this.email = email;
    };

    // getName() {

    // };

    // getId() {

    // };

    // getEmail() {

    // };

    // getRole() {
    //     return Employee();
    // };
}

module.exports = Employee