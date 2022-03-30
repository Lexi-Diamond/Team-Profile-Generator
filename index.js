const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

const {
    generateEngineerCard,
    generateInternCard,
    generateManagerCard,
    baseHtml} = require("./src/htmlGen");

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
                    return internCreate();
                case "I am finished":
                    return generateHtml();
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
            teamMemberHtmlArr.push(generateEngineerCard(engineer))
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
            teamMemberHtmlArr.push(generateInternCard(intern))
            mainMenu();
        });
    }
    function generateHtml () {
        fs.writeFile("./dist/index.html", baseHtml(teamMemberHtmlArr), (err) => {
            err ? console.log(err) : console.log("Generated HTML File")
        })
    }
    managerCreate();
}

init();