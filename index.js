const fs = require('fs');
const inquirer = require('inquirer');
// const createFile = require('./utils/generateHTML.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const addManager = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter an Email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's id?",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log('Please enter an ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
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
        
        console.log(data);
        this.manager = new Manager(data.managerName, data.managerEmail, data.managerId, data.manager.officeNumber);
        console.log(this.manager);
    })
};
//add employee
addManager();

// const addEmployee = () => {
//     if (!teamData.employees) {
//         teamData.employees = [];
//     }
// return inquirer
//     .prompt([{
//         name: "employeeType",
//         type: "list",
//         message: "Which type of team member would you like to add?",
//         choices: ["Engineer", "Intern", "I don't want to add any more team members"],
//     }, ])
//     .then(employeeData => {
//         teamData.employees.push(employeeData);
         
//     });
// };



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

//     const writeToFile = (fileName, data) => {
//     return new Promise((resolve, reject) => {
//         fs.createFile('./dist/index.html', fileName, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve({
//                 ok: true, 
//                 message: 'Check out your team!'
//             });
//         });
//     });
// };


