const fs = require('fs');
const inquirer = require('inquirer')




inquirer
  .prompt([
    {
      type: 'input',
      message: 'Title of Project',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description of project',
      name: 'description',

    },
    {
      type: 'input',
      message: 'Describe installation process if needed',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'How can the user expect to use your project',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message:'Chose licence for project',
        name:'licence',
        choices:[
            'BSD',
            'MIT',
            'GPL'
        ]
    },
    {
        type: 'input',
        message:'Who are the contributors of this project',
        name:'contributors',
    },
    {
        type: 'input',
        message:'Tests included in projext',
        name:'test',
    },
    {
        type:'input',
        message:'Please enter your GitHub username:',
        name:'username',
    },
    {
        type:'input',
        message:'Please enter your email:',
        name:'email',
    }
  ])
  .then((response) => {   
    function readmeGen(response){
        return `
    ## ${response.title}
            
    ## Description
        
        ${response.description}
        
    ## Table of Contents
         - [Description](#description)
         - [Installation](#intallation)
         - [Usage](#usage)
         - [Contributors](#contributors)
         - [Tests](#tests)
         - [Contact Me](#contact)
         - [Licence](#licence)
         
         
    ## Installation
        ${response.installation}
         
    ## Usage
        ${response.usage}
         
    ## Contributors
        ${response.contributors}
         
    ## Tests
        ${response.test}
         
    ## Contact
        GitHub: [${response.username}](https://github.com/${response.username})
        Email: ${response.email}`
    }  

    fs.writeFile('README.md',readmeGen(response), (err) => {
         if(err){
             console.log(err)
         }
     })
    })
  