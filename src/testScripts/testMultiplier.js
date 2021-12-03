function determineCurrentMultiplier(pointArray, currentIndex){
  // let currentIndex = this._currentRound -1;
  // let pointArray = this._individualPoints;
  let currentPoints = pointArray[currentIndex - 1];
  let multiplier = 1;
  if(currentPoints > 0){
    let prevIndex = currentIndex -1;
    let prevPoints = pointArray[prevIndex];
    if(prevIndex >= 0){
      while(prevPoints > 0 && prevIndex >= 0) {
        multiplier++;
        prevIndex--;
        prevPoints = pointArray[prevIndex];
      }
    }
  }
    return multiplier;
}



console.log(determineCurrentMultiplier([1,0,0],3));