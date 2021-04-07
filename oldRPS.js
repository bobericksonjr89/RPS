console.log("Hello World");

function computerPlay() {
    // generates a random number between 0 and 2
    function randomGenerator() {
        let min = Math.ceil(0);
        let max = Math.floor(2);
        return Math.floor(Math.random() * (max - min + 1));
    } 

    // stores result of random number generator into variable
    let getRandom = randomGenerator();

    // returns rock, paper, or scissors depending on random number
    if (getRandom === 0) {
        return "rock";
    } else if (getRandom === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase(); // lowercase player's selection
    if (playerSelection === computerSelection) {
        return "tie";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "lose";
        } else { //computer must have chose scissors
            return "win";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return "lose";
        } else { // computer must have chose rock
            return "win";
        }
    } else { // player must have chose scissors
        if (computerSelection === 'rock') {
            return "lose";
        } else { // computer must have chose paper
            return "win";
        }
    }
}

function game() {

    // initiate score variables
    let playerScore = 0;
    let computerScore = 0;

    // loop 5 times
    for (let i = 0; i < 5; i++) {
        let playerSelection = "";
        // prompt player for correct input
        while (playerSelection === "") {
            playerSelection = prompt("Choose rock, paper, or scissors: ");
            // lowercase player input
            playerSelection = playerSelection.toLowerCase();
            
            // if player input isn't valid, restart while loop
            if (playerSelection !== 'rock' && playerSelection !== 'scissors' && playerSelection !== 'paper') {
                alert("Please choose rock, paper, or scissors!");
                playerSelection = "";
            }
        }
        // now the computer generates a play
        let computerSelection = computerPlay() ;

        // function to compare plays
        let turnResult = playRound(playerSelection, computerSelection);
        
        if (turnResult === "tie") {
            console.log(`It's a tie! Both selected ${playerSelection}!`);
        } else if (turnResult === "win") {
            playerScore++; //update score
            console.log(`You win- ${playerSelection} beats ${computerSelection}!`);
        } else {
            computerScore++; //update score
            console.log(`You lose- ${playerSelection} loses to ${computerSelection}!`);
        } 
    }

    // compare scores after 5 rounds, output outcome of game
    if (playerScore > computerScore) {
        console.log(`You win the game! ${playerScore} to ${computerScore}.`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game! ${playerScore} to ${computerScore}`);
    } else {
        console.log(`Tie game! ${playerScore} to ${computerScore}.`);
    }
    

}

game();