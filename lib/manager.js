const Employee = require('./employee.js')

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        
        this.office = office;
        }
        printInfo()  {
            console.log(this.name, this.id, this.email, this.office)
        }
        getEmployeeType() {
            return 'manager'
        }
    }


    module.exports = Manager;