
const Player = require('../../classes/Player/Player');

const cards = [3,3,1,1,2,2,1,3,4,1,3,3,2,2,4,4]
const currentRound = 7;

const player01Points = [0,1,2,0,1,2,2,3];

const player01 = new Player ('Player 01', 'Paul');
const player02 = new Player ('Player 02', 'John');



player01.setIndividualPoints(player01Points);

console.log('' + player01.individualPoints);

const currentMultiplier = player01.getCurrentMultiplier(currentRound);

console.log(currentMultiplier);

console.log(player01.isShotgun);