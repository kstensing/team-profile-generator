const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.officeNumber = officeNumber;
    };

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;