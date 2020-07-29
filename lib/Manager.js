// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, officeNumber, email, role = "Manager") {
    super(name, id, email, role)
    this.officeNumber = 100;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;