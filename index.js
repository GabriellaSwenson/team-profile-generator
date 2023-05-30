const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

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
} else if (response.employeeType === 'Finished') {
  const createPage = generateMarkdown(employees);
  fs.writeFile('./html generators/markdown.js', createMarkdown(err), (err) => {
    if (err) throw err;
  
    console.log('HTML file has been created!');
  });  
}
  })
}
