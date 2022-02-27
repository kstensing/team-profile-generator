const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, email) {
        super(name, email);
            this.email = email;
            this.school = "";   
    };

    getSchool() {
        return `School: ${this.school}`;
    };

    getRole() {
        return new Intern();
    };
};

module.exports = Intern;