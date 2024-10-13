import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "userid",
        message: "enter id"
    },
    {
        type: "number",
        name: "userpin",
        message: "enter pin",
    },
    {
        type: "list",
        name: "transactiontype",
        choices: ["fast cash", "withdraw"],
        message: "select transaction type",
    },
    {
        type: "list",
        name: "amount",
        choices: ["5000", "10,000", "25,000"],
        message: "select transaction type",
        when(answer) {
            return answer.transactiontype == "withdraw";
        }
    },
    {
        type: "list",
        name: "accounttype",
        choices: ["current", "saving"],
        message: "account detail",
    }
]);
if (answer.userid && answer.userpin) {
    const balance = Math.floor(Math.random() * 10000);
    console.log(balance);
    const enterdamount = answer.amount;
    if (balance >= enterdamount) {
        const remaining = balance - enterdamount;
        console.log("your remaing balance is ", remaining);
    }
    else {
        console.log("insuficient balance");
    }
}
