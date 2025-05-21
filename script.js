console.log("hello");
var computerchoice = '';
var humanchoice = '';

var humanScore = 0;
var computerScore = 0;

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





function playGame() {

    for (i=0; i<=5; i++)
        {    
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);

            if (humanScore ==3){
                console.log("YOU WON!");
                break;
            }
            else if (computerScore==3) {
                console.log("YOU LOST!");
                break;
            }
        }
}
   


playGame();