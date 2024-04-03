#! /usr/bin/env node
import inquirer from "inquirer";

const systemGenNo = Math.floor(Math.random() * 10);
let counter: number = 4;
let correct:boolean = false;
console.log(systemGenNo);
while (correct === false && counter > 0) {
  let userNo = await inquirer.prompt([
    {
      name: "userinp",
      type: "number",
      message: "Enter number between 0 to 10",
    },
  ]);
  
  if (userNo.userinp === systemGenNo) {
    console.log('Congratulations! your number is Correct');
    correct = true;    
  }
  else{
    counter--;
    console.log(`Sorry! your number is not Correct remaing attempt ${counter}`);
    correct = false;
  }
}
