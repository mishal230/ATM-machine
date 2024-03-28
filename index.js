#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 230201;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: `WELCOME TO ATM MACHINE!
    Enter your PIN CODE:`
    }]);
if (pinAnswer.pin === mypin) {
    console.log("VALID PIN CODE.");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: "Please Select The Operation",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter your Amount:",
            }]);
        if (amountAns.amount > 10000) {
            console.log("Insufficient Balance!");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your Remaining Balance Is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Balance Is: ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([{
                name: "fastCashAmount",
                type: "list",
                message: "Select your Amount:",
                choices: ["100", "500", "1000", "5000"]
            }]);
        myBalance -= fastCashAns.fastCashAmount;
        console.log(`Your Remaining Balance Is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect PIN CODE!");
}
