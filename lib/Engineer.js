const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, email) {
        super(name, email);
            this.email = email;
            this.github = "";   
    };

    getGithub() {
        return `Github Username: ${this.github}`;
    };

    getRole() {
        return new Engineer();
    };
};

module.exports = Engineer;