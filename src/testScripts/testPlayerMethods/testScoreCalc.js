
const Player = require('../../classes/Player/Player');

const cards = [3,3,1,1,2,2,1,3,4,1,3,3,2,2,4,4]
const currentRound = 1;

const player01Points = [0,1,2,0,1,2,2,3];

const player01 = new Player ('Player 01', 'Paul');
const player02 = new Player ('Player 02', 'John');

player01.currentRound = currentRound;


player01.guesses = ["even","uneven","3","1","uneven","4","even"];
player01.currentGuess = null;
player01.individualPoints = [];
player01.currentPoints = null;
player01.currentScore = 0;
player01.currentTurn = 0;
//results are the multiplied values
player01.individualResults = [];
player01.currentResult = null;
player01.isShotgun = false;
player01.multipliers = [];
player01.currentMultiplier = 1;
player01.currentRound = 1;