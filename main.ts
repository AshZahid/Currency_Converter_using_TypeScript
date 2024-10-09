import inquirer from "inquirer";

const currency:any = {
    USD: 1,       // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
}

let input = await inquirer.prompt([
    {
    name: "from",
    messae: "Enter from currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"]

    },

    {
        name: "to",
        messae: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    
        },

        {
            name: "amount",
            type: "number",
            message: "Enter your Amount:"
        }
])

let fromAmount = currency[input.from]
let toAmount = currency[input.to]
let amount = input.amount

let convertAmount = amount /fromAmount * toAmount 
console.log(Math.round(convertAmount))