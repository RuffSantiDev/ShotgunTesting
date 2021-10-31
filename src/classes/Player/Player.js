

// the player class defines the attributes of the players to be created.
class Player {
  constructor(id,name) {
    this._id = id;
    this._name = name;
    this._guesses = [];
    this._currentGuess = null;
    this._individualPoints = [];
    this._currentPoints = null;
    this._currentScore = 0;
    this._currentTurn = 0;
    //results are the multiplied points 
    this._individualResults = [];
    this._currentResult = null;
    this._isShotgun = false;
    this._multipliers = [];
    this._currentMultiplier = 1;
    this._currentRound = 1;
  }
  

  // getters
  get id(){
    return this._id;
  }
  get name(){
    return this._name;
  }
  get guesses(){
    return this._guesses;
  }
  get currentGuess(){
    return this._currentGuess;
  }
  get individualPoints(){
    return this._individualPoints;
  }
  get currentPoints(){
    return this._currentPoints;
  }
  get currentScore(){
    return this._currentScore;
  }
  get currentTurn(){
    return this._currentTurn;  
  }
  get individualResults(){
    return this._individualResults;
  }
  get currentResult(){
    return this._currentResult;
  }
  get isShotgun(){
    return this._isShotgun;
  }
  get multipliers(){
    return this._multipliers;
  }
  get currentMultiplier(){
    return this._currentMultiplier;
  }
  get currentRound(){
    return this._currentRound;
  }

// setters 
  set id(id){
    this._id = id;
  }
  set name(newName){
    this._name = newName;
  }
  // current guess is updated when guess is pushed into guesses array
  // set currentGuess(currentGuess){
  //   this._currentGuess = currentGuess;
  // }

  // for testing only
  set guesses(array){
    this._guesses = array;
  }

  // for testing only. addIndividualPoints should be used to add points
  set individualPoints(array){
    this._individualPoints = array;
  }
  // current Points are set, when individual points are updated!
  // set currentPoints(currentPoints){
  //   this._currentPoints = currentPoints;
  // }
  // currentTurn is updated when a guess is added
  // set currentTurn(currentTurn){
  //   this._currentTurn = currentTurn;
  // }
   set isShotgun(isShotgun){
    this._isShotgun = isShotgun;
  }
  set currentMultiplier(currentMultiplier){
    this._currentMultiplier = currentMultiplier;
  }
  set currentRound(currentRound){
    this._currentRound = currentRound;
  }

  // for testing purposes



// METHODS

  // when a player adds a guess, the turn count increases by one
  addGuess(guess){
    this._guesses.push(guess);
    this._currentGuess = guess;
    this._currentTurn++;
  }



  // not used should be deleted
  // addWasRight(individualResults){
  //   this._individualResults.push(individualResults);
  // }


  // calculates points for current round
  determineCurrentRoundPoints(cards){
    const index = this.currentRound -1;
    const currentGuess = this._guesses[index];
    const currentCard = cards[index];
    let result;
    if(currentGuess === 'even' || currentGuess === 'uneven') {
      if(currentGuess === 'even' && currentCard % 2 === 0 ){
        // guess is even and current card is even -> player was right
        return 1;
        } else if (currentGuess === 'even' && currentCard % 2 === 1){
          // guess is even and card is uneven -> player was wrong
          return  0;
        } else if (currentGuess === 'uneven' && currentCard % 2 === 1) {
          return 1;
        } else if (currentGuess === 'uneven' && currentCard % 2 === 0){
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
    };

    
  addIndividualPoints(points){
    this._individualPoints.push(points);
    this._currentPoints = points;
  }

    // replpaced with get currentPoints
    // getCurrentRoundPoints(){
    //   const index = this.currentRound -1;
    //   const array = this.individualPoints;
    //   return array[index];
    // }

  determineCurrentMultiplier(){
    let currentIndex = this.currentRound -1;
    let prevIndex = currentIndex -1;
    let multiplier = 1;
    const pointArray = this.individualPoints;
    if(pointArray[currentIndex] >= 1) {
      while(pointArray[prevIndex] >= 1 ){
        prevIndex--;
        multiplier++;
      }
    }
      return multiplier;
  }

    
  addMultiplier(multiplier){
    this._multipliers.push(multiplier);
    this._currentMultiplier = multiplier;
  }

  calculateScore(){
    const index = this.currentRound -1;
    const currentScore = this.currentScore;
    const currentPoints = this.individualPoints[index];
    const currentMultiplier = this.currentMultiplier;
    const newScore = currentScore + (currentPoints * currentMultiplier);
    return newScore;
  }
  
  //recalculates the user currentScore from the individual points
  updateScore(score){
    this._currentScore = score;
  }
  // replace with get current multiplier
  // getCurrentMultiplier(){
  //   const index = this.currentRound -1;
  //   const array = this.multipliers;
  //   return array[index];
  // }

  // Shotgun status is not yet needed
  determineShotgunStatus(){
    const index = this.currentRound -1;
    const currentMultiplier = this.getCurrentMultiplier(index);
    if(currentMultiplier >= 3){
      this.isShotgun = true;
    }
  }
    

  // this method should create the player result after each round -> not working yet
  createRoundResult(cards){
    const currentRoundPoints = this.determineCurrentRoundPoints(cards);
    this.addIndividualPoints(currentRoundPoints);
    const currentMultiplier = this.determineCurrentMultiplier();
    this.addMultiplier(currentMultiplier);
    const newScore = this.calculateScore();
    this.updateScore(newScore);
  }

};


// export default Player;

module.exports = Player;
