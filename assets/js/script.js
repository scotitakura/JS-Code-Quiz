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

for (var i = 0; i < choiceButton.length; ++i) {
    choiceButton[i].addEventListener('click', nextClick);
    choiceButton[i].setAttribute("style", "visibility: hidden");
};

var startClick = startButton.onclick = function() {
    
    // When start button is clicked, start time
    var timeInterval = setInterval(function(){
        if(timeLeft < 1 || qIndex == 5){
            clearInterval(timeInterval);
            for (var i = 0; i < choiceButton.length; ++i) {
                choiceButton[i].setAttribute("style", "visibility: hidden");
            };
            var highscore = timeLeft;
            timer.remove();
            resultSection.innerHTML = "";
            codeTitle.innerHTML = "Your score is " + highscore + " points!";
        } else {
            timeTotal.innerHTML = timeLeft + " seconds remaining";
        }
        timeLeft -= 1;
    }, 1000);
    
    quizSection.removeChild(startButton);

    for (var i = 0; i < choiceButton.length; ++i) {
        choiceButton[i].setAttribute("style", "visibility: visible");
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