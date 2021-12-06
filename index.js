const inquirer = require ('inquirer'); 
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const generateSite = require('./src/generate-site.js');
const fs = require("fs");
const path = require("path");
const output = path.resolve(__dirname, "output")
const outputPath = path.join(output, "team-Profile-generator.html");
const team = []; 


function userInput () { 
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: "Please enter the manager's name?"
        },
        {
            type:'input',
            name: 'id',
            message: "Please enter the manager's id"
        },
        {
            type: 'input',
            name: 'email',
            message: "enter the manager's email"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "enter the manager's office number"
        }])
        .then( answers => {
            const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber ); 
            team.push(manager); 
            additionalMember(); 
        })
};

const additionalMember = () => {
    return inquirer.prompt([
        {
            type:'list',
            name: 'roles',
            message: "which type of team member would like to add", 
            choices: ['Engineer', 'Intern', 'I dont want add any new one']
        }])
        .then (answers => {
            switch (answers.roles) { 
                case "Engineer" : addEngineer(); break;
                case "Intern"   : addIntern (); break; 
                case "I dont want add any new one" : generateHTML(); 
            }   
        })
};

const addEngineer = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of engineer?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username'
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        additionalMember();
    })
};


const addIntern = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter your school name',
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        additionalMember();
    })
};

const generateHTML = () => {
    console.log(`Finishing building the HTML`);
    if (!fs.existsSync(output)) {
        fs.mkdirSync(output)
    }
    fs.writeFileSync(outputPath, generateSite(team), "utf-8");
}

userInput(); 