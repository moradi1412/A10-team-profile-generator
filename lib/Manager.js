const Employee = require('./Employee');

//manager with having same employee's information with additional office's number
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return `Manager`
    }
}

module.exports = Manager;