
function getComputerChoice(){
    let computerChoice = ""
    let random = Math.round(Math.random() * 2)
    if (random == 0) {
        computerChoice = "rock"
    }
    else if(random == 1){
        computerChoice = "paper"
    }
    else{
        computerChoice = "scissors"
    }

    return computerChoice
}

function getHumanChoice(){
    let userChoice = ""
    let userInput = prompt("Choose 'rock', 'paper' or 'scissors'.")
    if (userInput.toLowerCase() == "rock") {
        userChoice = userInput.toLowerCase()
    }
    else if (userInput.toLowerCase() == "paper") {
        userChoice = userInput.toLowerCase
    }
    else if (userInput.toLowerCase == "scissors") {
        userChoice = userInput.toLowerCase
    }
    else{
        alert("Please choose a valid option")
    }
}

function playRound(humanChoice, computerChoice){
    if(userChoice == computerChoice){
        alert("It's a tie")
    }
    else if (userChoice == "rock") {
        if (computerChoice == "paper") {
            alert("Computer wins this round")
            computerScore++
        }
        else if (computerChoice == "scissors") {
            alert("Player wins this round")
            humanChoice++
        }
    }
    else if(userChoice == "paper"){
        if (computerChoice == "rock") {
            alert("Player wins this round")
            humanScore++
        }
        else if(computerChoice == "scissors"){
            alert("Computer wins this round")
            computerScore++;
        }
    }
    else if(userChoice == "scissors"){
        if(computerChoice == "rock"){
            alert("Computer wins this round")
            computerScore++
        }
        else if(computerChoice == "paper"){
            alert("Player wins this round")
            humanScore++
        }
    }
}

function playGame(){
    let humanScore, computerScore = 0
    
}