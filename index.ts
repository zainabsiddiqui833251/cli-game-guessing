#! /usr/bin/env node

import inquirer from "inquirer";

// Steps:

// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) Compare user input with computer generated random number

const randomNumber:number = Math.floor(Math.random() * 10 + 1) ;

const answers = await inquirer.prompt([{
    name : "userGuessedNumber",
    type : "number",
    message : "Please guess a number between 1 - 10:",
}
])

if(answers.userGuessedNumber === randomNumber){
    console.log("Congrats! you guessed the correct number...")
}else{
    console.log("You guessed wrong number!")
}