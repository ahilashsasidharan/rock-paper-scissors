game();
//create a function called computerPlay that randomly returns rock, paper or scissors

function computerPlay(){
    let randomNumber, 
        computerSelection;
    randomNumber = Math.floor(Math.random() * 3); 
    switch(randomNumber){
        case 1:
            computerSelection = 'rock';
            break;
        case 2:
            computerSelection = 'paper';
            break;
        default:
            computerSelection = 'scissors';
    }
    return computerSelection;
}

/*create a function called playGame that takes two parameters playerSelection and 
computerSelection and return a winner of the round*/

function playRound(playerSelection, computerSelection){
    let result; 
    if(playerSelection == computerSelection){
        result = 'tie';
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'scissors'){
            result = 'win';
        }
        else{
            result = 'loss';
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            result = 'win';
        }
        else{
            result = 'loss';
        }
    }
    else{
        if(computerSelection == 'paper'){
            result = 'win';
        }
        else{
            result = 'loss';
        }
    }
    return result; 
}

//create a function that plays five rounds of rock paper scissors, and outputs a winner

function game(){
    let playerSelection,
        computerSelection,
        result,
        playerScore = 0,
        computerScore = 0; 
    for (let i = 0; i < 5; i++){
        do{
            playerSelection = window.prompt('Please enter rock, paper or scissors.').toLowerCase();
        }while((playerSelection !== 'rock') && 
                (playerSelection !== 'scissors') && 
                (playerSelection !== 'paper')
                );
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if(result == 'win'){
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }
        else if(result == 'loss'){
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        }
        else{
            console.log(`You Tie! ${playerSelection} does not beat ${computerSelection}`);
        }
    }   
    if(computerScore ==  playerScore){
        console.log(`Five rounds have been played. You tied with ${computerScore} losses and ${playerScore} wins`);
    }
    else if(playerScore > computerScore){
        console.log(`Five rounds have been played. You won with ${computerScore} losses and ${playerScore} wins`);
    } 
    else{
        console.log(`Five rounds have been played. You loss with ${computerScore} losses and ${playerScore} wins`);
    }  
}