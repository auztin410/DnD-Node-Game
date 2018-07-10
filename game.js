var inquirer = require("inquirer");

var playersHp = 100;
var goblinHp = 15;


inquirer
    .prompt([
        {
            type: "input",
            message: "What's your Character's Name?",
            name: "name"
        },
        {
            type: "list",
            message: "Choose a weapon to use in battle!",
            choices: ["Sword", "Bow and Arrows", "Mace", "Stick"],
            name: "weapon"
        },
        {
            type: "confirm",
            message: "Did you enter everything correctly?",
            name: "confirm",
            default: true
        }
    ])
    .then(function (inquirerResponse) {
        if (inquirerResponse.confirm === false) {
            console.log("You aren't ready to go on your adventure please try again.")
            return;
        }
        else {
            console.log("You are ready to go on your adventure " + inquirerResponse.name + " you have your " + inquirerResponse.weapon + " to aide your in combat!");
            console.log("A goblin attacks you on your way our of town!");
            
            inquirer.prompt([
                    {
                        type: "list",
                        choices: [1, 2, 3, 4, 5],
                        message: "Choose an attack number!",
                        name: "attackNumber1"
                    }
                ])
                .then(function (inquirerResponse) {
                    var randomNumber = Math.floor(Math.random() * 5) + 1;

                    if (inquirerResponse.attackNumber1 === randomNumber) {
                        goblinHp - 5;
                        console.log("You did 5 Damage to the goblin! it has " + goblinHp + " Hp left.")
                    }
                    else {
                        playersHp - 5;
                        console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);
                    }

                })
        }


    })