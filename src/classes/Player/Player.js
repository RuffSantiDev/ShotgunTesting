

// the player class defines the attributes of the players to be created.
class Player {
  constructor(id,name) {
    this._id = id;
    this._name = name;
    // stores the guesses of a player in an array.
    this._guesses = [];
    // stores the individual points of each round in an array
    this._individualPoints = [];
    // 
    this._score = 0;
    // counts each turn the player has made
    this._turnCount = 0;
        // this.wasRight stores 1 whenever a player was right and 0 whenever a player was wrong. 
    this._wasRight = [];
    // player becomes shotgun when he was right three times in a row
    // player looses shotgun status when he is wrong
    this._isShotgun = false;
    //multiplier is independent of shotgun status and stores an array of multiplier values
    this._multipliers = []
  }
  

  // get functions
  get id(){
    return this._id;
  }
  get name(){
    return this._name;
  }
  get guesses(){
    return this._guesses;
  }
  get individualPoints(){
    return this._individualPoints;
  }
  get score(){
    return this._score;
  }
  get turnCount(){
    return this._turnCount;
  }

  get wasRight(){
    return this._wasRight;
  }
  get isShotgun(){
    return this._isShotgun;
  }
  get multipliers(){
    return this._multipliers;
  }

// set functions
  set id(id){
    this._id = id;
  }
  set name(newName){
    this._name = newName;
  }


// METHODS

  // when a player adds a guess, the turn count increases by one
  addGuess(guess){
    this._guesses.push(guess);
    this._turnCount++;
  }

  addIndividualPoints(points){
    this._individualPoints.push(points);
  }

  addMultiplierValue(multiplierValue){
    this._multipliers.push(multiplierValue);
  }

  addWasRight(wasRight){
    this._wasRight.push(wasRight);
  }

  setIsShotgun(isShotgun){
    this._isShotgun = isShotgun;
  }

  determineCurrentRoundPoints(cards,currentRound){
    const currentGuess = this._guesses[currentRound - 1];
    const currentCard = cards[currentRound - 1];
    let result;
    if(currentGuess === 'even' || currentGuess === 'uneven') {
      if(currentGuess === 'even' && currentCard % 2 == 0 ){
        // guess is even and current card is even -> player was right
        return 1;
        } else if (currentGuess === 'even' && currentCard % 2 == 1){
          // guess is even and card is uneven -> player was wrong
          return  0;
        } else if (currentGuess === 'uneven' && currentCard % 2 == 1) {
          return 1;
        } else if (currentGuess === 'uneven' && currentCard % 2 == 0){
          return 0;
        } else {
          return 'error';
        } 
      } else {
        const currentGuessNr = Number(currentGuess);
        if (currentGuessNr === currentCard) {
          return 2;
        } else {
          return 0;
        }
      }

    }

    determineCurrentMultiplier(currentRound){

    }
    


  

calculateScore(){

}

  //recalculates the user score from the individual points
  updateScore(newPoints){
    this._score += newPoints;
  }

  };


// export default Player;

module.exports = Player;
