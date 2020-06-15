function toggleClass(selector, className) {
    document.querySelector(selector).classList.toggle(className);
}

// Timer countdown
var timeTotal = document.getElementById("timer");
var timeLeft = 60;
timeTotal.innerHTML = timeLeft + " seconds remaining"

// question index at current state
var qIndex = 0; 

// Get Element ID's
var viewHighScores = document.getElementById("view-high-scores");
var highScoreData = document.getElementById("high-score-data");
var scoreList = document.querySelectorAll(".score-list");
var codeTitle = document.getElementById("code-title");
var quizSection = document.getElementById("quiz-section");
var questionTitle = document.getElementById("quiz-title");
var question = document.getElementById("question");
var startButton = document.getElementById("start");
var choiceButton = document.querySelectorAll(".choice");
var quizTitleClass = document.querySelector(".quiz-title");
var quizParagraphClass = document.querySelector(".question-paragraph");
var resultSection = document.getElementById("result");

// Create question/answer array
var questionArr = [{
    question: "Question 1",
    title: "What is the pre-set code to display a standard starter HTML layout?",
    choices: ["1. html:3","2. html-3","3. html:5","4. html-5"],
    answer: "3. html:5"
}, { 
    question: "Question 2",
    title: "What is the proper function to call an element from the HTML document?",
    choices: ["1. getElementByID", "2. getElementID", "3. getElement", "4. getID"],
    answer: "1. getElementByID"
}, { 
    question: "Question 3",
    title: "How do you create a function in JavaScript?",
    choices: ["1. function = doThis()", "2. function: doThis()", "3. function doThis()", "4. function if doThis()"],
    answer: "2. function doThis()"
}, { 
    question: "Question 4",
    title: "How do you create an if statement in JavaScript?",
    choices: ["1. if x = 10", "2. if (x == 10)", "3. if: x == 10", "4. if = x == 10"],
    answer: "2. if (x == 10)"
}, { 
    question: "Question 5",
    title: "How do you format comments in JavaScript?",
    choices: ["1. comment(This function does this)", "2. <!-- This function does this -->", "3. /* This function does this */", "4. // This function does this"],
    answer: "4. // This function does this"
}, { 
    question: "",
    title: "",
    choices: ["", "", "", ""],
    answer: "",
}];

// High score data vars
var scoreData = {
    initials: [],
    highscore: [],
};

var oldScoreData = JSON.parse(localStorage.getItem("scoreData"));

// Trying to add on every score and initial for some reason wont add more than 2 at a time
function saveScores(scoreData) {
    if (oldScoreData) {
        oldScoreData.initials.push(scoreData.initials[0]);
        oldScoreData.highscore.push(scoreData.highscore[0]);
        localStorage.setItem("scoreData", JSON.stringify(scoreData));
    } else {
        localStorage.setItem("scoreData", JSON.stringify(scoreData));
    }
};

function loadScores() {
    console.log(scoreData)
};

highScoreData.setAttribute("style", "display: none");

for (var i = 0; i < choiceButton.length; ++i) {
    choiceButton[i].addEventListener('click', nextClick);
    choiceButton[i].setAttribute("style", "display: none");
};

var startClick = startButton.onclick = function() {
    
    // When start button is clicked, start time
    var timeInterval = setInterval(function(){
        if(timeLeft < 1 || qIndex == 5){
            clearInterval(timeInterval);
            for (var i = 0; i < choiceButton.length; ++i) {
                choiceButton[i].setAttribute("style", "display: none");
            };
            // Freeze time and remove some elements
            timer.remove();
            quizSection.removeChild(question);
            resultSection.innerHTML = "";
            
            // Get score at finished time and display
            var score = timeLeft;
            codeTitle.innerHTML = "Your score is " + score + "!";
            
            // Create input and submit buttons
            questionTitle.innerHTML = "Enter your initials:";
            var initialInput = document.createElement("input");
            var inputSubmit = document.createElement("button");
            inputSubmit.innerHTML = "Submit";
            quizSection.appendChild(initialInput);
            quizSection.appendChild(inputSubmit);
            
            // Append initials and score data to scoreData array
            inputSubmit.addEventListener("click", function(){
                scoreData.initials.push(initialInput.value);
                scoreData.highscore.push(score);
                saveScores(scoreData);

                initialInput.setAttribute("style", "display: none");
                inputSubmit.setAttribute("style", "display: none");
                questionTitle.innerHTML = "";
                codeTitle.innerHTML = "Thanks for taking my quiz!";
            })
        } else {
            timeTotal.innerHTML = timeLeft + " seconds remaining";
        }
        timeLeft -= 1;
    }, 1000);
    
    quizSection.removeChild(startButton);

    for (var i = 0; i < choiceButton.length; ++i) {
        choiceButton[i].setAttribute("style", "display: block");
    };

    quizUpdate(questionArr[0]);
    resultSection.innerHTML = "";
}


function quizUpdate(questionIndex, previousCheck) {
    questionTitle.innerHTML = questionIndex.question;
    question.innerHTML = questionIndex.title;
    var choices = questionIndex.choices; 

    for (var i = 0; i < choices.length; ++i) {
        choiceButton[i].textContent = choices[i];
        choiceButton[i].setAttribute('value', choices[i]);
    }

    if (previousCheck) {
        resultSection.innerHTML = "Correct!";
    }   else  {
        resultSection.innerHTML = "Inorrect! Minus 10 seconds.";
    }                   
}

function nextClick(e) {
    // When start clicked, replace everything
    var questionIndex = questionArr[qIndex];
    var currentCheck = true;

    if (this.getAttribute("value") == questionIndex.answer) {
        qIndex += 1;
    } else {
        currentCheck = false;
        timeLeft -= 10;
        qIndex += 1;
    }

    quizUpdate(questionArr[qIndex], currentCheck);
};

// View highscores button
viewHighScores.addEventListener("click", function() {
    quizSection.setAttribute("style", "display: none");
    highScoreData.setAttribute("style", "display: block");
    timeTotal.innerHTML = ""
    codeTitle.innerHTML = "Highscore Leaderboard"
    var goBack = document.createElement("button");
    codeTitle.appendChild(goBack);
    goBack.innerHTML = "Go Back";

    goBack.addEventListener("click", function(){
        function newDoc() {
        window.location.assign("file:///C:/Users/user/Desktop/js-code-quiz/index.html")}
        newDoc()
    });

    scoreList[0].innerHTML = oldScoreData.initials[0] + " - " + oldScoreData.highscore[0] + " points";
    scoreList[1].innerHTML = oldScoreData.initials[1] + " - " + oldScoreData.highscore[1] + " points";
});
