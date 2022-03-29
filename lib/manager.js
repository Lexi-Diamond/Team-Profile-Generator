const Employee = require("./employee")

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}
module.exports = Manager