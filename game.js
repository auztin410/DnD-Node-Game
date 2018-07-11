var inquirer = require("inquirer");

var playersHp = 50;
var goblinsHp = 15;

function goblinAttack() {
    playersHp--
    playersHp--
    playersHp--
    playersHp--
    playersHp--

}

function yourAttack() {
    goblinsHp--
    goblinsHp--
    goblinsHp--
    goblinsHp--
    goblinsHp--
}

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
            console.log("You are ready to go on your adventure " + inquirerResponse.name + " you have your " + inquirerResponse.weapon + " to aide you in combat!");
            console.log("A goblin attacks you on your way our of town!");
        }
        inquirer.prompt([
            {
                type: "list",
                choices: ["1", "2", "3", "4", "5"],
                message: "Choose an attack number!",
                name: "attackNumber1"
            }
        ])
            .then(function (inquirerResponse) {
                var randomNumber = Math.floor(Math.random() * 5) + 1;

                if (inquirerResponse.attackNumber1 == randomNumber) {
                    yourAttack();
                    console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")
                }
                else {
                    goblinAttack();
                    console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);
                }

                inquirer.prompt([
                    {
                        type: "list",
                        choices: ["1", "2", "3", "4", "5"],
                        message: "Choose an attack number!",
                        name: "attackNumber1"
                    }
                ])
                    .then(function (inquirerResponse) {
                        var randomNumber = Math.floor(Math.random() * 5) + 1;

                        if (inquirerResponse.attackNumber1 == randomNumber) {
                            yourAttack();
                            console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                            if (goblinsHp == 0) {
                                console.log("You have defeated the goblin! YOU WIN!");
                                return;
                            }
                        }
                        else {
                            goblinAttack();
                            console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                            if (playersHp == 0) {
                                console.log("You have been killed by the goblin! YOU LOSE!");
                                return;
                            }
                        }

                        inquirer.prompt([
                            {
                                type: "list",
                                choices: ["1", "2", "3", "4", "5"],
                                message: "Choose an attack number!",
                                name: "attackNumber1"
                            }
                        ])
                            .then(function (inquirerResponse) {
                                var randomNumber = Math.floor(Math.random() * 5) + 1;

                                if (inquirerResponse.attackNumber1 == randomNumber) {
                                    yourAttack();
                                    console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                    if (goblinsHp == 0) {
                                        console.log("You have defeated the goblin! YOU WIN!");
                                        return;
                                    }
                                }
                                else {
                                    goblinAttack();
                                    console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                    if (playersHp == 0) {
                                        console.log("You have been killed by the goblin! YOU LOSE!");
                                        return;
                                    }
                                }

                                inquirer.prompt([
                                    {
                                        type: "list",
                                        choices: ["1", "2", "3", "4", "5"],
                                        message: "Choose an attack number!",
                                        name: "attackNumber1"
                                    }
                                ])
                                    .then(function (inquirerResponse) {
                                        var randomNumber = Math.floor(Math.random() * 5) + 1;

                                        if (inquirerResponse.attackNumber1 == randomNumber) {
                                            yourAttack();
                                            console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                            if (goblinsHp == 0) {
                                                console.log("You have defeated the goblin! YOU WIN!");
                                                return;
                                            }
                                        }
                                        else {
                                            goblinAttack();
                                            console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                            if (playersHp == 0) {
                                                console.log("You have been killed by the goblin! YOU LOSE!");
                                                return;
                                            }
                                        }

                                        inquirer.prompt([
                                            {
                                                type: "list",
                                                choices: ["1", "2", "3", "4", "5"],
                                                message: "Choose an attack number!",
                                                name: "attackNumber1"
                                            }
                                        ])
                                            .then(function (inquirerResponse) {
                                                var randomNumber = Math.floor(Math.random() * 5) + 1;

                                                if (inquirerResponse.attackNumber1 == randomNumber) {
                                                    yourAttack();
                                                    console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                                    if (goblinsHp == 0) {
                                                        console.log("You have defeated the goblin! YOU WIN!");
                                                        return;
                                                    }
                                                }
                                                else {
                                                    goblinAttack();
                                                    console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                                    if (playersHp == 0) {
                                                        console.log("You have been killed by the goblin! YOU LOSE!");
                                                        return;
                                                    }
                                                }

                                                inquirer.prompt([
                                                    {
                                                        type: "list",
                                                        choices: ["1", "2", "3", "4", "5"],
                                                        message: "Choose an attack number!",
                                                        name: "attackNumber1"
                                                    }
                                                ])
                                                    .then(function (inquirerResponse) {
                                                        var randomNumber = Math.floor(Math.random() * 5) + 1;

                                                        if (inquirerResponse.attackNumber1 == randomNumber) {
                                                            yourAttack();
                                                            console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                                            if (goblinsHp == 0) {
                                                                console.log("You have defeated the goblin! YOU WIN!");
                                                                return;
                                                            }
                                                        }
                                                        else {
                                                            goblinAttack();
                                                            console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                                            if (playersHp == 0) {
                                                                console.log("You have been killed by the goblin! YOU LOSE!");
                                                                return;
                                                            }
                                                        }

                                                        inquirer.prompt([
                                                            {
                                                                type: "list",
                                                                choices: ["1", "2", "3", "4", "5"],
                                                                message: "Choose an attack number!",
                                                                name: "attackNumber1"
                                                            }
                                                        ])
                                                            .then(function (inquirerResponse) {
                                                                var randomNumber = Math.floor(Math.random() * 5) + 1;

                                                                if (inquirerResponse.attackNumber1 == randomNumber) {
                                                                    yourAttack();
                                                                    console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                                                    if (goblinsHp == 0) {
                                                                        console.log("You have defeated the goblin! YOU WIN!");
                                                                        return;
                                                                    }
                                                                }
                                                                else {
                                                                    goblinAttack();
                                                                    console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                                                    if (playersHp == 0) {
                                                                        console.log("You have been killed by the goblin! YOU LOSE!");
                                                                        return;
                                                                    }
                                                                }

                                                                inquirer.prompt([
                                                                    {
                                                                        type: "list",
                                                                        choices: ["1", "2", "3", "4", "5"],
                                                                        message: "Choose an attack number!",
                                                                        name: "attackNumber1"
                                                                    }
                                                                ])
                                                                    .then(function (inquirerResponse) {
                                                                        var randomNumber = Math.floor(Math.random() * 5) + 1;

                                                                        if (inquirerResponse.attackNumber1 == randomNumber) {
                                                                            yourAttack();
                                                                            console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                                                            if (goblinsHp == 0) {
                                                                                console.log("You have defeated the goblin! YOU WIN!");
                                                                                return;
                                                                            }
                                                                        }
                                                                        else {
                                                                            goblinAttack();
                                                                            console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                                                            if (playersHp == 0) {
                                                                                console.log("You have been killed by the goblin! YOU LOSE!");
                                                                                return;
                                                                            }
                                                                        }

                                                                        inquirer.prompt([
                                                                            {
                                                                                type: "list",
                                                                                choices: ["1", "2", "3", "4", "5"],
                                                                                message: "Choose an attack number!",
                                                                                name: "attackNumber1"
                                                                            }
                                                                        ])
                                                                            .then(function (inquirerResponse) {
                                                                                var randomNumber = Math.floor(Math.random() * 5) + 1;

                                                                                if (inquirerResponse.attackNumber1 == randomNumber) {
                                                                                    yourAttack();
                                                                                    console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                                                                    if (goblinsHp == 0) {
                                                                                        console.log("You have defeated the goblin! YOU WIN!");
                                                                                        return;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    goblinAttack();
                                                                                    console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                                                                    if (playersHp == 0) {
                                                                                        console.log("You have been killed by the goblin! YOU LOSE!");
                                                                                        return;
                                                                                    }
                                                                                }

                                                                                inquirer.prompt([
                                                                                    {
                                                                                        type: "list",
                                                                                        choices: ["1", "2", "3", "4", "5"],
                                                                                        message: "Choose an attack number!",
                                                                                        name: "attackNumber1"
                                                                                    }
                                                                                ])
                                                                                    .then(function (inquirerResponse) {
                                                                                        var randomNumber = Math.floor(Math.random() * 5) + 1;

                                                                                        if (inquirerResponse.attackNumber1 == randomNumber) {
                                                                                            yourAttack();
                                                                                            console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                                                                            if (goblinsHp == 0) {
                                                                                                console.log("You have defeated the goblin! YOU WIN!");
                                                                                                return;
                                                                                            }
                                                                                        }
                                                                                        else {
                                                                                            goblinAttack();
                                                                                            console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                                                                            if (playersHp == 0) {
                                                                                                console.log("You have been killed by the goblin! YOU LOSE!");
                                                                                                return;
                                                                                            }
                                                                                        }

                                                                                        inquirer.prompt([
                                                                                            {
                                                                                                type: "list",
                                                                                                choices: ["1", "2", "3", "4", "5"],
                                                                                                message: "Choose an attack number!",
                                                                                                name: "attackNumber1"
                                                                                            }
                                                                                        ])
                                                                                            .then(function (inquirerResponse) {
                                                                                                var randomNumber = Math.floor(Math.random() * 5) + 1;

                                                                                                if (inquirerResponse.attackNumber1 == randomNumber) {
                                                                                                    yourAttack();
                                                                                                    console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                                                                                    if (goblinsHp == 0) {
                                                                                                        console.log("You have defeated the goblin! YOU WIN!");
                                                                                                        return;
                                                                                                    }
                                                                                                }
                                                                                                else {
                                                                                                    goblinAttack();
                                                                                                    console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                                                                                    if (playersHp == 0) {
                                                                                                        console.log("You have been killed by the goblin! YOU LOSE!");
                                                                                                        return;
                                                                                                    }
                                                                                                }

                                                                                                inquirer.prompt([
                                                                                                    {
                                                                                                        type: "list",
                                                                                                        choices: ["1", "2", "3", "4", "5"],
                                                                                                        message: "Choose an attack number!",
                                                                                                        name: "attackNumber1"
                                                                                                    }
                                                                                                ])
                                                                                                    .then(function (inquirerResponse) {
                                                                                                        var randomNumber = Math.floor(Math.random() * 5) + 1;

                                                                                                        if (inquirerResponse.attackNumber1 == randomNumber) {
                                                                                                            yourAttack();
                                                                                                            console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                                                                                            if (goblinsHp == 0) {
                                                                                                                console.log("You have defeated the goblin! YOU WIN!");
                                                                                                                return;
                                                                                                            }
                                                                                                        }
                                                                                                        else {
                                                                                                            goblinAttack();
                                                                                                            console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                                                                                            if (playersHp == 0) {
                                                                                                                console.log("You have been killed by the goblin! YOU LOSE!");
                                                                                                                return;
                                                                                                            }
                                                                                                        }

                                                                                                        inquirer.prompt([
                                                                                                            {
                                                                                                                type: "list",
                                                                                                                choices: ["1", "2", "3", "4", "5"],
                                                                                                                message: "Choose an attack number!",
                                                                                                                name: "attackNumber1"
                                                                                                            }
                                                                                                        ])
                                                                                                            .then(function (inquirerResponse) {
                                                                                                                var randomNumber = Math.floor(Math.random() * 5) + 1;

                                                                                                                if (inquirerResponse.attackNumber1 == randomNumber) {
                                                                                                                    yourAttack();
                                                                                                                    console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                                                                                                    if (goblinsHp == 0) {
                                                                                                                        console.log("You have defeated the goblin! YOU WIN!");
                                                                                                                        return;
                                                                                                                    }
                                                                                                                }
                                                                                                                else {
                                                                                                                    goblinAttack();
                                                                                                                    console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                                                                                                    if (playersHp == 0) {
                                                                                                                        console.log("You have been killed by the goblin! YOU LOSE!");
                                                                                                                        return;
                                                                                                                    }
                                                                                                                }

                                                                                                                inquirer.prompt([
                                                                                                                    {
                                                                                                                        type: "list",
                                                                                                                        choices: ["1", "2", "3", "4", "5"],
                                                                                                                        message: "Choose an attack number!",
                                                                                                                        name: "attackNumber1"
                                                                                                                    }
                                                                                                                ])
                                                                                                                    .then(function (inquirerResponse) {
                                                                                                                        var randomNumber = Math.floor(Math.random() * 5) + 1;

                                                                                                                        if (inquirerResponse.attackNumber1 == randomNumber) {
                                                                                                                            yourAttack();
                                                                                                                            console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                                                                                                            if (goblinsHp == 0) {
                                                                                                                                console.log("You have defeated the goblin! YOU WIN!");
                                                                                                                                return;
                                                                                                                            }
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            goblinAttack();
                                                                                                                            console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                                                                                                            if (playersHp == 0) {
                                                                                                                                console.log("You have been killed by the goblin! YOU LOSE!");
                                                                                                                                return;
                                                                                                                            }
                                                                                                                        }

                                                                                                                        inquirer.prompt([
                                                                                                                            {
                                                                                                                                type: "list",
                                                                                                                                choices: ["1", "2", "3", "4", "5"],
                                                                                                                                message: "Choose an attack number!",
                                                                                                                                name: "attackNumber1"
                                                                                                                            }
                                                                                                                        ])
                                                                                                                            .then(function (inquirerResponse) {
                                                                                                                                var randomNumber = Math.floor(Math.random() * 5) + 1;

                                                                                                                                if (inquirerResponse.attackNumber1 == randomNumber) {
                                                                                                                                    yourAttack();
                                                                                                                                    console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                                                                                                                    if (goblinsHp == 0) {
                                                                                                                                        console.log("You have defeated the goblin! YOU WIN!");
                                                                                                                                        return;
                                                                                                                                    }
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    goblinAttack();
                                                                                                                                    console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                                                                                                                    if (playersHp == 0) {
                                                                                                                                        console.log("You have been killed by the goblin! YOU LOSE!");
                                                                                                                                        return;
                                                                                                                                    }
                                                                                                                                }

                                                                                                                                inquirer.prompt([
                                                                                                                                    {
                                                                                                                                        type: "list",
                                                                                                                                        choices: ["1", "2", "3", "4", "5"],
                                                                                                                                        message: "Choose an attack number!",
                                                                                                                                        name: "attackNumber1"
                                                                                                                                    }
                                                                                                                                ])
                                                                                                                                    .then(function (inquirerResponse) {
                                                                                                                                        var randomNumber = Math.floor(Math.random() * 5) + 1;

                                                                                                                                        if (inquirerResponse.attackNumber1 == randomNumber) {
                                                                                                                                            yourAttack();
                                                                                                                                            console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")

                                                                                                                                            if (goblinsHp == 0) {
                                                                                                                                                console.log("You have defeated the goblin! YOU WIN!");
                                                                                                                                                return;
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            goblinAttack();
                                                                                                                                            console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);

                                                                                                                                            if (playersHp == 0) {
                                                                                                                                                console.log("You have been killed by the goblin! YOU LOSE!");
                                                                                                                                                return;
                                                                                                                                            }
                                                                                                                                        }

                                                                                                                                        inquirer.prompt([
                                                                                                                                            {
                                                                                                                                                type: "list",
                                                                                                                                                choices: ["1", "2", "3", "4", "5"],
                                                                                                                                                message: "Choose an attack number!",
                                                                                                                                                name: "attackNumber1"
                                                                                                                                            }
                                                                                                                                        ])
                                                                                                                                        .then(function (inquirerResponse) {
                                                                                                                                            var randomNumber = Math.floor(Math.random() * 5) + 1;
                                                                                                                                        
                                                                                                                                            if (inquirerResponse.attackNumber1 == randomNumber) {
                                                                                                                                                yourAttack();
                                                                                                                                                console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")
                                                                                                                                        
                                                                                                                                                if(goblinsHp == 0) {
                                                                                                                                                    console.log("You have defeated the goblin! YOU WIN!");
                                                                                                                                                    return;
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                goblinAttack();
                                                                                                                                                console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);
                                                                                                                                        
                                                                                                                                                if(playersHp == 0) {
                                                                                                                                                    console.log("You have been killed by the goblin! YOU LOSE!");
                                                                                                                                                    return;
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                
                                                                                                                                            inquirer.prompt([
                                                                                                                                                {
                                                                                                                                                    type: "list",
                                                                                                                                                    choices: ["1", "2", "3", "4", "5"],
                                                                                                                                                    message: "Choose an attack number!",
                                                                                                                                                    name: "attackNumber1"
                                                                                                                                                }
                                                                                                                                            ])
                                                                                                                                            .then(function (inquirerResponse) {
                                                                                                                                                var randomNumber = Math.floor(Math.random() * 5) + 1;
                                                                                                                                            
                                                                                                                                                if (inquirerResponse.attackNumber1 == randomNumber) {
                                                                                                                                                    yourAttack();
                                                                                                                                                    console.log("You did 5 Damage to the goblin! it has " + goblinsHp + " Hp left.")
                                                                                                                                            
                                                                                                                                                    if(goblinsHp == 0) {
                                                                                                                                                        console.log("You have defeated the goblin! YOU WIN!");
                                                                                                                                                        return;
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                                else {
                                                                                                                                                    goblinAttack();
                                                                                                                                                    console.log("The Goblin has hit you for 5 Damage your Hp is at " + playersHp);
                                                                                                                                            
                                                                                                                                                    if(playersHp == 0) {
                                                                                                                                                        console.log("You have been killed by the goblin! YOU LOSE!");
                                                                                                                                                        return;
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                    
                                                                                                                    
                                                                                                                                                
                                                                                                                                            })
                                                                                                                                            
                                                                                                                                        })

                                                                                                                                    })

                                                                                                                            })

                                                                                                                    })

                                                                                                            })

                                                                                                    })

                                                                                            })

                                                                                    })

                                                                            })

                                                                    })

                                                            })

                                                    })

                                            })

                                    })



                            })

                    })

            })
    })