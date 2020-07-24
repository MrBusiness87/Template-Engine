// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, officeNumber, email, title = "Manager") {
    super(name, id, email, title)
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber = 100;
  }
}

module.exports = Manager;