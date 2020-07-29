const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var inquirer = require('inquirer');
const htmlRenderer = require('./lib/htmlRenderer');

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
      type: "list",
      message: "Position",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      message: "Manager input office number:",
      name: "officeNumber",
      default: "100",
    },
    {
      type: "input",
      message: "Engineer input GitHub Username:",
      name: "github",
      default: "username@github.com",
    },
    {
      type: "input",
      message: "Inern input School:",
      name: "school",
      default: "UCLA",
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
  init();
};



function init() {

  fs.writeFile("index.html", htmlRenderer(allAnswers),
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("!FILE CREATED!");
    });
}

gatherInfo()