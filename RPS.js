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

function playRound(playerSelection) {

    const computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase(); // lowercase player's selection for str compare

    let roundResult = "";

    if (playerSelection === computerSelection) {
        roundResult = "tie";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            roundResult = "lose";
        } else { //computer must have chose scissors
            roundResult = "win";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            roundResult = "lose";
        } else { // computer must have chose rock
            roundResult = "win";
        }
    } else { // player must have chose scissors
        if (computerSelection === 'rock') {
            roundResult = "lose";
        } else { // computer must have chose paper
            roundResult = "win";
        }
    }

    document.querySelector('#results').innerText = `Result: You chose ${playerSelection}, `
        + `your opponent chose ${computerSelection} \u2014 you ${roundResult} the round.`;

    return roundResult;
}

function endGame(winner) {

    // grab all the game buttons and remove event listener
    const buttonDiv = document.querySelector('#selection-buttons');
    const buttons = buttonDiv.querySelectorAll('input');
    buttons.forEach(button => button.removeEventListener('click', roundClick));

    const endGamePara = document.querySelector('#final-results');

    if (winner === 'player') {

        endGamePara.innerText = 'Congrats! You won the game!'
        return;
    } else {
        endGamePara.innerText = 'Computer wins! Try again!'
        return;
    }
}

function roundClick(e) {
    console.log(e);
    let playerSelection = e.target.name;
    let roundResult = playRound(playerSelection);


    if (roundResult === 'win') {
        playerScore++;
        document.querySelector('#player-score').innerText = `Player Score: ${playerScore}`;
        if (playerScore === 5) {
            let winner = 'player';
            endGame(winner);
        }
    } else if (roundResult === 'lose') {
        computerScore++;
        document.querySelector('#computer-score').innerText = `Computer Score: ${computerScore}`;
        if (computerScore === 5) {
            let winner = 'computer';
            endGame(winner);
        }
    }
}


function game() {

    const playAgain = document.querySelector('#play-again');
    playAgain.addEventListener('click', game);

    // initiate score variables
    playerScore = 0;
    computerScore = 0;
    document.querySelector('#player-score').innerText = `Player Score: ${playerScore}`;
    document.querySelector('#computer-score').innerText = `Computer Score: ${computerScore}`;
    document.querySelector('#results').innerText = '';
    document.querySelector('#final-results').innerText = '';

    const buttonDiv = document.querySelector('#selection-buttons');
    const buttons = buttonDiv.querySelectorAll('input');


    buttons.forEach(button => button.addEventListener('click', roundClick));
}

let playerScore;
let computerScore;
game();