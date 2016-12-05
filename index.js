#!/usr/bin/env node

var program = require('commander');
var prompt = require('prompt');

console.log('hello world!');
var board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};
var moveCount = 0;

var addBoard = function(position, player) {
  board[position] = player;
  moveCount++;
}

var printBoard = function () {
  console.log('\n' +
        ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        ' ---------\n' +
        ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        ' ---------\n' +
        ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
}

prompt.start();

var checkWin = function (player, position, callback) {
  return false;
}

var play = function(i) {
  if (i===9) {
    return;
  }
  prompt.get(['Player1_move'], function (err, result) {

    console.log('  move: ' + result.Player1_move);
    addBoard(result.Player1_move, 'X');
    printBoard();
    play(i + 1)
  });
}
play(0)
  

  



























