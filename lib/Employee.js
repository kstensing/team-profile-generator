class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = Math.floor(Math.random() * 5 + 7);;
        // this.email = email;
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