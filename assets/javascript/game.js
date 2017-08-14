

$(document).ready(function() {

// GLOBAL variables
var targetNumber=0;
var userNumber=0;
var targetMin = 19;
var targetMax = 120;
var crystalMin = 1;
var crystalMax = 12;
var crystalNumber = 0;
var winCount = 0;
var loseCount = 0;

// Load the win/lose panel
    crystalButton = $("<h5>");
    crystalButton.text("Total Wins: " + winCount);
    $("#score-board").html(crystalButton);
    crystalButton = $("<h5>");
    crystalButton.text("Total Losses: " + loseCount);
    $("#score-board").append(crystalButton);

// Load/initialize the your score panel
    crystalButton = $("<p>");
    crystalButton.text(userNumber);
    $("#score").html(crystalButton);


// Load initial values
function initialLoad() {
//function targetLoad() {
    // Assign a random number for the target number
    targetNumber=Math.floor(Math.random() * (targetMax - targetMin + 1)) + targetMin;
    $("#game-total").text(targetNumber);


//function crystalLoad() {
  // Assign a random number to each of the 4 crystals
  crystalNumber=Math.floor(Math.random() * (crystalMax - crystalMin + 1)) + crystalMin;
  var crystalButton = $("<button>");
  crystalButton.attr("value", crystalNumber);
  crystalButton.attr("id", "button-1")
  crystalButton.addClass("btn btn-primary number tc-btn");
  $("#buttons").html(crystalButton);

  crystalNumber=Math.floor(Math.random() * (crystalMax - crystalMin + 1)) + crystalMin;
  crystalButton = $("<button>");
  crystalButton.attr("value", crystalNumber);
  crystalButton.attr("id", "button-2")
  crystalButton.addClass("btn btn-primary number tc-btn");
  $("#buttons").append(crystalButton);

  crystalNumber=Math.floor(Math.random() * (crystalMax - crystalMin + 1)) + crystalMin;
  crystalButton = $("<button>");
  crystalButton.attr("value", crystalNumber);
  crystalButton.attr("id", "button-3")
  crystalButton.addClass("btn btn-primary number tc-btn");
  $("#buttons").append(crystalButton);

  crystalNumber=Math.floor(Math.random() * (crystalMax - crystalMin + 1)) + crystalMin;
  crystalButton = $("<button>");
  crystalButton.attr("value", crystalNumber);
  crystalButton.attr("id", "button-4")
  crystalButton.addClass("btn btn-primary number tc-btn");
  $("#buttons").append(crystalButton);

  crystalButton = $("<img>");
  crystalButton.attr("src", "assets/images/crystal1.jpg");
  crystalButton.attr("alt", "crystal image");
  $("#button-1").html(crystalButton);  

  crystalButton = $("<img>");
  crystalButton.attr("src", "assets/images/crystal2.jpg");
  crystalButton.attr("alt", "crystal image");
  $("#button-2").html(crystalButton);  

  crystalButton = $("<img>");
  crystalButton.attr("src", "assets/images/crystal3.jpg");
  crystalButton.attr("alt", "crystal image");
  $("#button-3").html(crystalButton);  

  crystalButton = $("<img>");
  crystalButton.attr("src", "assets/images/crystal4.jpg");
  crystalButton.attr("alt", "crystal gayle");
  $("#button-4").html(crystalButton);  

  crystalButton = $("<p>");
  crystalButton.text(userNumber);
  $("#score").html(crystalButton);

}

function clear() {
 targetNumber=0;
 userNumber=0;
 crystalNumber = 0;

}

initialLoad();

    // Play the game
    $(".btn").on("click", function() {
      var valClicked = $(this).attr("value");
      console.log("valClicked" + valClicked);
      userNumber = userNumber + parseInt(valClicked);
      console.log(targetNumber);
      console.log("valClicked " + valClicked);
      console.log("userNumber " + userNumber);
      crystalButton = $("<p>");
      crystalButton.text(userNumber);
      $("#score").html(crystalButton);

        if (userNumber === targetNumber) {
            // you win
            winCount = ++winCount;
            clear();
            initialLoad();
        } else if (userNumber > targetNumber) {
            // you lose
            loseCount = ++loseCount;
            clear();
            initialLoad();
        }

        crystalButton = $("<h5>");
        crystalButton.text("Total Wins:   " + winCount);
        $("#score-board").html(crystalButton);
        crystalButton = $("<h5>");
        crystalButton.text("Total Losses: " + loseCount);
        $("#score-board").append(crystalButton);

     });
console.log("I'm out of the click function " + userNumber);

});