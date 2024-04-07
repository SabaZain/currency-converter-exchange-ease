#! /usr/bin/env node
// Currency Converter
import inquirer from "inquirer";
import chalk from "chalk";
// Print Welcome Message
console.log(chalk.magentaBright.bold("\n \tWelcome to Code With Saba - Currency-Converter-Exchange-Ease\n"));
// Define the list of currencies and their exchange rates
const currency = {
    USD: 1, // Base Currency
    EUR: 0.92, // European Currency
    JPY: 151.61, // Japenese Currency
    CAD: 1.36, // Canadian Dollar
    AUD: 1.52, // Australian Dollar
    PKR: 277.54, // Pkistan Rupees
    EGP: 47.50, // Egyptian Pound
    INR: 83.29 // Indian Rupee
};
let userAnswer = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: chalk.yellow("Select the currency to convert from:"),
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR", "EGP", "INR"]
    },
    {
        name: "toCurrency",
        type: "list",
        message: chalk.yellow("Select the currency to convert into:"),
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR", "EGP", "INR"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.yellow("Enter the amount to convert:")
    }
]);
let fromAmount = currency[userAnswer.fromCurrency];
let toAmount = currency[userAnswer.toCurrency];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.blueBright(convertedAmount.toFixed(2)));
console.log(chalk.green.bold("Thankyou for using this application"));
