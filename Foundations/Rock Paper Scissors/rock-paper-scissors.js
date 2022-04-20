console.log("Welcome to Rock Paper Scissors in the Console!")

//Generate `computerSelection` variable using `computerPlay` function.
function computerPlay() {
    let weaponChoice = ['rock', 'paper', 'scissors']
    return weaponChoice[Math.random()*weaponChoice.length | 0];
}


let playerScore = 0;
let computerScore = 0;

//Push both player and computer selections through `playRound` function
function playRound () {

    //`prompt()` user for input (Rock, Paper or Scissors)
    let mySelection = prompt("Choose your weapon. Rock, Paper or Scissors", "");

    //	convert to lower case and verify it is one of the three (case-sensitive answers)
    playerSelection = mySelection.toLowerCase();
    console.log("You chose " + playerSelection);
    let computerSelection = computerPlay();
    console.log("Computer chose " + computerSelection);


  if (playerSelection === computerSelection) {
      console.log("Tie Game");
  } 
  
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log ("You win, Rock Beats Scissors!");
    playerScore += 1;
  } 
  
  else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log ("You win, Paper Beats Rock");
    playerScore += 1;
  } 
  
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log ("You win, Scissors beats Paper!");
    playerScore += 1;
  } 
  
  else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log ("You lose, Paper beats Rock!");
    computerScore += 1;
  } 
  
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log ("You lose, Scissors beats Paper!");
    computerScore += 1;
  } 
  
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log ("You lose, Rock beats Scissors!");
    computerScore += 1;
  } 
  
  else {
    console.log ("No Cheating, you lose.");
    computerScore += 1;
  }
}


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

game ();