// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
  constructor(school, role) {
    this.school = school;
    this.role = role;
  }
  printInfo() {
    for (var key in this) {
      console.log(`${key}: ${this[key]}`);
    }
  }
}

module.exports = Intern;