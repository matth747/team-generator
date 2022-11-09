const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, git) {
        super(name, id, email)
        this.git = git;
    }
    printInfo()  {
        console.log(this.name, this.id, this.email, this.git)
    }
    getEmployeeType() {
        return 'engineer'
    }
}


module.exports = Engineer;