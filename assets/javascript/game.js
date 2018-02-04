var letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var usedLetters = [];
var guessesLeft = 10;
var computerPick = letterChoices[Math.floor(Math.random() * letterChoices)];
var reset = function(){
    guessesLeft = 10;
    usedLetters = [];
    computerPick = letterChoices [Math.floor(Math.random() * letterChoices.length)];
}


document.onkeyup = function(event){
   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   usedLetters.push(userGuess);
   console.log("Game Function")
   if (userGuess === computerPick){
       wins++;
       reset();
   }
   else {
       guessesLeft--
   }
   if(guessesLeft===0){
       losses++;
       reset();
   }
   
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("letters-used").innerHTML = "Letters Used: " + usedLetters;

    }