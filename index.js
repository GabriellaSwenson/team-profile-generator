const inquirer = require("inquirer");

const { writeFile } = require("fs").promises;

const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "manager",
      message: "What is their name?",
    },
    {
      type: "input",
      name: "Id",
      message: "What is their id number?",
    },
    {
      type: "input",
      name: "emailManager",
      message: "What is their email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is their office number?",
    },
  ]);
};

const promptNewEmployee = () => {
  return inquirer.prompt([
    {
      type: "checkbox",
      message: "Would you like to add another employee?",
      name: "newEmployee",
      choices: ["Yes", "No"],
    },
  ]);
};

const promptEmployeeType = () => {
  return inquirer.prompt([
    {
      type: "checkbox",
      message: "Which employee type would you like to add?",
      name: "employeeType",
      choices: ["Engineer", "Intern"],
    },
  ]);
};

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineer",
      message: "What is their name?",
    },
    {
      type: "input",
      name: "Id",
      message: "What is their id number?",
    },
    {
      type: "input",
      name: "emailEngineer",
      message: "What is their email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is their Github account name?",
    },
  ]);
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "intern",
      message: "What is their name?",
    },
    {
      type: "input",
      name: "Id",
      message: "What is their id number?",
    },
    {
      type: "input",
      name: "emailIntern",
      message: "What is their email?",
    },
    {
      type: "input",
      name: "school",
      message: "What is their school?",
    },
  ]);
};

const init = () => {
  promptManager()
    .then((answersManager) =>
      writeFile("index.html", generateManager(answersManager))
    )
    .then(() => {
      if (promptNewEmployee.includes("Yes")) {
        return inquirer.prompt(promptEmployeeType);
      } else {
        console.log("Program closed.");
        return Promise.resolve();
      }
    })
    .catch((err) => console.error(err));
};

init();

const generateIntern = (promptIntern) => {
  return `
                <div class="card m-5 shadow p-0" style="width:300px">
                    <div class="card-header bg-dark text-white">
                        <h3>${promptIntern.intern()}</h3>
                        <h4>
                        <i class="fas fa-user-graduate pr-3"></i>${promptIntern.getIntern()}
                        </h4>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="font-weight-bold">ID:</span> ${promptIntern.Id()}</li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Email:</span><a href="mailto:${promptIntern.emailIntern()}">${promptIntern.emailIntern()}</a>
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">School:</span>${promptIntern.school()}
                            </li>
                        </ul>
                    </div>
                </div>
    `;
};

const generateEngineer = (promptEngineer) => {
  return `
                  <div class="card m-5 shadow p-0" style="width:300px">
                      <div class="card-header bg-dark text-white">
                          <h3>${promptEngineer.engineer()}</h3>
                          <h4>
                          <i class="fas fa-user-graduate pr-3"></i>${promptEngineer.getEngineer()}
                          </h4>
                      </div>
                      <div class="card-body bg-light">
                          <ul class="list-group">
                              <li class="list-group-item">
                                  <span class="font-weight-bold">ID:</span> ${promptEngineer.Id()}</li>
                              <li class="list-group-item">
                                  <span class="font-weight-bold">Email:</span><a href="mailto:${promptEngineer.emailEngineer()}">${promptEngineer.emailEngineer()}</a>
                              </li>
                              <li class="list-group-item">
                                  <span class="font-weight-bold">School:</span>${promptEngineer.github()}
                              </li>
                          </ul>
                      </div>
                  </div>
      `;
};

const generateManager = (promptManager) => {
  return `
                  <div class="card m-5 shadow p-0" style="width:300px">
                      <div class="card-header bg-dark text-white">
                          <h3>${promptManager.manager()}</h3>
                          <h4>
                          <i class="fas fa-user-graduate pr-3"></i>${promptManager.getManager()}
                          </h4>
                      </div>
                      <div class="card-body bg-light">
                          <ul class="list-group">
                              <li class="list-group-item">
                                  <span class="font-weight-bold">ID:</span> ${promptManager.Id()}</li>
                              <li class="list-group-item">
                                  <span class="font-weight-bold">Email:</span><a href="mailto:${promptManager.emailManager()}">${promptManager.emailManager()}</a>
                              </li>
                              <li class="list-group-item">
                                  <span class="font-weight-bold">School:</span>${promptManager.officeNumber()}
                              </li>
                          </ul>
                      </div>
                  </div>
      `;
};

const generatePage = {
  generateManager,
  generateEngineer,
  generateIntern,
}`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
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
                    ${generateManager}, ${generateEngineer}, ${generateIntern}
                </div>
            </div>
        </main>
    </body>
</html>
    `;
