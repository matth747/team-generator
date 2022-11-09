const inquirer = require('inquirer')
const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    printInfo()  {
        console.log(this.name, this.id, this.email, this.school)
    }
    getEmployeeType() {
        return 'intern'
    }
    
}

module.exports = Intern;