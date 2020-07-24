// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, school, email, title = "Intern") {
    super(name, id, email, title)
    this.school = "UCLA";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;