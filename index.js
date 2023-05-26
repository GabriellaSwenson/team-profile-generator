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
      name: "email",
      message: "What is their email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is their office number?",
    },
  ]);
};

const promptEmployee = () => {
  return inquirer.prompt([
    {
      type: "checkbox",
      message: "Would you like to add another employee?",
      name: "newEmployee",
      choices: ["Yes", "No"],
    },
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
    .then((answers) => writeFile("index.html", generateHTML(answers)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
};

init();
