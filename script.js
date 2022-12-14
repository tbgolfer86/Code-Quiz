var quizData = [{
    question: "Commonly used data types do not include: ",
    choice1: "strings",
    choice2: "booleans",
    choice3: "numbers",
    choice4: "prompts",
},
{   
    question: "Arrays in Javascript can be used to store: ",
    choice1: "numbers",
    choice2: "strings",
    choice3: "objects",
    choice4: "all of the above",
},
{
    question: "String values are enclosed in: ",
    choice1: "&&",
    choice2: "''",
    choice3: "<>",
    choice4: "{}",
},
{
    question: "The coding language that makes websites interactive is: ",
    choice1: "HTML",
    choice2: "CSS",
    choice3: "Javascript",
    choice4: "none of the above",
},0];

var question = document.getElementById("question");
var option1 = document.getElementById("choice1");
var option2 = document.getElementById("choice2");
var option3 = document.getElementById("choice3");
var option4 = document.getElementById("choice4");

var timerElement = document.getElementById("timer");
var timer;
var timerCount = 60;
var score = document.getElementById("score");

//Display Score
function getScore() {
    score.textContent = "Your final score: " + timerCount;
}

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
    console.log("clicked");
});

//Go back button
document.getElementById("go-back").addEventListener("click", function() {
    document.getElementById("quiz-intro-screen").style.display = "flex";
    document.getElementById("high-scores-screen").style.display = "none";
    document.getElementById("questions-screen").style.display = "none";
    document.getElementById("quiz-finished-screen").style.display = "none";
})

//Start Game
document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("questions-screen").style.display = "flex";
    document.getElementById("quiz-intro-screen").style.display = "none";
    startTimer();
    displayQuiz();
});

var numberChoice = 0;

//Display quizData onto screen
function displayQuiz() {
        question.textContent = quizData[numberChoice].question;
        option1.textContent = quizData[numberChoice].choice1;
        option2.textContent = quizData[numberChoice].choice2;
        option3.textContent = quizData[numberChoice].choice3;
        option4.textContent = quizData[numberChoice].choice4;
};

//Display quiz finished screen
function displayFinish () {
    if (numberChoice > 3) {
        document.getElementById("quiz-finished-screen").style.display = "flex";
        document.getElementById("quiz-intro-screen").style.display = "none";
        document.getElementById("high-scores-screen").style.display = "none";
        document.getElementById("questions-screen").style.display = "none";
        getScore();
    }
}

//validate buttons
btn1.addEventListener("click", function() {
    if (btn1.clicked == true) {
        numberChoice = numberChoice++;
    } if (question.textContent === "Commonly used data types do not include: ") {
        (timerCount = timerCount - 10);   
    } if (question.textContent === "Arrays in Javascript can be used to store: ") {
        (timerCount = timerCount - 10);
    } if (question.textContent === "String values are enclosed in: ") {
        (timerCount = timerCount - 10);
    } if (question.textContent === "The coding language that makes websites interactive is: " ) {
        (timerCount = timerCount - 10);
    } 
    displayQuiz();
    displayFinish();
    console.log("click")
    console.log(numberChoice++)
});
        
btn2.addEventListener("click", function() {
    if (btn2.clicked == true) {
        numberChoice = numberChoice++;
    } if (question.textContent === "Commonly used data types do not include: ") {
        (timerCount = timerCount - 10);
    } if (question.textContent === "Arrays in Javascript can be used to store: ") {
        (timerCount = timerCount - 10);
    } if (question.textContent === "The coding language that makes websites interactive is: " ) {
        (timerCount = timerCount - 10);
    } 
    displayQuiz();
    displayFinish();
    console.log("click")
    console.log(numberChoice++)
});

btn3.addEventListener("click", function() {
    if (btn3.clicked == true) {
        numberChoice = numberChoice++;
    } if (question.textContent === "Commonly used data types do not include: ") {
        (timerCount = timerCount - 10);
    } if (question.textContent === "Arrays in Javascript can be used to store: ") {
        (timerCount = timerCount - 10);
    } if (question.textContent === "String values are enclosed in: ") {
        (timerCount = timerCount - 10);
    } 
    displayQuiz();
    displayFinish();
    console.log("click")
    console.log(numberChoice++)
});

btn4.addEventListener("click", function() {
    if (btn4.clicked == true) {
        numberChoice = numberChoice++;
    } if (question.textContent === "String values are enclosed in: ") {
        (timerCount = timerCount - 10);
    } if (question.textContent === "The coding language that makes websites interactive is: " ) {
        (timerCount = timerCount - 10);
    }
    displayQuiz();
    displayFinish();
    console.log("click")
    console.log(numberChoice++)
});




