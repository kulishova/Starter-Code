'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message
}

const eventHendler = function () {
  const guessingNumber = Number(document.querySelector('.number-input').value)

  //   No input
  if (!guessingNumber) {
    displayGuessMessage('Введите число!')

    // Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Правильно!')
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)'
    document.querySelector('.question').style.width = '50rem'
    document.querySelector('.question').textContent = secretNumber

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
    // Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      )
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayGuessMessage('Game over!')
      document.querySelector('.score').textContent = 0
    }
  }
}

const resetButton = function () {
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)'
  displayGuessMessage('Начни угадывать!')
  document.querySelector('.number-input').value = ''
  document.querySelector('.question').textContent = '???'
  document.querySelector('.question').style.width = '25rem'
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.score').textContent = score
}

document.querySelector('.check').addEventListener('click', eventHendler)
document.querySelector('.again').addEventListener('click', resetButton)
