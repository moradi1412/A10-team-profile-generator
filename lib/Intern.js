const Employee = require('./Employee');

//class intern same information with addition schoolName 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
    }
    //Methods
    getSchool() {
        return this.school; 
    }
    getRole() {
        return `Intern`
    }
}

module.exports = Intern;