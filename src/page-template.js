const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
      
const generateManager = employee => {
        return `
        <article class="tile is-child box">
        <p class="title has-text-link-dark">${employee.name}</p>
        <p class="subtitle has-text-link-dark">${employee.getRole()}</p>
        <div class="card">
            <header class="card">
                <p class="card-header-title">
                    ID: ${employee.id}
                </p>
                <p class="card-header-title">
                    Email:
                    <a href="mailto: ${employee.email}" target="_blank" rel="noopener noreferrer">${employee.email}</a>
                </p>
                <p class="card-header-title">
                    Office Number: ${employee.officeNumber}
                </p>
            </header>
        </div>
    </article>
    `; 
};
      
const generateEngineer = employee => {
 return `
        <article class="tile is-child box">
        <p class="title has-text-link-dark">${employee.name}</p>
        <p class="subtitle has-text-link-dark">${employee.getRole()}</p>
        <div class="card">
            <header class="card">
                <p class="card-header-title">
                    ID: ${employee.id}
                </p>
                <p class="card-header-title">
                    Email:
                    <a href="mailto: ${employee.email}" target="_blank" rel="noopener noreferrer"> ${employee.email}</a>
                </p>
                <p class="card-header-title">
                    School:
                    <a href="https://github.com/${employee.github}" target="_blank" rel="noopener noreferrer"></a>
                </p>
            </header>
        </div>
    </article>
      `;  
};

const chooseTeam = (employees) => {
  var team = '';
  employees.forEach(employee => {   
    if (employee instanceof Manager){
        team += generateManager(employee);
      } else if (employee instanceof Engineer){
        team += generateEngineer(employee);
      } 
    });
  return team
};

//creates the team information
const generateTeam = (employees) => {
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header class="has-text-centered block">
            <p class="title is-1 has-text-link-dark">Team Information</p>
        </header>
    
        <div class="container is fluid is-flex is-justify-content-center">
            <div class="tile is-flex-wrap-wrap">
        ${chooseTeam(employees)}
      
        
    </div>
    </div>
    </div>
    </div>
    <footer class="has-text-centered">
        <h3 class="has-text-link-dark">🤝 ${new Date().getFullYear()}</h3>
    </footer>
    </body>

    </html>
    `;
};


module.exports = generateTeam;