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
function playRound (playerSelection, computerPlay) {
  
}

//Using `loop` call `playRound` function for a 5 round game and keep score.