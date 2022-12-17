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

var score = document.getElementById("score");
var timerElement = document.getElementById("timer");
var timer;
var timerCount = 60;

//Submit score and initials to scoreboard
document.getElementById("submit").addEventListener("click", function() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
        score: timerCount,
        initial: initials.value,
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
});

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

function timerReset() {
    timerCount = 60;
}

//View high scores button
document.getElementById("view-high-scores").addEventListener("click", function() {
    document.getElementById("high-scores-screen").style.display = "flex";
    document.getElementById("quiz-intro-screen").style.display = "none";
    document.getElementById("questions-screen").style.display = "none";
    document.getElementById("quiz-finished-screen").style.display = "none";
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    for (var i = 0; i < highscores.length; i++) {
        var liTag = document.createElement("li");
        liTag.textContent = highscores[i].initial + " - " + highscores[i].score;
        var olEl = document.getElementById("scoreboard");
        olEl.appendChild(liTag);
    }
});

//Go back button
document.getElementById("go-back").addEventListener("click", function() {
    document.getElementById("quiz-intro-screen").style.display = "flex";
    document.getElementById("high-scores-screen").style.display = "none";
    document.getElementById("questions-screen").style.display = "none";
    document.getElementById("quiz-finished-screen").style.display = "none";
    arrayReset();
    displayQuiz();
});

//Clear high scores button
document.getElementById("clear-high-scores").addEventListener("click", function() {
    var scoreboard = document.getElementById("scoreboard");
    scoreboard.remove();
    localStorage.clear();
});

//Start game button
document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("questions-screen").style.display = "flex";
    document.getElementById("quiz-intro-screen").style.display = "none";
    document.getElementById("high-scores-screen").style.display = "none";
    document.getElementById("quiz-finished-screen").style.display = "none";
    timerReset();
    startTimer();
    displayQuiz();
});

//Displays quizData array of objects onto screen
var numberChoice = 0;

function displayQuiz() {
        question.textContent = quizData[numberChoice].question;
        option1.textContent = quizData[numberChoice].choice1;
        option2.textContent = quizData[numberChoice].choice2;
        option3.textContent = quizData[numberChoice].choice3;
        option4.textContent = quizData[numberChoice].choice4;
};

function arrayReset () {
    numberChoice = 0;
}

//Displays quiz finished screen with final score after array has been gone through
function displayFinish () {
    if (numberChoice > 3) {
        document.getElementById("quiz-finished-screen").style.display = "flex";
        document.getElementById("quiz-intro-screen").style.display = "none";
        document.getElementById("high-scores-screen").style.display = "none";
        document.getElementById("questions-screen").style.display = "none";
        clearInterval(timer);
        timerElement.textContent = "Timer: " + timerCount;
        score.textContent = "Your final score: " + timerCount;      
    }
};

//validates answer buttons
btn1.addEventListener("click", function() {
    if (numberChoice === 0) {
        (timerCount = timerCount - 10);   
    } if (numberChoice === 1) {
        (timerCount = timerCount - 10);   
    } if (numberChoice === 2) {
        (timerCount = timerCount - 10);   
    } if (numberChoice === 3) {
        (timerCount = timerCount - 10);   
    }
    numberChoice++;
    displayQuiz();
    displayFinish();
});
     
btn2.addEventListener("click", function() {
    if (numberChoice === 0) {
        (timerCount = timerCount - 10);   
    } if (numberChoice === 1) {
        (timerCount = timerCount - 10);   
    } if (numberChoice === 3) {
        (timerCount = timerCount - 10);   
    }
    numberChoice++;
    displayQuiz();
    displayFinish(); 
});
      
btn3.addEventListener("click", function() {
    if (numberChoice === 0) {
        (timerCount = timerCount - 10);   
    } if (numberChoice === 1) {
        (timerCount = timerCount - 10);   
    } if (numberChoice === 2) {
        (timerCount = timerCount - 10);   
    }
    numberChoice++;
    displayQuiz();
    displayFinish();
});

btn4.addEventListener("click", function() {
    if (numberChoice === 2) {
        (timerCount = timerCount - 10);   
    } if (numberChoice === 3) {
        (timerCount = timerCount - 10);   
    }
    numberChoice++;
    displayQuiz();
    displayFinish();
});






