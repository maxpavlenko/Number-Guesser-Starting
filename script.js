let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// https://www.codecademy.com/practice/projects/number-guesser-independent-practice
// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}
console.log(generateTarget());

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
  const humanDifference = getAbsoluteDistance(userGuess, secretTarget);
  const computerDifference = getAbsoluteDistance(computerGuess, secretTarget);
  alertMessage(userGuess);
  return computerDifference >= humanDifference;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } 
  if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}

const getAbsoluteDistance = (a1, a2) => {
  return (Math.abs((a1 - a2)));
}

const alertMessage = (userGuess) => {
    if (userGuess > 9 || userGuess < 0) {
      alert('Guess must be between 0 and 9!'); 
  }
};