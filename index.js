const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/page-template');


var employees = [];

const start = () => {
    return inquirer
        .prompt([{
            name: "addEmployee",
            type: "list",
            message: "Would you like to add an employee or quit?",
            choices: ["Add Employee", "Quit"],
        }, ])
        .then(answer => {
                if (answer.addEmployee === "Add Employee") {
                    addEmployee();
                } else {
                    console.log("testing employees arry: ", employees);

                    writeToFile(generateTeam(employees));
                }
            }

        )
}

const addEmployee = () => {
    return inquirer
        .prompt([{
                name: "role",
                type: "list",
                message: "Which type of team member would you like to add?",
                choices: ["Manager", "Engineer", "Intern", "I don't want to add any more team members"],
            },
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name.');
                        return false;
                    }
                },
            }, {
                type: 'input',
                name: 'email',
                message: "What is the employee's email?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter an Email address.');
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'id',
                message: "What is the employee's id?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter an ID.');
                        return false;
                    }
                }
            }
        ])
        .then(employee => {
            switch (employee.role) {
                case "Manager":
                    addManager(employee);
                    break;
                case "Engineer":
                    addEngineer(employee);
                    break;
                case "Intern":
                    addIntern(employee);
                    break;
            }
        });
};

const addManager = (employee) => {
    return inquirer.prompt([{
            type: 'input',
            name: 'office',
            message: "What is the team manager's office number?",
            validate: managerOfficeInput => {
                if (managerOfficeInput) {
                    return true;
                } else {
                    console.log('Please enter an office number.');
                    return false;
                }
            }
        }, ])
        .then(data => {
            const {
                name,
                email,
                id
            } = employee
            let temp = new Manager(name, email, id, data.office);
            employees.push(temp);
            start();
        })
};

// //engineer options
const addEngineer = (employee) => {
    return inquirer.prompt([{
            type: 'input',
            name: 'github',
            message: "What is the employee's GitHub username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub username.');
                    return false;
                }
            }
        }, ])
        .then(data => {
            const { name, email, id } = employee
            let temp = new Engineer(name, email, id, data.github);
            employees.push(temp);
            start();
        })
};

// intern options
const addIntern = (employee) => {
    return inquirer.prompt([{
            type: 'input',
            name: 'school',
            message: "What is the employee's school?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school.');
                    return false;
                }
            }
        }, ])
        .then(data => {
            const { name, email, id } = employee
            let temp = new Intern(name, email, id, data.github);
            employees.push(temp);
            start();
        })
};

const writeToFile = (data) => {
    console.log("testing this")
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Check out your team!'
            });
        });
    });
};

start();