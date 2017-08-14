

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
var crystalButton;



// Load initial values
function initialLoad() {
// targetLoad() {
// Assign a random number for the target number
    targetNumber=Math.floor(Math.random() * (targetMax - targetMin + 1)) + targetMin;
    crystalButton = $("<h3>");
    crystalButton.addClass("panel-title");
    crystalButton.text("Try to match the number: ");
    $("#game-total").html(crystalButton);
    crystalButton = $("<h3>");
    crystalButton.addClass("panel-title");
    crystalButton.text(targetNumber);
    $("#game-total").append(crystalButton);


// crystalLoad() {
// Assign a random number to each of the 4 crystals and add the button to the screen
  crystalNumber=Math.floor(Math.random() * (crystalMax - crystalMin + 1)) + crystalMin;
  crystalButton = $("<button>");
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

// Add the image to each button, this will need some logic cleanup to do with less code
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

// Add the initial score to the screen
  crystalButton = $("<h3>");
  crystalButton.text("Your");
  crystalButton.addClass("panel-title");
  $("#score-head").html(crystalButton);
  crystalButton = $("<h3>");
  crystalButton.text("Score");
  crystalButton.addClass("panel-title");
  $("#score-head").append(crystalButton);
  
  crystalButton = $("<p>");
  crystalButton.text(userNumber);
  $("#score").html(crystalButton);

// Load the win/lose panel
  crystalButton = $("<h3>");
  crystalButton.text("Game");
  crystalButton.addClass("panel-title");
  $("#score-board-head").html(crystalButton);
  crystalButton = $("<h3>");
  crystalButton.text("Statistics");
  crystalButton.addClass("panel-title");
  $("#score-board-head").append(crystalButton);
  
  crystalButton = $("<h5>");
  crystalButton.text("Wins: " + winCount);
  $("#score-board").html(crystalButton);
  crystalButton = $("<h5>");
  crystalButton.text("Losses: " + loseCount);
  $("#score-board").append(crystalButton);

// load the instruction panel
  crystalButton = $("<p>");
  crystalButton.text("You will be given a random number at the start of the game.");
  $("#instructions").html(crystalButton);
  crystalButton = $("<p>");
  crystalButton.text("There are four crystals. By clicking on the cyrstal you will add a specific amount of points to your total score.");
  $("#instructions").append(crystalButton);
  crystalButton = $("<p>");
  crystalButton.text("You win the game by matching your total score to the random number, you lose the game if your total score goes above the random number.");
  $("#instructions").append(crystalButton);
  crystalButton = $("<p>");
  crystalButton.text("The value of each crystal is hidden from you until you click on it.");
  $("#instructions").append(crystalButton);
  crystalButton = $("<p>");
  crystalButton.text("Each time when the game starts, the game will change the values of each crystal.");
  $("#instructions").append(crystalButton);

// load the jumbotron
  crystalButton = $("<h2>");
  crystalButton.text("Crystal Collector");
  crystalButton.addClass("text-center tc-text-center");
  $("#jumbo").html(crystalButton);
  crystalButton = $("<h4>");
  crystalButton.text("Collect all the right crystals!");
  crystalButton.addClass("text-center");
  $("#jumbo").append(crystalButton);


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