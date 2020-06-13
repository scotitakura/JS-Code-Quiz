function toggleClass(selector, className) {
    document.querySelector(selector).classList.toggle(className);
}

// Timer countdown
var timeLeft = 180;

var quizSection = document.getElementById("quiz-area");
var questionTitle = document.getElementById("quiz-header");
var question = document.getElementById("question");
var startButton = document.getElementById("start");
var clickstart = startButton.onclick = function() {
    var timeInterval = setInterval(function(){
        var timeTotal = document.getElementById("timer");

        if(timeLeft < 0){
        clearInterval(timeInterval);
        window.alert("Time's up!");
        // replace with your score is = 0 seconds
    } else {
        timeTotal.innerHTML = timeLeft + " seconds remaining";
    }
    timeLeft -= 1;
    }, 1000);

    questionTitle.innerHTML = "Question 1:";
    question.innerHTML = "What is the pre-set code to display a standard starter HTML layout?";
    var opt1 = document.createElement("div");
    var opt2 = document.createElement("div");
    var opt3 = document.createElement("div");
    var opt4 = document.createElement("div");
    quizSection.appendChild(opt1);
    quizSection.appendChild(opt2);
    quizSection.appendChild(opt3);
    quizSection.replaceChild(opt4,startButton);
    opt1.innerHTML = "html:3";
    opt2.innerHTML = "html-3";
    opt3.innerHTML = "html:5";
    opt4.innerHTML = "html-5";
}