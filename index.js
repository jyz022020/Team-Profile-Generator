const inquirer = require('inquirer');
const fs = require('fs');
//const markdown = require('./utils/generateMarkdown');

console.log(`
Welcome to Team Profile Generator.
Please enter your team members's information:
`);

// TODO: Create an array of questions for user input;
const addUsers = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter team members name: ",
            // validate: nameInput => {
            //   if (nameInput) {
            //     return true;
            //   } else {
            //     console.log('Please enter your name!');
            //     return false;
            //   }
            // }
        },
        {
            type: 'input',
            name: 'role',
            message: "Please select team member's role. ",
            choice: [
                'Engineer',
                'Intern',
                'Manager'
            ]
        },
        {

            type: 'input',
            name: 'id',
            message: "Please enter team member's id number. ",
        },
        {
        type: 'input',
        name: 'email',
        message: "Please enter team member's email address",
      },
    ]);
};

addUsers()
.then (function({name, role, id, email}){
    // let roleInfo = "";
    // if (role == "Engineer") {
    //     roleInfo = "Githun username";
    // } else if (roleInfo == )
    console.log(name);
    console.log(role);
    console.log(id);
    console.log(email);
})
