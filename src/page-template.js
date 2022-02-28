      
const generateEmployee = employeesArr => {
  return `
    ${employeesArr
      .map(({ name, description, languages, link }) => {
        return `
        <div class="col-12 mb-2 bg-dark text-light p-3">
          <h3 class="portfolio-item-title text-light">${name}</h3>
          <h5 class="portfolio-languages">
            Built With:
            ${languages.map(language => language).join(',')}
          </h5>
          <p>${description}</p>
          <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
        </div>

        <article class="tile is-child box">
        <p class="title has-text-link-dark">${name}</p>
        <p class="subtitle has-text-link-dark">${role}</p>
        <div class="card">
            <header class="card">
                <p class="card-header-title">
                    ID:
                </p>
                <p class="card-header-title">
                    Email:
                    <a href="mailto:stensingk@gmail.com" target="_blank" rel="noopener noreferrer">stensingk@gmail.com</a>
                </p>
                <p class="card-header-title">
                    Office Number/GitHub/School
                    <a href="https://github.com/${usernameLink}" target="_blank" rel="noopener noreferrer"></a>
                </p>
            </header>
        </div>
    </article>
    `;
      })
      .join('')}
      `  
};
      

//creates the team information
const generateTeam = () => {
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
        ${generateEmployee(employees)}
        
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
