console.log("Welcome to Rock Paper Scissors in the Console!")

function computerPlay() {
    let weaponChoice = ['rock', 'paper', 'scissors']
    return weaponChoice[Math.random()*weaponChoice.length | 0];
}


const buttons = document.querySelectorAll('button');


function mySelection(e) {
  playerSelection = this.classList.value;
}

buttons.forEach(button => button.addEventListener('click', playRound, {
}));



let playerScore = 0;
let computerScore = 0;
let thisRound = 1;

function playRound(e) {
  
  const pChoice = document.querySelector('.players-choice');
  const cChoice = document.querySelector('.computers-choice');
  const roundResult = document.querySelector('.round-result');
  const roundDiv = document.querySelector('.round');


    playerSelection = this.classList.value;
    pChoice.textContent = `You choose ${playerSelection}`;
    let computerSelection = computerPlay();
    cChoice.textContent = `Computer choose ${computerSelection}`;

  if (playerSelection === computerSelection) {
      console.log("Tie Game");
      roundResult.textContent = "Tie! Go Again!";
  } 
  
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log ("You win, Rock Beats Scissors!");
    roundResult.textContent = "You win, Rock Beats Scissors!";
    playerScore += 1;
    thisRound += 1;
  } 
  
  else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log ("You win, Paper Beats Rock");
    roundResult.textContent = "You win, Paper Beats Rock";
    playerScore += 1;
  } 
  
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log ("You win, Scissors beats Paper!");
    roundResult.textContent = "You win, Scissors beats Paper!";
    playerScore += 1;
    thisRound += 1;
  } 
  
  else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log ("You lose, Paper beats Rock!");
    roundResult.textContent = "You lose, Paper beats Rock!";
    computerScore += 1;
    thisRound += 1;
  } 
  
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log ("You lose, Scissors beats Paper!");
    roundResult.textContent = "You lose, Scissors beats Paper!";
    computerScore += 1;
    thisRound += 1;
  } 
  
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log ("You lose, Rock beats Scissors!");
    roundResult.textContent = "You lose, Rock beats Scissors!";
    computerScore += 1;
    thisRound += 1;
  } 
  
  else {
    console.log ("No Cheating, you lose.");
    roundResult.textContent = "No Cheating, you lose.";
    computerScore += 1;
  }

  const pScore = document.querySelector('.playerScore');
  pScore.textContent = playerScore;

  const cScore = document.querySelector('.computerScore');
  cScore.textContent = computerScore;

  const endDiv = document.querySelector('.end-div');
  const buttonDiv = document.querySelector('.buttonDiv');


  if (playerScore === 5) {
    roundResult.textContent = "Congratulations! You Win!";
    roundResult.classList.toggle('blink_text_win');
    endDiv.textContent = 'Refresh page to play again!';
    buttonDiv.setAttribute('style', 'display: none;');
  } else if (computerScore === 5) {
    roundResult.textContent = "YOU LOSE!!";
    roundResult.classList.toggle('blink_text_lose');
    endDiv.textContent = 'Refresh page to play again!';
    buttonDiv.setAttribute('style', 'display: none;');
    
  }
  roundDiv.textContent = `Round ${thisRound}`;
}


