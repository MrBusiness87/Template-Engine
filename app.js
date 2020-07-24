const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquire = inquirer.prompt({
  defineEmployee: [{
    type: "list",
    message: "What is your position?",
    name: "userChoice",
    choices: ["Engineer", "Intern", "Manager"]
  }],
  employeeQuestions: [{
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your employee ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter a valid email:",
      name: "email",
    }

  ],
  managerQuestions: [{
    type: "input",
    message: "Office Number",
    name: "officeNumber",
  }],

  engineerQuestions: [{
    type: "input",
    message: "GitHub Username",
    name: "githubUsername"
  }],

  internQuestions: [{
    type: "input",
    message: "School",
    name: "school"
  }]
});

const htmlRenderer = require('./lib/htmlRenderer');

const employeeArray = [];

function init() {
  inquire(employeeQuestions.concat(managerQuestions))
    .then(({
      name,
      id,
      email,
      officeNumber
    }) => {
      let manager = new Manager(name, id, officeNumber, email);
      employeeArray.push(manager);
      getEmployee();
    })
}

function getEmployee() {
  inquire(defineEmployee)
    .then(({
      userChoice
    }) => {
      switch (userChoice) {
        case 'Engineer':
          getEngineer();
          break;
        case 'Intern':
          getIntern();
          break;
        case 'Complete':
          htmlRenderer(employeeArray);
          break;
      }
    })
}

function getEngineer() {
  inquire(employeeQuestions.concat(engineerQuestions))
    .then(({
      name,
      id,
      email,
      githubUsername
    }) => {
      let engineer = new Engineer(name, id, githubUsername, email);
      employeeArray.push(engineer);
      getEmployee();
    })
}

function getIntern() {
  inquire(employeeQuestions.concat(internQuestions))
    .then(({
      name,
      id,
      email,
      school
    }) => {
      let intern = new Intern(name, id, school, email);
      employeeArray.push(intern)
      getEmployee();
    })
}

init();