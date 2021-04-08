# RPS

## Description

Users can play against the computer to see who will be first to score 5 points in consecutive rounds of rock, paper, scissors.  

## Files & Directories

- HTML file with graphical interface
- reset.css reset/normalize
- RPS.css styling sheet
- RPS.js javascript for the game
- images directory contains rock, papper, and scissors icons

## Javascript

- Score variables are declared globally so they are available to all functions.
- Game function is called, which grabs the 'play again' button and attaches an event listener to it, which when clicked will call the game function thus resetting the game. Score variables are set to 0, and text on the graphical interface is reset via query selectors.  A roundClick function is attached to the game images (rock, paper, scissors) via an event listener.
- When an icon is clicked, and the roundClick function is called, the selection is read via the event target's name.  The player's selection is passed into the playRound function, which returns whether the player won, lost, or tied.  Score is adjusted appropriately, and the endGame function is called if either player reaches 5 points.
- In playRound, the computerPlay function is called, which generates a random move via a random number generator.  The results of the round are displayed on the page via a query selector, and player and computer's moves are compared.  A 'win', 'lose', or 'tie' is passed back into the roundClick button
- The endGame function deactivates the event listeners on the rock, paper, and scissors icons, displays the final score and outcome of the game, and the user is left with only the option of clicking the 'play again' button.

## Credit

Robert Erickson, 2021