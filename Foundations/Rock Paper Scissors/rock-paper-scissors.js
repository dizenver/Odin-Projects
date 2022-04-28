console.log("Welcome to Rock Paper Scissors in the Console!")

//Generate `computerSelection` variable using `computerPlay` function.
function computerPlay() {
    let weaponChoice = ['rock', 'paper', 'scissors']
    return weaponChoice[Math.random()*weaponChoice.length | 0];
}


const buttons = document.querySelectorAll('button');


function mySelection(e) {
  //console.log(this.classList.value);
  playerSelection = this.classList.value;
}

buttons.forEach(button => button.addEventListener('click', playRound, {
}));



let playerScore = 0;
let computerScore = 0;
let thisRound = 1;

//Push both player and computer selections through `playRound` function
function playRound(e) {
  
  const pChoice = document.querySelector('.players-choice');
  const cChoice = document.querySelector('.computers-choice');
  const roundResult = document.querySelector('.round-result');
  const roundDiv = document.querySelector('.round');

    //`prompt()` user for input (Rock, Paper or Scissors)

    //	convert to lower case and verify it is one of the three (case-sensitive answers)
    playerSelection = this.classList.value;
    //console.log("You chose " + playerSelection);
    pChoice.textContent = `You choose ${playerSelection}`;
    let computerSelection = computerPlay();
    //console.log("Computer chose " + computerSelection);
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
   // alert("Congratulations on winning! Refresh to play again!");
  } else if (computerScore === 5) {
    roundResult.textContent = "YOU LOSE!!";
    roundResult.classList.toggle('blink_text_lose');
    endDiv.textContent = 'Refresh page to play again!';
    buttonDiv.setAttribute('style', 'display: none;');
    //alert("Congratulations on winning! Refresh to play again!");
    
  }
  roundDiv.textContent = `Round ${thisRound}`;

}

/*
//Using `loop` call `playRound` function for a 5 round game and keep score.
function game () {
    for (let i = 0; i < 5; i++) {
        playRound(); 
       }
       console.log ("Final Score after 5 rounds");
       console.log ("Player Score: " + playerScore);
       console.log ("Computer Score: " + computerScore);
       if (playerScore > computerScore) {
           console.log("You Win the Game!!");
       } else if (computerScore > playerScore) {
           console.log("You Lose the Game!");
       } else {
        console.log("You Tied with the Computer! Rematch?");
       }
    }

//game (); 
*/
