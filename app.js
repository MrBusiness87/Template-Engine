const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

let allAnswers = []
const gatherInfo = async () => {
  const answers = await inquirer.prompt([{
      type: "input",
      message: "Enter Name:",
      name: "name"
    },
    {
      type: "input",
      message: "Enter Employee ID Number:",
      name: "id",
    },
    {
      type: "input",
      message: "Enter Email:",
      name: "email",
    },
    {
      type: "checkbox",
      message: "Position",
      name: "position",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "confirm",
      name: "continue",
      message: "Do you want to enter another employee?",
      default: true,
    },
  ]);
  console.log(answers)
  allAnswers = [...allAnswers, answers]
  if (answers.continue) {
    gatherInfo()
  }
  console.log(allAnswers)
};
gatherInfo()

const htmlRenderer = require('./lib/htmlRenderer');

function htmlRenderer(allAnswers);