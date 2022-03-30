const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

const teamMemberHtmlArr = [];


function init() {
    function managerCreate() {
        inquirer.prompt([
            {
              type: 'input',
              name: 'name',
              message: 'What is the managers name?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Managers id?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number?'
            },
        ])
        .then(({name, id, email, officeNumber}) => {
            const manager = new Manager(id, name, email, officeNumber)
            teamMemberHtmlArr.push(generateManagerCard(manager))
            mainMenu()
        })
    }
    function mainMenu() {
        inquirer.prompt([
            {
              type: 'list',
              name: 'addedRole',
              message: 'Would you like to add another employee?',
              choices: ['Engineer', 'Intern', 'I am finished']
            }, 
        ])
        .then(answers => {
            switch (answers.addedRole) {
                case "Engineer":
                    return engineerCreate();
                    case "Intern":
                        return InternCreate();
                    default:
                        return generateHtml;
            }
        });
    }
    function engineerCreate() {
        inquirer.prompt([
            {
              type: 'input',
              name: 'name',
              message: 'What is the engineers name?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineers email?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineers id?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github?'
            },
        ])
        .then(({name, id, email, github}) => {
            const engineer = new Engineer(id, name, email, github)
            teamMemberHtmlArr.push(generateManagerCard(engineer))
            mainMenu();
        });
    }
    function internCreate() {
        inquirer.prompt([
            {
              type: 'input',
              name: 'name',
              message: 'What is the interns name?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the interns email?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the interns id?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is your school?'
            },
        ])
        .then(({name, id, email, school}) => {
            const intern = new Intern(id, name, email, school)
            teamMemberHtmlArr.push(generateManagerCard(intern))
            mainMenu();
        });
    }
    managerCreate();
}

init();