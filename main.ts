import inquirer from "inquirer";

let mySavings = 10000;
let myPin = 3456;

    let pinAnswer = await inquirer.prompt({
        name: "pin",
        message: "Enter your pin code ",
        type: "number"
    });

    if (pinAnswer.pin === myPin) 
        console.log("Your pin code is valid!!!");

        let operationChoices = ["withdraw", "check balance"];

                let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Select option",
                type: "list",
                choices: operationChoices
            }
        ]);

        if (operationAns.operation === "withdraw") {
            let fastAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    message: "Enter your amount",
                    type: "list",
                    choices: ["500", "1000", "10000", "25000"]
                }
            ]);
            let amount = (fastAns.fastCash);
            if (mySavings >= amount){
                mySavings -= amount 
                console.log(`Your remaining balance is: ${mySavings}`); 
            }
            else if (fastAns.fastCash != "mySavings"){
                console.log("Transaction is not possible. Insufficient Funds.");
            }

        } else if (operationAns.operation === "check balance") {
            console.log(`Your balance is: ${mySavings}`);
        } 
          
    else {
        console.log("Your pin code is not valid");
    }


