
//Game Timer
var timerElement = document.getElementById("timer");
var secondsLeft = 60;
function setTimer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerElement.textContent = "Timer: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      return;
    }

  }, 1000);
}

//Start Game
document.getElementById("start-button").addEventListener("click", function() {
    setTimer();
});









//Commonly used data types do not include:
//strings, booleans, numbers, prompts

//Arrays in Javascript can be used to store:
//numbers, strings, booleans, all of the above

//String values are enclosed in:
// "", <>, (), #

//The coding language that makes websites interactive is:
//HTML, CSS, Javascript, French