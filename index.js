#!/usr/bin/env node
var program = require('commander');

var playerOne = true;
var stillPlaying = true;
var initialBoard = [1, 2, 3,
                    4, 5, 6,
                    7, 8, 9];
var board = initialBoard;

while (stillPlaying) {

  program
    .version('1.0.0')

  program
    .command('1') 
    .description('place your marker at position 1')
    .action(function() {
      if (board[0] !== 'X' && board[0] !== 'O') {
        if (playerOne) {
          board[0] = 'X';
        } else {
          board[0] = 'O';
        }
        playerOne = !playerOne;
      } else {
        console.log(board[0], ' already went there, please pick a new space.');
      }
    });

  program
    .command('2') 
    .description('place your marker at position 2')
    .action(function() {
      if (board[1] !== 'X' && board[1] !== 'O') {
        if (playerOne) {
          board[1] = 'X';
        } else {
          board[1] = 'O';
        }
        playerOne = !playerOne;
      } else {
        console.log(board[1], ' already went there, please pick a new space.');
      }
    });

  program
    .command('3') 
    .description('place your marker at position 3')
    .action(function() {
      if (board[2] !== 'X' && board[2] !== 'O') {
        if (playerOne) {
          board[2] = 'X';
        } else {
          board[2] = 'O';
        }
        playerOne = !playerOne;
      } else {
        console.log(board[2], ' already went there, please pick a new space.');
      }
    });

  program
    .command('4') 
    .description('place your marker at position 4')
    .action(function() {
      if (board[3] !== 'X' && board[3] !== 'O') {
        if (playerOne) {
          board[3] = 'X';
        } else {
          board[3] = 'O';
        }
        playerOne = !playerOne;
      } else {
        console.log(board[3], ' already went there, please pick a new space.');
      }
    });

  program
    .command('5') 
    .description('place your marker at position 5')
    .action(function() {
      if (board[4] !== 'X' && board[4] !== 'O') {
        if (playerOne) {
          board[4] = 'X';
        } else {
          board[4] = 'O';
        }
        playerOne = !playerOne;
      } else {
        console.log(board[4], ' already went there, please pick a new space.');
      }
    });

  program
    .command('6') 
    .description('place your marker at position 6')
    .action(function() {
      if (board[5] !== 'X' && board[5] !== 'O') {
        if (playerOne) {
          board[5] = 'X';
        } else {
          board[5] = 'O';
        }
        playerOne = !playerOne;
      } else {
        console.log(board[5], ' already went there, please pick a new space.');
      }
    });

  program
    .command('7') 
    .description('place your marker at position 7')
    .action(function() {
      if (board[6] !== 'X' && board[6] !== 'O') {
        if (playerOne) {
          board[6] = 'X';
        } else {
          board[6] = 'O';
        }
        playerOne = !playerOne;
      } else {
        console.log(board[6], ' already went there, please pick a new space.');
      }
    });

  program
    .command('8') 
    .description('place your marker at position 8')
    .action(function() {
      if (board[7] !== 'X' && board[7] !== 'O') {
        if (playerOne) {
          board[7] = 'X';
        } else {
          board[7] = 'O';
        }
        playerOne = !playerOne;
      } else {
        console.log(board[7], ' already went there, please pick a new space.');
      }
    });

  program
    .command('9') 
    .description('place your marker at position 9')
    .action(function() {
      if (board[8] !== 'X' && board[8] !== 'O') {
        if (playerOne) {
          board[8] = 'X';
        } else {
          board[8] = 'O';
        }
        playerOne = !playerOne;
      } else {
        console.log(board[8], ' already went there, please pick a new space.');
      }
    });

  program
    .command('n') 
    .description('start a new game before current game is over')
    .action(function() {
      board = initialBoard;
    });

  program
    .command('q') 
    .description('quit the game and exit back to the terminal')
    .action(function() {
      stillPlaying = false;
    });
    
  program.parse(process.argv);

  // DISPLAY WHICH PLAYERS TURN IT IS
  if (playerOne) {
    console.log('CURRENT PLAYER: X');
  } else {
    console.log('CURRENT PLAYER: O');
  }

  // DISPLAY BOARD
  console.log('');
  console.log('+---+---+---+');
  console.log('| ', board[0], ' | ', board[1], ' | ', board[2], ' |');
  console.log('+---+---+---+');
  console.log('| ', board[3], ' | ', board[4], ' | ', board[5], ' |');
  console.log('+---+---+---+');
  console.log('| ', board[6], ' | ', board[7], ' | ', board[8], ' |');
  console.log('+---+---+---+');
  console.log('');

  // PROMPT USER FOR INPUT
  console.log('Please press a number corresponding to an available space on the board.');
  
}