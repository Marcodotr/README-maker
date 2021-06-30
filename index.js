const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);


const questions = () => {
    return inquirer.prompt([
  {
    type: 'input',
    message: "Title of Project",
    name: "title",
  },
  {
    type: "input",
    message: "Description of project",
    name: "description",
  },
  {
    type: "input",
    message: "Describe installation process if needed",
    name: "installation",
  },
  {
    type: "input",
    message: "How can the user expect to use your project",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "Chose licence for project",
    name: "licence",
    choices: ["BSD", "MIT", "GPL"],
  },
  {
    type: "input",
    message: "Who are the contributors of this project",
    name: "contributors",
  },
  {
    type: "input",
    message: "Tests included in project",
    name: "test",
  },
  {
    type: "input",
    message: "Please enter your GitHub username:",
    name: "username",
  },
  {
    type: "input",
    message: "Please enter your email:",
    name: "email",
  },
]);
}

const genDoc = (answers) => {
    return `
# ${answers.title}
    
## Description

${answers.description}

## Table of Contents
> - [Description](#description)
>
> - [Installation](#installation)
>
> - [Usage](#usage)
> 
> - [Contributors](#contributors)
>
> - [Tests](#tests)
> 
> - [Contact Me](#contact)
> 
> - [Licence](#licence)
    
    
## Installation
    ${answers.installation}
    
## Usage
    ${answers.usage}
    
## Contributors
    ${answers.contributors}
    
## Tests
    ${answers.test}
    
## Contact
GitHub: [${answers.username}](https://github.com/${answers.username})
Email: ${answers.email}

## Licence
${answers.licence}`
}



// function writefile(name,data) {
//     writeFileAsync(name,data)
// }
function init() {
    questions()
.then((answers) => writeFileAsync('README.md',genDoc(answers)))
.catch((err)=> console.error(err))
}
init()

