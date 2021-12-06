const Employee = require('./Employee');

//Engineer with having same employee's information with additional of github, github method
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub () { 
        return this.github;
    }

    getRole() {
        return `Engineer`
    }
}

module.exports = Engineer;