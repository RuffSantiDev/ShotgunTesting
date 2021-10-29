
const Player = require('../../classes/Player/Player');

const cards = [3,3,1,1,2,2,1,3,4,1,3,3,2,2,4,4]
const currentRound = 1;
const currentCard = cards[currentRound-1];


const player01 = new Player ('Player 01', 'Paul');
const player02 = new Player ('Player 02', 'John');

// test addGuess Method

player01.addGuess('1');
// player01.addGuess('1');
// player01.addGuess('uneven');

player02.addGuess('uneven');

console.log('Player01 guesses: '+ player01.guesses);
console.log('Player02 guesses: '+ player02.guesses);
console.log('current card: ' + currentCard);


// test determine current round points
const player01Points = player01.determineCurrentRoundPoints(cards,currentRound);

const player02Points = player02.determineCurrentRoundPoints(cards,currentRound);

console.log('Player01 Points: '+ player01Points);
console.log('Player02 Points: '+ player02Points);

// test addIndividualPoints

player01.addIndividualPoints(player01Points);
player02.addIndividualPoints(player02Points);

console.log('Player01 individual points: ' + player01.individualPoints);
console.log('Player02 individual points: ' + player02.individualPoints);

const getCurrentRoundPoints = player02.currentPoints(currentRound);

console.log(getCurrentRoundPoints);
