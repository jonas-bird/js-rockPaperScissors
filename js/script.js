// main game function
function game() {
  // declare a variable to hold the overall results
  let wins = 0;
  let losses = 0;
  // tell the player what is going on
  console.log("Lets play rock, paper, scissors, best of 5");
  // loop through 5 games
  for (let i = 0; i < 5; i++) {
    // prompt the user
    const playerSelection = window.prompt(
      "Please enter rock, paper or scissors: ",
      ""
    );
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    // check to see if the player won
    if (result[4] == "w") {
      wins++;
    } else if (result[4] == "l") {
      losses++;
    }
  } // end for loop
  // print overall results
  if (wins > losses) {
    console.log("Good game! You win.");
  } else if (losses > wins) {
    console.log("Too bad, you lost. Better luck next time");
  } else {
    console.log("Hmm, could have gone worse...");
  }
} // end game function

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
// compare results and return results of the round
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

game();
