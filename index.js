const inquirer = require('inquirer');
const generatePage = require('./src/template');
const fs = require('fs');

console.log(`
Welcome to Team Profile Generator.
Please enter your team members's information:
`);
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter team manager's name: ",
        },
        {

            type: 'input',
            name: 'managerId',
            message: "Please enter employee id number:  ",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter team member's email address: ",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter team office number: ",
        }
    ])
    // .then(managerData => {
    //     var teamData;
    //     teamData.managerData = managerData;
    //     if (actionType === 'Engineer') {
    //         console.log("addingEngineer");
    //     } else if (actionType === 'Intern') {
    //         console.log("intern");
    //     } else {
    //         console.log("Exit");
    //     }    
    //     return teamData;
    // })
    .then(managerData => {
        var teamData = {};
        teamData.managerData = managerData;
        return teamData;
    });
};

const promptAction = teamData => {
    if (!teamData.users) {
        teamData.users = [];
    }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'userChoice',
            message: 'Add a user?',
            choices: ['Engineer', 'Intern', 'Finish building my team']
        }
    ])
    .then(action => {
        if (action.userChoice === 'Engineer') {
            return addEngineer(teamData);
        } else if (action.userChoice === 'Intern') {
            return addIntern(teamData);
        } else {
            return teamData;
        }
    });
};

const addIntern = teamData => {
    if (!teamData.interns) {
        teamData.interns = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter intern's name: ",
        },
        {

            type: 'input',
            name: 'id',
            message: "Please enter intern's id number: ",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter intern's email address: ",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school: ",
        }
    ])
    .then(internData => {
        internData.type = 'intern';
        teamData.interns.push(internData);
        return promptAction(teamData);
    });
};

// TODO: Create an array of questions for user input;
const addEngineer = teamData => {
    if (!teamData.engineers) {
        teamData.engineers=[];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter engineer's name: ",
        },
        {

            type: 'input',
            name: 'id',
            message: "Please enter engineer's id number: ",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter engineer's email address: ",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter engineer's github username: ",
        }
    ])
    .then(engineerData => {
        engineerData.type = 'engineer';
        teamData.engineers.push(engineerData);
        return promptAction(teamData);
    });
};

promptManager()
    .then(promptAction)
    .then(teamData => {
        fs.writeFileSync("./index.html", generatePage.generateHTML(teamData));
    });