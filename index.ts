           //(Calculator project)

import inquirer from "inquirer";

let Calculator = async () => {
    let question = [
        {
            type: "input",
            name: "num1",
            massage: "enter your first number"
        },
        {
            type: "input",
            name: "num2",
            massage: "enter your second number"
        },
        {
            type: "list",
            name: "operation",
            massage: "select operation",
            choices: [
                `+`,
                `-`,
                `*`,
                `/`,
            ],
        },  
    ]

    let answer = await inquirer.prompt(question);

    let nume1 = parseFloat (answer.num1)
    let nume2 = parseFloat (answer.num2)

    if (answer.operation == `+`) {
        console.log(`${nume1} + ${nume2} = ${nume1 + nume2}`);
    }

    if (answer.operation == `-`) {
            console.log(`${nume1} - ${nume2} = ${nume1 - nume2}`);
    }

    if (answer.operation == `*`) {
        console.log(`${nume1} * ${nume2} = ${nume1 * nume2}`);
    }

    if (answer.operation == `/`) {
        console.log(`${nume1} / ${nume2} = ${nume1 / nume2}`);
    }
};
Calculator()