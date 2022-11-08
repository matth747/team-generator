const inquirer = require('inquirer')
const fs = require('fs')

const createHtml = (name, id, email, office) => 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>${name}</h1>
  <h1>${id}</h1>
  <h1>${email}</h1>
  <h1>${office}</h1>
</body>
</html>`


function startApp() {
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
        },
        {
            type: 'list',
            message: 'What is your office number?',
            name: 'office',
        },
        
        
    ])}
    function makeHtml() {
        startApp()

        .then((response) => {
            //
            const myHtml = createHtml(response.name, response.id, response.email, response.office)

        fs.writeFile('index.html', myHtml, (err) =>
        err ? console.log(err) : console.log('success')
        )

        })
    }
    makeHtml()