var fs = require("fs");
var inquirer = require("inquirer");
var fileName = "goodREADME.md";
const Choices = require("inquirer/lib/objects/choices");

const questionArr = [
    "What is your name?",
    "What is your email?",
    "What is your project title?",
    "Please give a description of your project.",
    "Please list the different sections in your table of contents",
    "Describe how to use your app.",
    "What license would you like for this app?",
    "Give your message for future contributors.",
    "Tests",
    "What is the best way to contact you?"
];
function init() {
    promptUser();
}

init();
function promptUser(){
    inquirer.prompt([
        {
            type: "input",
            message: questionArr[0],
            name: "userName"
        },
        {
            type: "input",
            message: questionArr[1],
            name: "userEmail"
        },
        {
            type: "input",
            message: questionArr[2],
            name: "projecTitle"
        },
        {
            type: "input",
            message: questionArr[3],
            name: "description"
        },
        {
            type: "input",
            message: questionArr[4],
            name: "contents"
        },
        {
            type: "input",
            message: questionArr[5],
            name: "usage"
        },
        {
            type: "checkbox",
            status: () => {return choices},
            message: questionArr[6],
            name: "licenses",
            choices: [
                {name: "MIT", value : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", checked: false},
                {name: "Apache 2.0", value : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", checked: false},
                {name: "ODbL", value : "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)", checked: false},
                {name: "None", value : "", checked: false},
            ]
        },
        {
            type: "input",
            message: questionArr[7],
            name: "contributing"
        },
        {
            type: "input",
            message: questionArr[8],
            name: "tests"
        },
        {
            type: "input",
            message: questionArr[9],
            name: "questions"
        }
    ]).then(function(response){
        console.log(response);
        responses =
        {
          title: response.projecTitle,
          description: response.description,
          table: response.contents,
          install: "None yet",
          usage: response.usage,
          license: response.licenses,
          contribute: response.contributing,
          tests: response.tests,
          questions: response.questions,
          name: response.userName,
          email: response.userEmail
        }
        var generateMarkdown = require("./utils/markdown.js");
        writeToFile(fileName,generateMarkdown(responses));
    })
  };
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err)
            throw err;

        console.log("Dope, check the GeneratedReadMe folder to view your README.md");
    });
}
