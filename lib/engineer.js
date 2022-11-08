const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, git) {
        super(name, id, email)
        this.git = git;
    }
    printInfo()  {
        console.log(this.name, this.id, this.email, this.git)
    }
}

const engineer = new Engineer('matt', 22, 'm@gmail.com', 'githubusername')

engineer.printInfo();