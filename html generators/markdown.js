const generatePage = (page) => {
  const generateManager = (manager) => {
    return `
                        <div class="card m-5 shadow p-0" style="width:300px">
                            <div class="card-header bg-dark text-white">
                                <h3>${manager.getName()}</h3>
                                <h4>
                                <i class="fas fa-user-graduate pr-3"></i>${manager.getRole()}
                                </h4>
                            </div>
                            <div class="card-body bg-light">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <span class="font-weight-bold">ID:</span> ${manager.getId()}</li>
                                    <li class="list-group-item">
                                        <span class="font-weight-bold">Email:</span><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                                    </li>
                                    <li class="list-group-item">
                                        <span class="font-weight-bold">Office Number:</span>${manager.getOfficeNumber()}
                                    </li>
                                </ul>
                            </div>
                        </div>
            `;
  };

  const generateEngineer = (engineer) => {
    return `
                    <div class="card m-5 shadow p-0" style="width:300px">
                        <div class="card-header bg-dark text-white">
                            <h3>${engineer.getName()}</h3>
                            <h4>
                            <i class="fas fa-user-graduate pr-3"></i>${engineer.getRole()}
                            </h4>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <span class="font-weight-bold">ID:</span> ${engineer.getId()}</li>
                                <li class="list-group-item">
                                    <span class="font-weight-bold">Email:</span><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                                </li>
                                <li class="list-group-item">
                                    <span class="font-weight-bold">Github:</span>${engineer.getGithub()}
                                </li>
                            </ul>
                        </div>
                    </div>
        `;
  };

  const generateIntern = (intern) => {
    return `
                  <div class="card m-5 shadow p-0" style="width:300px">
                      <div class="card-header bg-dark text-white">
                          <h3>${intern.getName()}</h3>
                          <h4>
                          <i class="fas fa-user-graduate pr-3"></i>${intern.getRole()}
                          </h4>
                      </div>
                      <div class="card-body bg-light">
                          <ul class="list-group">
                              <li class="list-group-item">
                                  <span class="font-weight-bold">ID:</span> ${intern.getId()}</li>
                              <li class="list-group-item">
                                  <span class="font-weight-bold">Email:</span><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                              </li>
                              <li class="list-group-item">
                                  <span class="font-weight-bold">School:</span>${intern.getSchool()}
                              </li>
                          </ul>
                      </div>
                  </div>
      `;
  };

  const markdown = [];

  markdown.push(
    page
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  markdown.push(
    page
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  markdown.push(
    page
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return markdown.join("");
};

module.exports = (page) => {
  return `<!DOCTYPE html>
     <html lang="en">
         <head>
             <meta charset="UTF-8" />
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
             <meta http-equiv="X-UA-Compatible" content="ie=edge" />
             <title>My Team</title>
             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
         </head>
         <body>
             <header>
                 <div class="text-center">
                     <nav class="navabar bg-dark text-white text-center pt-3 pb-5">
                         <div>
                             <h1>Team</h1>
                         </div>
                     </nav>
                 </div>
             </header>
             <main>
                 <div class="container">
                     <div class="row d-flex justify-content-center align-items-center">
                         ${generatePage(page)}
                     </div>
             </div>
                 </div>
             </main>
         </body>
     </html>
        `;
};
