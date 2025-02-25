function getComputerChoice()
{
    let cnum = Math.floor(Math.random() * 3);
    //COMPUTER NUMBER BELOW
    //console.log(cnum);
    
    if (cnum == 0) 
    {
        cChoice = "rock";
    }
    else if (cnum == 1)
    {
        cChoice = "paper";
    }
    else if (cnum == 2)
    {
        cChoice = "scissors";
    } 
    //COMPUTER CHOICE BELOW
    //console.log(cChoice); 
}

function getHumanChoice()
{
     huChoice = prompt("Please enter which hand do you want : ");
     hChoice = huChoice.toLowerCase();
    //console.log(hChoice);
}

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("Computer's Choice is : " + cChoice);
    console.log("Your Choice is : " + hChoice);

    if (hChoice === "paper")
    {
        switch (cChoice)
        {
            case "rock":
                console.log("You Win! Paper Beat Rock!");
                break;
            case "paper":
                console.log("TIE!");
                break;
            case "scissors":
                console.log("You Lose! Scissors Beat Paper!");
                break;
            }
    }
    else if (hChoice === "rock")
    {
        switch (cChoice)
        {
            case "rock":
                console.log("TIE");
                break;
            case "paper":
                console.log("You Lose! Paper Beat Rock");
                break;
            case "scissors":
                console.log("You Win! Rock Beat Scissors!");
                break;
            }
    }
    else if (hChoice === "scissors")
        {
            switch (cChoice)
            {
                case "rock":
                    console.log("You Lose! Rock Beat Scissors!");
                    break;
                case "paper":
                    console.log("You Win! Scissors Beat Paper!");
                    break;
                case "scissors":
                    console.log("TIE!");
                    break;
                }
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);


