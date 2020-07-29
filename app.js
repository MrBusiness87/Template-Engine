const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var inquirer = require('inquirer');
const render = require('./lib/htmlRenderer');

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
  switch (answers.role) {
    case "Manager":
      const newManager = new Manager(answers.name, answers.id, answers.officeNumber, answers.email)
      console.log(newManager);
      allAnswers = [...allAnswers, newManager]
      break;
    case "Intern":
      const newIntern = new Intern(answers.name, answers.id, answers.school, answers.email)
      console.log(newIntern);
      allAnswers = [...allAnswers, newIntern]
      break;
    case "Engineer":
      const newEngineer = new Engineer(answers.name, answers.id, answers.github, answers.email)
      console.log(newEngineer);
      allAnswers = [...allAnswers, newEngineer]
      break;

    default:
      break;
  }
  if (answers.continue) {
    gatherInfo()
  }
  console.log(allAnswers)
  init();
};



function init() {
  fs.writeFileSync('index.html', render(allAnswers), "utf-8")
  // function (err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("!FILE CREATED!");
  // });
}


gatherInfo()