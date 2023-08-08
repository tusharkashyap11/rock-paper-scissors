function getComputerChoice() {
    let a = Math.random() * 3
    let array = ["rock", "paper", "scissors"]
    const choice = array[Math.floor(a)]
    return choice
}
const result = document.getElementById('round-result');
function playRound(playerSelection, computerSelection) {
    const roundWinner = document.createElement('li');
    playerSelection.toLowerCase()
    if (playerSelection == "rock" && computerSelection == "scissors") {
        roundWinner.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        result.appendChild(roundWinner);
        return game(true)
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundWinner.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        result.appendChild(roundWinner);
        return game(true)
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        roundWinner.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        result.appendChild(roundWinner);
        return game(true)
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        roundWinner.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        result.appendChild(roundWinner);
        return game(false)
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundWinner.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        result.appendChild(roundWinner);
        return game(false)
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundWinner.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        result.appendChild(roundWinner);
        return game(false)
    }
    else {
        roundWinner.textContent = `Its's a tie`;
        result.appendChild(roundWinner);
        return game(null);
    }
}
let playerScore = 0;
let computerScore = 0;
function game(youWon) {
    const currentScore = document.getElementById('current-score');
    const winner = document.createElement('p');
    if (youWon === true) {
        playerScore += 1;
    } else if (youWon === false) {
        computerScore += 1;
    } else {
        playerScore += 1;
        computerScore += 1;
    }
    currentScore.innerText = `Your Score: ${playerScore} Computer's Score: ${computerScore}`;
    if (playerScore === 5 && computerScore === 5) {
        winner.textContent = "TIE GAME";
        result.appendChild(winner);
        playerSelection.forEach(element => {
            element.disabled = true;
        });
    } else if (playerScore === 5) {
        winner.textContent = "YOU WON";
        result.appendChild(winner);
        playerSelection.forEach(element => {
            element.disabled = true;
        });
    } else if (computerScore === 5) {
        winner.textContent = "YOU LOST";
        result.appendChild(winner);
        playerSelection.forEach(element => {
            element.disabled = true;
        });
    }
}
function computerHover (computerChoice) {
    for (let i = 0; i < computerSelections.length; i++) {
        if (computerChoice === computerSelections[i].dataset.selection) {
            computerSelections[i].classList.add('transformed');
        }
        setTimeout(function() {
            computerSelections[i].classList.remove('transformed');
          }, 800);
    }
}

const playerSelection = document.querySelectorAll('#selection');
const computerSelections =  document.querySelectorAll('#comp-selection');

playerSelection.forEach(playerChoice => {
    playerChoice.addEventListener('click', function () {
        const computerChoice = getComputerChoice()
        playRound(playerChoice.dataset.selection, computerChoice);
        computerHover(computerChoice);
    })
})