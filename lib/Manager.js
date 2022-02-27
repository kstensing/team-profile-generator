const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, email) {
        super(name, email);
            this.email = email;
            this.officeNumber = Math.floor(Math.random() * 5 + 7);   
    };

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;