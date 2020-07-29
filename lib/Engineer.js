// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, github, email, role = "Engineer") {
    super(name, id, email, role)
    this.github = "GitHubUser";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;