const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, email) {
        super(name, email);
            this.email = email;
            
    }

    
}

module.exports = Manager;