initializeGame();

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
function initializeGame(){
    let playerSelection,
        computerSelection,
        roundResult; 
    
        const playerOptions = document.querySelectorAll('.player-option-btn');

        playerOptions.forEach((button) => {
            button.addEventListener('click', function(){
                computerSelection = computerPlay();
                playerSelection = button.textContent.toLowerCase();
                roundResult = playRound(playerSelection, computerSelection);
                updateScores(roundResult, playerSelection, computerSelection);
            });
        });
        
}
   
function updateScores(roundResult, playerSelection, computerSelection){
    const roundOutcome = document.querySelector('#round-result'),
        computerScoreDisplay = document.querySelector('#computer-score')
        playerScoreDisplay = document.querySelector('#player-score');
    let playerScore = 0, 
        computerScore = 0;
    if(roundResult == 'win'){
        roundOutcome.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    }
    else if(roundResult == 'loss'){
        roundOutcome.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }
    else{
        roundOutcome.textContent = `You Tie! ${playerSelection} does not beat ${computerSelection}`;
    }  
 
    if(computerScore == 5 ||  playerScore == 5){
        roundOutcome.textContent = `Five rounds have been played. You tied with ${computerScore} losses and ${playerScore} wins`;
    }
}