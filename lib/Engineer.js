// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, github, email, title = "Engineer") {
    super(name, id, email, title)
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;