var quizData = [{
    question: "Commonly used data types do not include: ",
    choice0: "strings",
    choice1: "booleans",
    choice2: "numbers",
    choice3: "prompts",
    answer: 3
},
{   
    question: "Arrays in Javascript can be used to store: ",
    choice0: "numbers",
    choice1: "strings",
    choice2: "objects",
    choice3: "all of the above",
    answer: 3
},
{
    question: "String values are enclosed in: ",
    choice0: "&&",
    choice1: "''",
    choice2: "<>",
    choice3: "{}",
    answer: 1
},
{
    question: "The coding language that makes websites interactive is: ",
    choice0: "HTML",
    choice1: "CSS",
    choice2: "Javascript",
    choice3: "none of the above",
    answer: 2
}];
console.log(quizData);

//Display quizData onto screen
function displayQuiz() {
    
}

//Game Timer
var timerElement = document.getElementById("timer");
var secondsLeft = 60;

function setTimer() {
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
    document.getElementById("questions-screen").style.display = "flex";
    document.getElementById("quiz-intro-screen").style.display = "none";
    setTimer();
});

//Show high scores
document.getElementById("view-high-scores").addEventListener("click", function() {
    document.getElementById("high-scores-screen").style.display = "flex";
    document.getElementById("quiz-intro-screen").style.display = "none";
});
//Go back button
document.getElementById("go-back").addEventListener("click", function() {
    document.getElementById("quiz-intro-screen").style.display = "flex";
    document.getElementById("high-scores-screen").style.display = "none";
})