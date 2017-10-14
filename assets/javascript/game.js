//- There will be four crystals displayed as buttons on the page.
//- The player will be shown a random number at the start of the game.
//- When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
//- Your game will hide this amount until the player clicks a crystal.
//- When they do click one, update the player's score counter.
//- The player wins if their total score matches the random number from the beginning of the game.
//- The player loses if their score goes above the random number.
//- The game restarts whenever the player wins or loses.
//- When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course,
//the user's score (and score counter) will reset to zero.
//- The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



//1. window.onload generate 5 variables containing a random number
//    - 1 var must be between 1 and 100 and instantly displayed in Div (var compScore)
//    - 4 numbers must be between 1 and 9 and will be used later on event listeners (clicks)
//2. Add 4 event listeners (clicks) for the 4 diamonds
//3. Add a variable starting as 0 for the players score, and display this in the div
//4. When the event listeners are clicked the variables are counted++ and this is displayed in the players score (var playerScore = var d1 + var d2 + var d3 + var d4)

//5. If playerScore > compScore then loss()
//6. If playerScore === compScore then win()

//7. loss() = window.onload, reset all variables & alert user to loss
//8. win() = window.onload, reset all variables & alert user to win


//var myScore = 0;
//var compScore = Math.floor((Math.random() * 100) + 1);
//var dOne = Math.floor((Math.random() * 10) + 1);
//var dTwo = Math.floor((Math.random() * 10) + 1);
//var dThree = Math.floor((Math.random() * 10) + 1);
//var dFour = Math.floor((Math.random() * 10) + 1);
//var winCount = 0;
//var lossCount = 0;
//var diamond = document.getElementById('diamond');
//var amethyst = document.getElementById('amethyst');
//var emerald = document.getElementById('emerald');
//var garnet = document.getElementById('garnet');


// On load, generate all of the random numbers and set the counters to 0

$(document).ready(function set() {
  myScore = 0;
  compScore = Math.floor((Math.random() * 100) + 1);
  dOne = Math.floor((Math.random() * 10) + 1);
  dTwo = Math.floor((Math.random() * 10) + 1);
  dThree = Math.floor((Math.random() * 10) + 1);
  dFour = Math.floor((Math.random() * 10) + 1);
  winCount = 0;
  lossCount = 0;
  console.log(compScore);
  console.log(dOne);
  console.log(dTwo);
  console.log(dThree);
  console.log(dFour);
  $("#guess-box").html(compScore.toString());
  $("#score-box").html(myScore.toString());
});


// Click Functions

  $('#diamond').click(function(){
  myScore = myScore + dOne
  $("#score-box").html(myScore.toString())
  if(myScore === compScore) {
    win();
    console.log("win function")
    }
  if(myScore > compScore) {
    loss();
    console.log("loss function")
    }
  });

  $('#amethyst').click(function(){
  myScore = myScore + dTwo
  $("#score-box").html(myScore.toString())
  if(myScore === compScore) {
    win();
    console.log("win function")
    }
  if(myScore > compScore) {
    loss();
    console.log("loss function")
    }
  });

  $('#emerald').click(function(){
  myScore = myScore + dThree
  $("#score-box").html(myScore.toString())
  if(myScore === compScore) {
    win();
    console.log("win function")
    }
  if(myScore > compScore) {
    loss();
    console.log("loss function")
    }
  });

  $('#garnet').click(function(){
  myScore = myScore + dFour
  $("#score-box").html(myScore.toString())
  if(myScore === compScore) {
    win();
    console.log("win function")
    }
  if(myScore > compScore) {
    loss();
    console.log("loss function")
    }
  });

//Win Function - alert user to win, add and display win tally

function win() {
alert("You Win!")
winCount++
$("#win-loss1").html(winCount.toString());
console.log(winCount)
reset();
}

// Loss function - alert user to loss, add and display loss tally

function loss() {
alert("You Lose!")
lossCount++
$("#win-loss2").html(winCount.toString());
console.log(lossCount)
reset();
}

function reset() {
  myScore = 0;
  compScore = Math.floor((Math.random() * 100) + 1);
  dOne = Math.floor((Math.random() * 10) + 1);
  dTwo = Math.floor((Math.random() * 10) + 1);
  dThree = Math.floor((Math.random() * 10) + 1);
  dFour = Math.floor((Math.random() * 10) + 1);
  console.log(compScore);
  console.log(dOne);
  console.log(dTwo);
  console.log(dThree);
  console.log(dFour);
  $("#guess-box").html(compScore.toString());
  $("#score-box").html(myScore.toString());
};
