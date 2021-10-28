

// the player class defines the attributes of the players to be created.
class Player {
  constructor(id,name,guesses) {
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
    //multiplier is independent of shotgun status
    this._hasMultiplier = false;
    // multiplier value resets when a player has guessed wrong
    this._multiplierValue = 1;
  }
  
  get id(){
    return this._id;
  }
  setId(id){
    this._id = id;
  }
  get name(){
    return this._name;
  }
  setName(name){
    this._name = name;
  }
  // when a player adds a bit, the turn count increases by one
  addGuess(guess){
    this._guesses.push(guess);
    this._turnCount++;
  }

  addIndividualPoints(points){
    this._individualPoints.push(points);
  }

  addWasRight(wasRight){
    this._wasRight.push(wasRight);
  }

  setIsShotgun(isShotgun){
    this._isShotgun = isShotgun;
  }


calculateScore(){

}

  //recalculates the user score from the individual points
  updateScore(points){
    
  }

  };


export default Player;
