import inquirer from 'inquirer';
const systemGenNo = Math.floor(Math.random() * 10);
console.log(systemGenNo);
let userNo = await inquirer.prompt([
    {
        name: "userinp",
        type: "number",
        message: "Enter number between 0 to 10"
    }
]);
console.log(userNo.userinp);
