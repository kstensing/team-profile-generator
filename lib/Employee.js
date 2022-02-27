class Employee {
    constructor(name = '', email = '') {
        this.name = name;
        this.id = Math.floor(Math.random() * 5 + 7);
        this.email = email;
    };

    getName() {
        return `Employee Name: ${this.name}`;
    };

    getId() {
        return `Employee Id: ${this.id}`;
    };

    getEmail() {
        return `Employee email: ${this.email}`;
    };

    getRole() {
        return new Employee();
    };
}

module.exports = Employee