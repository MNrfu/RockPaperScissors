console.log("hello");
var computerchoice = '';
var humanchoice = '';
var humanScore = 0;
var computerScore = 0;
var r = 'Rock';
var s = 'Scissors';
var p = 'Paper';

function getComputerChoice() {
    computerchoice = Math.floor(Math.random() * 3);
    
    switch(computerchoice) {
        case 0:
            computerchoice = "Rock"
            break;
        case 1:
            computerchoice = "Paper"
            break;
        case 2:
            computerchoice = "Scissors"
            break;

    }
    //console.log(computerchoice);
    return computerchoice;
}


function getHumanChoice() {
 return humanchoice = prompt("Please choose Rock, Paper or Scissors").toLowerCase();
 
 //console.log(humanchoice);
 
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human chose ${humanChoice}, Computer Chose ${computerChoice}`);
    if (humanChoice == "rock" && computerChoice =="Paper"){
        console.log("Paper beat Rock! You LOST!");
        computerScore++;
        console.log(`Human Score :${humanScore}, Computer Score :${computerScore}`);
    }
    if (humanChoice == "rock" && computerChoice =="Rock"){
        console.log("TIE");
        console.log(`Human Score :${humanScore}, Computer Score :${computerScore}`);
    }
    if (humanChoice == "rock" && computerChoice =="Scissors"){
        console.log("Rock beat Scissors! You WIN!");
        humanScore++;
        console.log(`Human Score :${humanScore}, Computer Score :${computerScore}`);
    }
    if (humanChoice == "paper" && computerChoice =="Paper"){
        console.log("TIE");
        console.log(`Human Score :${humanScore}, Computer Score :${computerScore}`);
    }
    if (humanChoice == "paper" && computerChoice =="Rock"){
        console.log("Paper beat Rock! You Win!");
        humanScore++;
        console.log(`Human Score :${humanScore}, Computer Score :${computerScore}`);
    }
    if (humanChoice == "paper" && computerChoice =="Scissors"){
        console.log("Scissors beat Paper! You LOST!");
        computerScore++;
        console.log(`Human Score :${humanScore}, Computer Score :${computerScore}`);
    }
    if (humanChoice == "scissors" && computerChoice =="Rock"){
        console.log("Rock beat Scissors! You LOST!");
        computerScore++;
        console.log(`Human Score :${humanScore}, Computer Score :${computerScore}`);
    }
    if (humanChoice == "scissors" && computerChoice =="Paper"){
        console.log("Scissors beat Paper! You Win!");
        humanScore++;
        console.log(`Human Score :${humanScore}, Computer Score :${computerScore}`);
    }
    if (humanChoice == "scissors" && computerChoice =="Scissors"){
        console.log("TIE!");
        console.log(`Human Score :${humanScore}, Computer Score :${computerScore}`);
        
    }
   
}





/*function playGame() {

    for (i=0; i<=50; i++)
        {    
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);

            if (humanScore ==5){
                console.log("YOU WON!");
                break;
            }
            else if (computerScore==5) {
                console.log("YOU LOST!");
                break;
            }
        }
}
   


playGame(); */

 const buttonRock = document.createElement("button");
 const buttonPaper = document.createElement("button");
 const buttonScissors = document.createElement("button");
 
 buttonRock.textContent = "ROCK";
 buttonPaper.textContent = "PAPER";
 buttonScissors.textContent = "SCISSORS";

 buttonRock.addEventListener('click', () => playRound(humanChoice="rock", getComputerChoice()));
 buttonPaper.addEventListener('click', () => playRound(humanChoice="paper", getComputerChoice()));
 buttonScissors.addEventListener('click', () => playRound(humanChoice="scissors", getComputerChoice()));

 document.body.appendChild(buttonRock);
 document.body.appendChild(buttonPaper);
 document.body.appendChild(buttonScissors);