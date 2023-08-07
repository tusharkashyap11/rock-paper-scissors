function getComputerChoice() {
    let a = Math.random() * 3
    let array = ["rock", "paper", "scissors"]
    const choice = array[Math.floor(a)]
    return choice
}

function play(playerSelection, computerSelection) {
    playerSelection.toLowerCase()
    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return true
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return true
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return true
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return false
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return false
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return false
    }
    else {
        console.log("tie")
        return null
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice()
        let youWon = play(playerSelection, computerSelection)
        if (youWon == true) {
            playerScore += 1
        } 
        else if (youWon == false){
            computerScore += 1
        } 
        else {
            playerScore += 1
            computerScore += 1
        }
    }
    if (playerScore > computerScore) {
        console.log("You Won")
    } else if (playerScore < computerScore) {
        console.log("You lost")
    } else {
        console.log("It's a tie")
    }
}

game();