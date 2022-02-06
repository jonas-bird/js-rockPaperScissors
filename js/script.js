// computer chooses randomly
function computerPlay() {
  let randChoice = Math.floor(Math.random() * 3);
  if (randChoice == 0) {
    return "rock";
  } else if (randChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // make sure that the players choice is in lower case
  safePlayerSelection = playerSelection.toLowerCase();

  // check for a tie
  if (safePlayerSelection == computerSelection) {
    return "Tie, no one wins";
  } else if (safePlayerSelection == "rock") {
    // If the player has selected rock check to see if the computer selected scissors
    if (computerSelection == "scissors") {
      return "You win! Rock breaks Scissors";
    } else {
      return "You lose! Paper beats Rock";
    }
  } else if (safePlayerSelection == "scissors") {
    // If the player has selected scissors see if the computer selected paper
    if (computerSelection == "paper") {
      return "You win! Scissors cut Paper";
    } else {
      return "You lose! Rock breaks Scissors";
    }
  } else if (safePlayerSelection == "paper") {
    // If the player selected paper check to see if the computer selected rock
    if (computerSelection == "rock") {
      return "You win! Paper covers Rock";
    } else {
      return "You lose! Scissors cut Paper";
    }
  } else {
    return "Unknown input, no winner";
  }
}

// testing code
let playerSelection = "rock";
for (let i = 0; i < 5; i++) {
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
}
// test to make sure that I properly converted payer input to lowercase
const computerSelection = computerPlay;
playerSelection = "Rock";
console.log(playRound(playerSelection, computerSelection));
// make sure that the script does not crash on bad input
playerSelection = "Spock";
console.log(playRound(playerSelection, computerSelection));
