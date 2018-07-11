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