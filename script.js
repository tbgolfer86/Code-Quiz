var quizData = [{
    question: "Commonly used data types do not include: ",
    choice1: "strings",
    choice2: "booleans",
    choice3: "numbers",
    choice4: "prompts",
    answer: 3
},
{   
    question: "Arrays in Javascript can be used to store: ",
    choice1: "numbers",
    choice2: "strings",
    choice3: "objects",
    choice4: "all of the above",
    answer: 3
},
{
    question: "String values are enclosed in: ",
    choice1: "&&",
    choice2: "''",
    choice3: "<>",
    choice4: "{}",
    answer: 1
},
{
    question: "The coding language that makes websites interactive is: ",
    choice1: "HTML",
    choice2: "CSS",
    choice3: "Javascript",
    choice4: "none of the above",
    answer: 2
}];
console.log(quizData);

var question = document.getElementById("question");
var option1 = document.getElementById("choice1");
var option2 = document.getElementById("choice2");
var option3 = document.getElementById("choice3");
var option4 = document.getElementById("choice4");

var timerElement = document.getElementById("timer");
var timer;
var timerCount = 60;

//Game Timer function
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = "Timer: " + timerCount;
    if(timerCount === 0) {
      clearInterval(timer);
      return;
    }
  }, 1000);
}

//View high scores
document.getElementById("view-high-scores").addEventListener("click", function() {
    document.getElementById("high-scores-screen").style.display = "flex";
    document.getElementById("quiz-intro-screen").style.display = "none";
    document.getElementById("questions-screen").style.display = "none";
    document.getElementById("quiz-finished-screen").style.display = "none";
});

//Go back button
document.getElementById("go-back").addEventListener("click", function() {
    document.getElementById("quiz-intro-screen").style.display = "flex";
    document.getElementById("high-scores-screen").style.display = "none";
    document.getElementById("questions-screen").style.display = "none";
    document.getElementById("quiz-finished-screen").style.display = "none";
})

//Display quizData onto screen
function displayQuiz() {
    for (i = 0; i < quizData.length; i++) {
        question.textContent = quizData[i].question;
        option1.textContent = quizData[i].choice1;
        option2.textContent = quizData[i].choice2;
        option3.textContent = quizData[i].choice3;
        option4.textContent = quizData[i].choice4;
    } 
};

//Start Game
document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("questions-screen").style.display = "flex";
    document.getElementById("quiz-intro-screen").style.display = "none";
    startTimer();
    displayQuiz();
});

