const fs = require('fs');
const inquirer = require('inquirer');
// const createFile = require('./utils/generateHTML.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/page-template');


var employees = [];

const addManager = (employee) => {
    return inquirer.prompt([
            {
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
            },
        ])
        .then(data => {
            const {name, email, id} = employee
            let temp = new Manager(name, email, id, data.office);
            employees.push(temp);
            start();
        })
    };

    const addEmployee = () => {
            // if (!teamData.employees) {
            //     teamData.employees = [];
            // }
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
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
            }
        });
};


const start = () => {
    return inquirer
        .prompt([
            {
                name: "addEmployee",
                type: "list",
                message: "Would you like to add an employee or quit?",
                choices: ["Add Employee", "Quit"],
            },
        ])
        .then( answer => {
            if (answer.addEmployee === "Add Employee") {
                addEmployee();
            } else {
                console.log("testing employees arry: ", employees);
                
                writeToFile(generateTeam(employees));
            }
        }
            
        )
    }

    start();
// //engineer options
// inquirer
//     .prompt([{
//             type: 'input',
//             name: 'engineerName',
//             message: "What is your engineer's name?",
//             validate: engineerNameInput => {
//                 if (engineerNameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter a name.');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'engineerId',
//             message: "What is your engineer's id?",
//             validate: engineerIdInput => {
//                 if (engineerIdInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter an ID.');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'engineerEmail',
//             message: "What is your engineer's email?",
//             validate: engineerEmailInput => {
//                 if (engineerEmailInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter an Email address.');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'engineerGithub',
//             message: "What is your engineer's GitHub username?",
//             validate: engineerGithubInput => {
//                 if (engineerGithubInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter a GitHub username.');
//                     return false;
//                 }
//             }
//         },
//     ])



// //intern options
// inquirer
//     .prompt([{
//             type: 'input',
//             name: 'internName',
//             message: "What is your intern's name?",
//             validate: internNameInput => {
//                 if (internNameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter a name.');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'internId',
//             message: "What is your intern's id?",
//             validate: internIdInput => {
//                 if (internIdInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter an ID.');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'internEmail',
//             message: "What is your intern's email?",
//             validate: internEmailInput => {
//                 if (internEmailInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter an Email address.');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'internSchool',
//             message: "What is your intern's school?",
//             validate: internSchoolInput => {
//                 if (internSchoolInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter a school.');
//                     return false;
//                 }
//             }
//         },
//     ]);

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