//generate an integer between min and max (included)
function randomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) ) + min;
}                      
//generate a random choice for the round
function computerPlay() {
    let n = randomIntRange(1,3);

    return n;
}

//assigns the right word to the corrispondent number
function choiceStr(n) {
    switch(n) {
        case 1: return "rock"; 
        case 2: return "paper"; 
        case 3: return "scissors"; 

        default: return "invalid choice";
    }
}

//check if someone reaches three victories
function checkResult(p, c) {
    if (p === 3 ) {
        //disables the button click properties
        document.getElementById("rock").onclick = null;
        document.getElementById("paper").onclick = null;
        document.getElementById("scissors").onclick = null;
        //writes the result on the screen
        document.getElementById("finishedGame").innerHTML = "Congratulations! You won the game."
    }
    else if (c === 3 ) {
        //disables the button click properties
        document.getElementById("rock").onclick = null;
        document.getElementById("paper").onclick = null;
        document.getElementById("scissors").onclick = null;
        //writes the result on the screen
        document.getElementById("finishedGame").innerHTML = "You lost the game. Better luck next time!"
    }
}

//play a round of rock-paper-scissors
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let computerChoiceStr = choiceStr(computerSelection);
    document.getElementById("computerChoice").innerHTML = `The computer chose ${computerChoiceStr}`;

    if (playerSelection === 2 & computerSelection === 1) {
        document.getElementById("result").innerHTML = "You win! Paper beats rock.";
        playerScoreDiv.textContent = ++playerPoints;
    } 
    else if (playerSelection === 2 & computerSelection === 2) {
        document.getElementById("result").innerHTML = "Tie! Paper against paper.";
    } 
    else if (playerSelection === 2 & computerSelection === 3) {
        document.getElementById("result").innerHTML = "You lose! Scissors beat paper.";
        computerScoreDiv.textContent = ++computerPoints;
    } 
    else if (playerSelection === 1 & computerSelection === 2) {
        document.getElementById("result").innerHTML = "You lose! Paper beats rock.";
        computerScoreDiv.textContent = ++computerPoints;
    } 
    else if (playerSelection === 1 & computerSelection === 3) {
        document.getElementById("result").innerHTML = "You win! Rock beats scissors.";
        playerScoreDiv.textContent = ++playerPoints;
    } 
    else if (playerSelection === 1 & computerSelection === 1) {
        document.getElementById("result").innerHTML = "Tie! Rock against rock.";
    } 
    else if (playerSelection === 3 & computerSelection === 3) {
        document.getElementById("result").innerHTML = "Tie! Scissors against scissors.";
    } 
    else if (playerSelection === 3 & computerSelection === 1) {
        document.getElementById("result").innerHTML = "You lose! Rock beats scissors";
        computerScoreDiv.textContent = ++computerPoints;
    } 
    else if (playerSelection === 3 & computerSelection === 2) {
        document.getElementById("result").innerHTML = "You win! Scissors beat Paper.";
        playerScoreDiv.textContent = ++playerPoints;
    } 
    else {
        document.getElementById("result").innerHTML = "An error occured during the round.";
    }

    checkResult(playerPoints, computerPoints);
}

let playerScoreDiv = document.querySelector("#playerScore");
let computerScoreDiv = document.querySelector("#computerScore");

let playerPoints = 0;
let computerPoints = 0;
