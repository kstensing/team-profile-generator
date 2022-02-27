        
const generateEmployee = employeesArr => {
  return `
  
  <section class="my-3" id="portfolio">
    <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
    <div class="flex-row justify-space-between">
    ${projectsArr
      .filter(({ feature }) => feature)
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
      `;
        <section class="
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
            header.github
          }">GitHub</a>


          <a href="https://github.com/${usernameLink}" target="_blank" rel="noopener noreferrer"></a>

          <a href="mailto:stensingk@gmail.com" target="_blank" rel="noopener noreferrer">stensingk@gmail.com</a>


    `
}





//creates the team information
const generateTeam = teamArr => {
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
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
        <nav class="flex-row">
        </nav>
        </div>
      </header>
      <main class="container my-5">
        ${generateEmployee(employees)}
        
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
      </footer>
    </body>
    </html>
        `
}        
