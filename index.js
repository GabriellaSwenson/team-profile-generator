const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const { writeFile } = require("fs").promises;

let employees = [];

prompts();

function buildTeam() {
  inquirer.prompt({
    type: "list",
    name: "employeeTypes",
    message: "Which employee type do you want to add?",
    choices: ["Manager", "Engineer", "Intern", "Finished"],
  })
  .then((response) => {
    (response.employeeType === 'Manager') {
      inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is their name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is their id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is their email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is their office number?",
    },
  ])
  .then ((response) => {
    const addManager = new Manager(response.name, response.id, response.email, response.officeNumber)
    employees.push(addManager);

    prompts();
  });
} else if (response.employeeType === 'Engineer') {
inquirer.prompt([
      {
      type: "input",
      name: "name",
      message: "What is their name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is their id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is their email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is their Github account name?",
    },
]).then(response => {
  const addEngineer = new Engineer(response.name, response.id, response.email, response.github)
  employees.push(addEngineer);

  prompts();
});
} else if (response.employeeType === 'Intern') {
inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is their name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is their id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is their email?",
    },
    {
      type: "input",
      name: "school",
      message: "What is their school?",
    },
  ]).then(response => {
    const addIntern = new Intern(response.name, response.id, response.email, response.school)
    employees.push(addIntern);

    prompts();
  })
}
  })
}

// const init = () => {
//   const runEmployeePrompts = () => {
//     inquirer
//       .prompt(promptNewEmployee)
//       .then((answersNewEmployee) => {
//         if (answersNewEmployee.promptNewEmployee.includes("No")) {
//           console.log("Program closed."); // You can customize the message
//           return Promise.resolve(); // Return a resolved promise to continue the chain
//         } else {
//           return inquirer.prompt(promptEmployeeType);
//         }
//       })
//       .then((answersEmployeeType) => {
//         const { employeeType } = answersEmployeeType;

//         if (employeeType === "engineer") {
//           return inquirer.prompt(promptEngineer).then(runEmployeePrompts);
//         } else if (employeeType === "intern") {
//           return inquirer.prompt(promptIntern).then(runEmployeePrompts);
//         } else {
//           console.log("Invalid employee type."); // You can customize the message
//           return runEmployeePrompts();
//         }
//       })
//       .catch((err) => console.error(err));
//   };

//   promptManager()
//     .then((answersManager) =>
//       writeFile("index.html", generateManager(answersManager))
//     )
//     .then(runEmployeePrompts)
//     .catch((err) => console.error(err));
// };

// init();

// const generateManager = (promptManager) => {
//   return `
//                   <div class="card m-5 shadow p-0" style="width:300px">
//                       <div class="card-header bg-dark text-white">
//                           <h3>${promptManager.manager()}</h3>
//                           <h4>
//                           <i class="fas fa-user-graduate pr-3"></i>${promptManager.getManager()}
//                           </h4>
//                       </div>
//                       <div class="card-body bg-light">
//                           <ul class="list-group">
//                               <li class="list-group-item">
//                                   <span class="font-weight-bold">ID:</span> ${promptManager.Id()}</li>
//                               <li class="list-group-item">
//                                   <span class="font-weight-bold">Email:</span><a href="mailto:${promptManager.emailManager()}">${promptManager.emailManager()}</a>
//                               </li>
//                               <li class="list-group-item">
//                                   <span class="font-weight-bold">School:</span>${promptManager.officeNumber()}
//                               </li>
//                           </ul>
//                       </div>
//                   </div>
//       `;
// };

// const generateEngineer = (promptEngineer) => {
//   return `
//                   <div class="card m-5 shadow p-0" style="width:300px">
//                       <div class="card-header bg-dark text-white">
//                           <h3>${promptEngineer.engineer()}</h3>
//                           <h4>
//                           <i class="fas fa-user-graduate pr-3"></i>${promptEngineer.getEngineer()}
//                           </h4>
//                       </div>
//                       <div class="card-body bg-light">
//                           <ul class="list-group">
//                               <li class="list-group-item">
//                                   <span class="font-weight-bold">ID:</span> ${promptEngineer.Id()}</li>
//                               <li class="list-group-item">
//                                   <span class="font-weight-bold">Email:</span><a href="mailto:${promptEngineer.emailEngineer()}">${promptEngineer.emailEngineer()}</a>
//                               </li>
//                               <li class="list-group-item">
//                                   <span class="font-weight-bold">School:</span>${promptEngineer.github()}
//                               </li>
//                           </ul>
//                       </div>
//                   </div>
//       `;
// };

// const generateIntern = (promptIntern) => {
//   return `
//                 <div class="card m-5 shadow p-0" style="width:300px">
//                     <div class="card-header bg-dark text-white">
//                         <h3>${promptIntern.intern()}</h3>
//                         <h4>
//                         <i class="fas fa-user-graduate pr-3"></i>${promptIntern.getIntern()}
//                         </h4>
//                     </div>
//                     <div class="card-body bg-light">
//                         <ul class="list-group">
//                             <li class="list-group-item">
//                                 <span class="font-weight-bold">ID:</span> ${promptIntern.Id()}</li>
//                             <li class="list-group-item">
//                                 <span class="font-weight-bold">Email:</span><a href="mailto:${promptIntern.emailIntern()}">${promptIntern.emailIntern()}</a>
//                             </li>
//                             <li class="list-group-item">
//                                 <span class="font-weight-bold">School:</span>${promptIntern.school()}
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//     `;
// };

// const generatePage = () => {
//   `<!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//         <title>My Team</title>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
//         <link rel="stylesheet" href="style.css">
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
//     </head>
//     <body>
//         <header>
//             <div class="text-center">
//                 <nav class="navabar bg-dark text-white text-center pt-3 pb-5">
//                     <div>
//                         <h1>Team</h1>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//         <main>
//             <div class="container">
//                 <div class="row d-flex justify-content-center align-items-center">
//                     ${generateManager}, ${generateEngineer}, ${generateIntern}
//                 </div>
//         </div>
//             </div>
//         </main>
//     </body>
// </html>
//     `;
// };
