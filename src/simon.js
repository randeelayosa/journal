export function turn(){
  var move = Math.floor(Math.random() * (5 - 1)) + 1;
  console.log(move);
  showMove(move);
}

export function showMove(move){
  if (move == 1) {

  } else if (move == 2) {

  } else if (move == 3) {

  } else if (move == 4) {

  }
}


//hit start button, that generates a number between 1 and 4, that number gets pushed to an array, game reads that array, buttons light up corresponding to the number, user clicks a button, clicks are pushed to an array (1,2,3,4), if click array does not equal to the move array = end of game, else if the click array is equal to the move array = run Math.random function again, add that number to the move array, click array is emptied out then game buttons light up again and you can click again. repeat.
