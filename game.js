function getComputerChoice(){
    const choices = ['Rock', 'Paper','Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } 
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats Scissors."
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats Rock.";
    } 
    
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats Rock."
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats Paper.";
    } 
    
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats Rock."
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats Scissors.";
    }  

    if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
        return "Invalid input. Please choose either Rock, Paper, or Scissors."
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.startsWith("You win")) {
            playerScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("You lose the game.");
    } else {
        console.log("The game is a tie.");
    }
}

game();