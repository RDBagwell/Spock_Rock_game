import {startConfetti, stopConfetti, removeConfetti} from './confetti.js';

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');

const playerRockEl = document.getElementById('playerRock');
const playerPaperEl = document.getElementById('playerPaper');
const playerScissorsEl = document.getElementById('playerScissors');
const playerLizardEl = document.getElementById('playerLizard');
const playerSpockEl = document.getElementById('playerSpock');

const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const computerRockEl = document.getElementById('computerRock');
const computerPaperEl = document.getElementById('computerPaper');
const computerScissorsEl = document.getElementById('computerScissors');
const computerLizardEl = document.getElementById('computerLizard');
const computerSpockEl = document.getElementById('computerSpock');

const resultText = document.getElementById('resultText'); 
const allGameIcons = document.querySelectorAll('.far');
const resetBnt = document.querySelector('.reset-icon');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScore = 0;
let computerScore = 0;

let computerChoice = '';

function updateScore(playchoice) {
  if(playchoice == computerChoice){
    resultText.textContent = "It's a tie!"
  } else {
    const choice = choices[playchoice];
    if(choice.defeats.indexOf(computerChoice) > -1){
      startConfetti();
      resultText.textContent = "You Won!";
      playerScore++;
      playerScoreEl.textContent = playerScore;
    } else{
      stopConfetti();
      resultText.textContent = "You Lost!";
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }

  }
}

function resetSelected() {
  allGameIcons.forEach((icon)=>{
    icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}

function resetAll() {
  playerScore = 0;
  computerScore = 0
  playerScoreEl.textContent = playerScore;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  computerScoreEl.textContent = computerScore;
  computerChoice = '';
  resultText.textContent = "";
  resetSelected();
}

function computerRanomChoice() {
  const computerChoiceNumber = Math.floor(Math.random()* 5);
  if(computerChoiceNumber === 0){
    computerChoice = 'rock';
    computerselect(computerChoice);
  } else if (computerChoiceNumber === 1){
    computerChoice = 'paper';
    computerselect(computerChoice);
  } else if (computerChoiceNumber === 2){
    computerChoice = 'scissors';
    computerselect(computerChoice);
  } else if (computerChoiceNumber === 3){
    computerChoice = 'lizard';
    computerselect(computerChoice);
  } else{
    computerChoice = 'spock';
    computerselect(computerChoice);
  }
}

function checkResult(playchoice) {
  resetSelected();
  computerRanomChoice();
  updateScore(playchoice)
}

function select(playchoice) {
  resetSelected();
  checkResult(playchoice);
  switch (playchoice) {
    case 'rock':
      playerRockEl.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;

      case 'paper':
        playerPaperEl.classList.add('selected');
        playerChoiceEl.textContent = ' --- Paper';
        break;

      case 'scissors':
        playerScissorsEl.classList.add('selected');
        playerChoiceEl.textContent = ' --- Scissors';
        break;

      case 'lizard':
        playerLizardEl.classList.add('selected');
        playerChoiceEl.textContent = ' --- Lizard';
        break;

      case 'spock':
        playerSpockEl.classList.add('selected');
        playerChoiceEl.textContent = ' --- Spock';
        break;
  
    default:
      break;
  }
}
window.select = select;

function computerselect(computerChoice) {
  switch (computerChoice) {
    case 'rock':
      computerRockEl.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;

      case 'paper':
        computerPaperEl.classList.add('selected');
        computerChoiceEl.textContent = ' --- Paper';
        break;

      case 'scissors':
        computerScissorsEl.classList.add('selected');
        computerChoiceEl.textContent = ' --- Scissors';
        break;

      case 'lizard':
        computerLizardEl.classList.add('selected');
        computerChoiceEl.textContent = ' --- Lizard';
        break;

      case 'spock':
        computerSpockEl.classList.add('selected');
        computerChoiceEl.textContent = ' --- Spock';
        break;
  
    default:
      break;
  }
}

resetBnt.addEventListener('click', resetAll);