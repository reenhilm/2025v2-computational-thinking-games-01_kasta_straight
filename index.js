//Main game function
function playDice() {
    let nrThrows = 0;

    //First goal to reach is 1
    let goal = 1;

    while (goal <= 6) {
        //Randomize a throw between 1 and 6
        diceThrow = Math.floor(Math.random() * 6) + 1;
        nrThrows += 1;

        if (diceThrow === goal) {
            goal += 1;
        }
    }

    return nrThrows;
}

//Start the game
console.log(`${playDice()}x throws of one dice to get a straight from 1 to 6`);