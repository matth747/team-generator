const inquirer = require('inquirer')
const fs = require('fs')

// 3 employee subclasses
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

//created an empty array for the employees to be pushed to
const employees = []

// function to take inputs and put them in this html 
const createHtml = (childHtml) => 
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
<title>Document</title>
</head>
<body>
<main class="container">
<div class="row">
${childHtml}
</div>
</main>
</body>
</html>`

const createTeam = () => {
    
    const employeeHtml = employees.map(employee => {
        if (employee.getEmployeeType() === 'manager') {
            //manager specific html
            return`
            <div class="col-3 card-body bg-primary m-3">
            <p>manager name: ${employee.name}</p>
            <p>Id: ${employee.id}</p>
            <p>Email: ${employee.email}</p>
            <p>Office #: ${employee.office}</p>
            </div>
            `
        } else if (employee.getEmployeeType() === 'engineer') {
            return`
            <div class="col-3 card-body bg-info m-3">
            <p>Engineer name: ${employee.name}</p>
            <p>Id: ${employee.id}</p>
            <p>Email: ${employee.email}</p>
            <p>Gitbhub: ${employee.git}</p>
            </div>
            `
        } else if (employee.getEmployeeType() === 'intern') {
            return`
            <div class="col-3 card-body bg-success m-3">
            <p>Intern name: ${employee.name}</p>
            <p>Id: ${employee.id}</p>
            <p>Email: ${employee.email}</p>
            <p>School: ${employee.school}</p>
            </div>
            `
        }
        
    })
    return createHtml(employeeHtml.join(''))
}

//this function checks whether you would like to add another or stop
//1st call after initial manager 
function addTeamMember() {
    return inquirer
    .prompt([
        {
            type: 'list',
            message: 'Would you like to add an engineer or intern?',
            name: 'choice',
            choices: (['engineer', 'intern', 'Finished with team'])
        }
    ])
    .then(answer => {
        if (answer.choice === 'engineer'){
            createEngineer();
        }
        else if (answer.choice === 'intern'){
            //intern function 
            createIntern();
        } else {
            //create the team from here
            makeHtml()
        }
    }) 
}


function createEngineer() {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your engineer\'s name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your engineer\'s ID',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your engineer\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your engineer\'s github username?',
            name: 'git',
        }
    ])
    .then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.git)
        
        employees.push(engineer)
        addTeamMember()
    })
}


function createIntern() {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your intern\'s name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your employee\'s ID',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your intern\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your intern\'s school?',
            name: 'school',
        }
    ])
    .then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        
        employees.push(intern)
        addTeamMember()
    })
}


function createManager() {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your employee ID',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'office',
        }
    ])
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.office)
        
        employees.push(manager)
        
        addTeamMember()
    })
}

function makeHtml() {
    
    const myHtml = createHtml(createTeam(employees))
    
    fs.writeFile('index.html', myHtml, (err) =>
    err ? console.log(err) : console.log('success!')
    )
}
createManager()