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
    div.textContent= '';
    duelStart.textContent =(`Human chose ${humanChoice}, Computer Chose ${computerChoice}`);
    div.appendChild(duelStart);
    div.appendChild(document.createElement('br'));

    if (humanChoice == "rock" && computerChoice =="Paper"){
        duelFight.textContent =("Paper beat Rock! You LOST!");
        div.appendChild(duelFight);
        div.appendChild(document.createElement('br'));
        computerScore++;
        duelOutcome.textContent=(`Human Score :${humanScore}, Computer Score :${computerScore}`);
        div.appendChild(duelOutcome);
        div.appendChild(document.createElement('br'));
    }
    if (humanChoice == "rock" && computerChoice =="Rock"){
        duelFight.textContent =("TIE");
        div.appendChild(duelFight);
        div.appendChild(document.createElement('br'));
        duelOutcome.textContent=(`Human Score :${humanScore}, Computer Score :${computerScore}`);
        div.appendChild(duelOutcome);
        div.appendChild(document.createElement('br'));
    }
    if (humanChoice == "rock" && computerChoice =="Scissors"){
        duelFight.textContent = ("Rock beat Scissors! You WIN!");
        div.appendChild(duelFight);
        div.appendChild(document.createElement('br'));
        humanScore++;
        duelOutcome.textContent=(`Human Score :${humanScore}, Computer Score :${computerScore}`);
        div.appendChild(duelOutcome);
        div.appendChild(document.createElement('br'));
    }
    if (humanChoice == "paper" && computerChoice =="Paper"){
        duelFight.textContent=("TIE");
        div.appendChild(duelFight);
        div.appendChild(document.createElement('br'));
        duelOutcome.textContent=(`Human Score :${humanScore}, Computer Score :${computerScore}`);
        div.appendChild(duelOutcome);
        div.appendChild(document.createElement('br'));
    }
    if (humanChoice == "paper" && computerChoice =="Rock"){
        duelFight.textContent = ("Paper beat Rock! You Win!");
        div.appendChild(duelFight);
        div.appendChild(document.createElement('br'));
        humanScore++;
        duelOutcome.textContent=(`Human Score :${humanScore}, Computer Score :${computerScore}`);
        div.appendChild(duelOutcome);
        div.appendChild(document.createElement('br'));
    }
    if (humanChoice == "paper" && computerChoice =="Scissors"){
        duelFight.textContent=("Scissors beat Paper! You LOST!");
        div.appendChild(duelFight);
        div.appendChild(document.createElement('br'));
        computerScore++;
        duelOutcome.textContent=(`Human Score :${humanScore}, Computer Score :${computerScore}`);
        div.appendChild(duelOutcome);
        div.appendChild(document.createElement('br'));
    }
    if (humanChoice == "scissors" && computerChoice =="Rock"){
        duelFight.textContent=("Rock beat Scissors! You LOST!");
        div.appendChild(duelFight);
        div.appendChild(document.createElement('br'));
        computerScore++;
        duelOutcome.textContent=(`Human Score :${humanScore}, Computer Score :${computerScore}`);
        div.appendChild(duelOutcome);
        div.appendChild(document.createElement('br'));
    }
    if (humanChoice == "scissors" && computerChoice =="Paper"){
        duelFight.textContent=("Scissors beat Paper! You Win!");
        div.appendChild(duelFight);
        div.appendChild(document.createElement('br'));
        humanScore++;
        duelOutcome.textContent=(`Human Score :${humanScore}, Computer Score :${computerScore}`);
        div.appendChild(duelOutcome);
        div.appendChild(document.createElement('br'));
    }
    if (humanChoice == "scissors" && computerChoice =="Scissors"){
        duelFight.textContent=("TIE!");
        div.appendChild(duelFight);
        div.appendChild(document.createElement('br'));
        duelOutcome.textContent=(`Human Score :${humanScore}, Computer Score :${computerScore}`);
        div.appendChild(duelOutcome);
        div.appendChild(document.createElement('br'));
        
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


 const div = document.createElement("div");
 document.body.appendChild(div);

 let duelStart = document.createElement("span");
 let duelFight = document.createElement("span");
 let duelOutcome = document.createElement("span");
