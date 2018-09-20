// The specific letters that user will type
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Setting for zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];

// Sets the computerGuess variable equal to a random choice from the computerChoice array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}
// countGuessesLeft();

var restart = function() {
	guessesLeft = 9;
	letterUser = [];
}

// When the user presses a key
document.onkeyup = function(event) {
	var userGuess = event.key;

	if (computerChoices.includes(userGuess)) {
		letterUser.push(userGuess);
		document.getElementById("letter").innerText = letterUser;
	} else {
		alert("You have to guess 'letter'!");
		return
	}
	countGuessesLeft();
	farUserGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		restart();
	}
	else {
		guessesLeft--;
	}
  };
// testing out Jquery, this is amazing
$(document).ready(function(){
	$("#imgBrand1")
		.mouseover(function(){
		this.src = "assets/images/pressKey.jpg"
	}).mouseout(function(){
		this.src = "assets/images/Abcd.jpg"
	});

	$("#imgBrand2").hide(1000).show(1000).hide(1000).show(1000);

	$("#button").on("click", function(){
		$("#button").html("want to play again?"); 
	});
});