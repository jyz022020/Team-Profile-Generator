const Engineer = require("../lib/Engineer.js");
const Manager = require("../lib/Manager.js");

function generateEngineer(engineerData) {
    var engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
    return `
    <div class="employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-1">${engineer.getName()}</h2>
            <h3 class="card-1"><i class="bi bi-eyeglasses"</i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="card-2">
                <li class="card-2-item">ID: ${engineer.getId()}</li>
                <li class="card-2-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="card-2-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `
}

function generateManagerCard(managerData) {
    var manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.officeNumber);
    return `
    <div class="employee-card">
        <div class="card-header bg-primary text-white">
            <h1 class = "card-1">${manager.getName()}</h1>
            <h2 class = "card-1"><i class="fas fa-mug-hot"></i>${manager.getRole()}</h2>
        </div>  
        <div>cardInfo
            <ul class = "card-2">
                <li class = "card-2-item">ID:${manager.getId()}</li>
                <li class = "card-2-item">Email:${manager.getEmail()}</li>
                <li class="card-2-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
}

function generateHTML(teamData) {
    console.log(teamData);
    var htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

            <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            />
            <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
            />
            
            <link rel="stylesheet" href="assets/css/style.css" />
            <title>My team</title>
        </head>
        <body>
            <header>My Team</header>
        `;

        htmlContent += generateManagerCard(teamData.managerData);
        engineerContent = teamData.engineers.map(engineer => generateEngineer(engineer)).join("");
        htmlContent += engineerContent;

        
        htmlContent +=`
        </body>
        </html>
        `;
        return htmlContent;

}

module.exports = {generateHTML};