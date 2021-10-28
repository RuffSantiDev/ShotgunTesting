
//this is the logic for a round of shotgun

  // THIS HAPPENED BEFORE A ROUND STARTS
  //  the players have entered their number of players and their player names, 
  // they were prompted to start the game and game.round was set to 1
  
  // 'PLAYER INPUT GUESS LOOP - FUNCTION'
  // the first player is prompted to enter his guess for the current round
  // the guess is stored in the player object via addGuess(guess) 
  // the turn count of the player is updated with +1 (turncount starts at 0 and reflects the true number of turns he has made)
  // a function verifies that the current player wasn't the last player
  // if the current player wasn't the last player, the player input guess loop starts for the next player
  //if the current player was the last player, the guess input is finished

  // 'DRAW CARD - FUNCTION'
  // the players are prompted to draw the card
  // cardGenerator() generates the card for the current round
    // rules for card generator()
    // there are 4 cards wit a value from 1 to 4 = 16 cards
    // each card value can only appear 4 times
    // when there are 16 cards, no more cards can be generated
    // card generator needs to backcheck that with the game data store
  // the value of the current card is stored in the card array of the game
  // the card is displayed to the players
  
  // DETERMINE INDIVIDUAL POINTS AND SCORES - FUNCTION

  // DETERMINE INDIVIDUAL PLAYER  POINTS - FUNCTION
  // a function compares the guess of each player against the current card
  // --> The player receives 1 point if even/uneven is true
  // --> The player receives 2 points if the number is correct
  // --> The player receives NO points if he was wrong
  // whenever a player was right: wasRight = true
  // whenever a player was wrong: wasRight = false
  // the value of wasRight is added to the array via player method addWasRight(wasRight)
  // the number of points is stored in die indivdiualPoints array via the Player Method addIndividualPoints(points)

  // DETERMINE PLAYER MULTIPLIER VALUE - FUNCTION
  // a player reveives a multiplier for each consecutive round that he was right
  // the default multiplier is 1
  // the function checks if the current round has been won or not (wasRight === true) 
    // if the current wasRight of the player is true, the function will check the previous wasRight value
        // if the previous wasRight value is also true, the function will increase the multiplier by 1
        // the function will check the previous wasRight value as long as it is true and increase the multiplier each time
        // if the wasRight turns out to be false at some point the while loop will end
    // if the current wasRight is false, multiplier is reset to 1

  // DETERMINE PLAYER SHOTGUN STATUS
  // the player receives shotgun status when he was right for three times in a row
  // the function checks the current shotgun status and the current multiplier value
  // when the current multiplier of a player is >= 3 the player receives shotgun status (isShotgun = true)
  // if the current multiplier is <3 the player has no shotgun status (isShotgun = false)
  // the shotgun status is set via the player method setIsShotgun(isShotgun)

  // DETERMINE PLAYER SCORE
  // a function determines for each player
  // -> the multiplier value ('was right in a row')
  //    -> the function takes a look at the current value -> .wasRight[currentRound]
  // -> 
