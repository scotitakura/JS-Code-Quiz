function toggleClass(selector, className) {
    document.querySelector(selector).classList.toggle(className);
}

// Timer countdown
var timeLeft = 60;

// Get Element ID's
var quizSection = document.getElementById("quiz-area");
var questionTitle = document.getElementById("quiz-header");
var question = document.getElementById("question");
var startButton = document.getElementById("start");

// Create question/answer array
var questionArr = [{
    question: "Question 1",
    title: "What is the pre-set code to display a standard starter HTML layout?",
    choices: ["html:3","html-3","html:5","html-5"],
    answer: "html:5"
}, { 
    question: "Question 2",
    title: "What is the proper function to call an element from the HTML document?",
    choices: ["getElementByID", "getElementID", "getElement", "getID"],
    answer: "getElementByID."
}, { 
    question: "Question 3",
    title: "How do you create a function in JavaScript?",
    choices: ["function = doThis()", "function: doThis()", "function doThis()", "function if doThis()"],
    answer: "function doThis()."
}, { 
    question: "Question 4",
    title: "How do you create an if statement in JavaScript?",
    choices: ["if x = 10", "if (x == 10)", "if: x == 10", "if = x == 10"],
    answer: "if (x == 10)."
}, { 
    question: "Question 5",
    title: "How do you format comments in JavaScript?",
    choices: ["comment(This function does this)", "<!-- This function does this -->", "/* This function does this */", "// This function does this"],
    answer: "// This function does this."
}];




var clickstart = startButton.onclick = function() {
    // When start button is clicked, start time
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
    
    // When start clicked, replace everything
    quizSection.removeChild(startButton);
    questionTitle.innerHTML = questionArr[0].question;
    question.innerHTML = questionArr[0].title;
    
    // Make all the buttons
    var opt1 = document.createElement("button");
    var opt2 = document.createElement("button");
    var opt3 = document.createElement("button");
    var opt4 = document.createElement("button");
    var optArr = [opt1, opt2, opt3, opt4];
    
    // Append all the buttons
    for (var i = 0; i < optArr.length; ++i) {
        quizSection.appendChild(optArr[i]);
    }                       
    
    // Label all the buttons
    opt1.innerHTML = questionArr[0].choices[0];
    opt2.innerHTML = questionArr[0].choices[1];
    opt3.innerHTML = questionArr[0].choices[2];
    opt4.innerHTML = questionArr[0].choices[3];

    var correctCheck = document.createElement("h4");
    question.appendChild (correctCheck);
    correctCheck.innerHTML = "";
    
    // Create new button
    var nextBttn = document.createElement("button");
    quizSection.appendChild(nextBttn);
    nextBttn.innerHTML = "Next Question";

    var choiceClick = optArr.onclick = function() {
        if (optArr === questionArr[0].answer) {
            correctCheck.innerHTML = "Correct."
        } else {
            correctCheck.innerHTML = "Incorrect, -10 seconds."
        }
    }
};

// for (var i = 0; i < optArr.length; i++) {
//     optArr[i].addEventListener("click", function(){
//         question.appendChild (correctCheck);
//         correctCheck.innerHTML = "";
//         if (choiceArr[j] === !questionArr[0].a) {
//             correctCheck.innerHTML = "Correct."
//         } else {
//             correctCheck.innerHTML = "Incorrect, -10 seconds."
//         }
//     });
// }
            
            // if (questionArr[0].c2 === questionArr[0].a) {
            //     correctCheck.innerHTML = "Correct."
            // } else {
            //     correctCheck.innerHTML = "Incorrect, -10 seconds."
            // }

            // if (questionArr[0].c3 === questionArr[0].a) {
            //     correctCheck.innerHTML = "Correct."
            // } else {
            //     correctCheck.innerHTML = "Incorrect, -10 seconds."
            // }
            
            // if (questionArr[0].c4 === questionArr[0].a) {
            //     correctCheck.innerHTML = "Correct."
            // } else {
            //     correctCheck.innerHTML = "Incorrect, -10 seconds."
    //         // }
    //     });
    // }
    //         // opt3.addEventListener("click", function(){
            //     var correctCheck = document.createElement("h4");
            //     if (questionArr[0].c3 === questionArr[0].a) {
            //         question.appendChild (correctCheck);
            //         correctCheck.innerHTML = "Correct."
            //     } else {
            //         question.appendChild (correctCheck);
            //         correctCheck.innerHTML = "Incorrect, -10 seconds."
            //     }
            // });
    
    // opt1.addEventListener("click", function(){
    //     var correctCheck = document.createElement("h4");
    //     if (questionArr[0].c1 === questionArr[0].a) {
    //         question.appendChild (correctCheck);
    //         correctCheck.innerHTML = "Correct."
    //     } else {
    //         question.appendChild (correctCheck);
    //         correctCheck.innerHTML = "Incorrect, -10 seconds."
    //     }
    // });
    // opt2.addEventListener("click", function(){
    //     var correctCheck = document.createElement("h4");
    //     if (questionArr[0].c2 === questionArr[0].a) {
    //         question.appendChild (correctCheck);
    //         correctCheck.innerHTML = "Correct."
    //     } else {
    //         question.appendChild (correctCheck);
    //         correctCheck.innerHTML = "Incorrect, -10 seconds."
    //     }
    // });
    // opt4.addEventListener("click", function(){
    //     var correctCheck = document.createElement("h4");
    //     if (questionArr[0].c4 === questionArr[0].a) {
    //         question.appendChild (correctCheck);
    //         correctCheck.innerHTML = "Correct."
    //     } else {
    //         question.appendChild (correctCheck);
    //         correctCheck.innerHTML = "Incorrect, -10 seconds."
    //     }
    // });
    

    // function (event){
    //     console.log(event.target.value)
    //     }
    //     buttonEl.setAttribute("value", questionArr[0].choices[0])
    // opt3.addEventListener("click", dispCorrect)
    // if (opt3.onclick){
    //     var correctDisplay = document.createElement("div");
    //     quizSection.appendChild(correctDisplay);
    //     correctDisplay.innerHTML = "Correct!"
    // };
    // if (opt1.onclick, opt2.onclick, opt4.onclick){
    //     // Subtract 10 seconds from time
    //     var incorrectDisplay = document.createElement("div");
    //     quizSection.appendChild(incorrectDisplay);
    //     incorrectDisplay.innerHTML = "Incorrect! Minus 10 seconds."
    
// function getQuestions(){
//     var currentQuestion = questionArr[index];
//     var titleElem = document.getElementById("question-title");
//     titleElem.textContent = currentQuestion.title;
    
//     var choicesElem = document.getElementById("choices");
//     choicesElem.innerHTML="";
    
//     currentQuestion.choices.forEach(function(choice){
//         var choiceButton = document.createElement("button");
//         choiceButton.setAttribute("class", "optionsButton");
//         choiceButton.setAttribute("value", choice);
//         choiceButton.textContent = choice;
//         choiceButton.onclick = optionSelected;
        
//         choicesElem.appendChild(choiceButton);
        
//     })
// };

// function optionSelected(){
//     if (choiceArr[j] === questionArr[0].a) {
//         correctCheck.innerHTML = "Correct."
//     } else {
//         correctCheck.innerHTML = "Incorrect, -10 seconds."
//     }
// };