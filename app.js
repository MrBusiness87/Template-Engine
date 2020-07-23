const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const {
  defineEmployee,
  employeeQuestions,
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = inquire;

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
const inquire = inquirer.prompt({
  defineEmployee: [{
    type: "list",
    message: "Enter Personnel:",
    name: "userChoice",
    choices: ["Engineer", "Intern", "Complete"]
  }],
  employeeQuestions: [{
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "Please enter your employee ID number:",
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
  inquirer
    .prompt(employeeQuestions.concat(managerQuestions))
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
  inquirer
    .prompt(defineEmployee)
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

function getIntern() {
  inquirer
    .prompt(employeeQuestions.concat(internQuestions))
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