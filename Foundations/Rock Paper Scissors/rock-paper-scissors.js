console.log("Hello World")

//`prompt()` user for input (Rock, Paper or Scissors)

let mySelection = prompt("Choose your weapon. Rock, Paper or Scissors", "");

//	convert to lower case and verify it is one of the three (case-sensitive answers)
let playerSelection = mySelection.toLowerCase();

console.log(playerSelection);

//Generate `computerSelection` variable using `computerPlay` function.
function computerPlay() {
    let weaponChoice = ['rock', 'paper', 'scissors']
    return weaponChoice[Math.random()*weaponChoice.length | 0];
}
let computerSelection = computerPlay();
console.log(computerSelection);

//Push both player and computer selections through `playRound` function
function playRound () {
  if (playerSelection === computerSelection) {
      console.log("Tie Game");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log ("You win, Rock Beats Scissors!");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log ("You win, Paper Beats Rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log ("You win, Scissors beats Paper!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log ("You lose, Paper beats Rock!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log ("You lose, Scissors beats Paper!");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log ("You lose, Rock beats Scissors!");
  } else {
    console.log ("No Cheating, you lose.");
  }
}

playRound();

//Using `loop` call `playRound` function for a 5 round game and keep score.