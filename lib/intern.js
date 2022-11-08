const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    printInfo()  {
        console.log(this.name, this.id, this.email, this.school)
    }

}

const intern = new Intern('matt', 11, 'm@gmail.com', 'example school')

intern.printInfo();