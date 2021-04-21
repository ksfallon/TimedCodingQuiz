var headerContainer = document.createElement('.header-container');
var startButton = document.createElementId('start-button');
var clearButton = document.createElementId('clear-button');
var goBackButton = document.createElement('goBack');
var timerContainer = document.createElement('.timer-container');
var timerElement = document.createElement('timer-count');
var questionContainer = document.createElement('.question-container');

var timer;
var timerCount;

function startQuiz(){
    // click start button
    document.getElementById('.header-container').style.visibility = 'hidden';
    document.getElementById('.timer-container').style.visibility = 'visible';
    
    startTimer()
    // quizQuestions()
    // hide headerCounter
    // make questions visible
}

function startTimer(){
  timer = setInterval(function(){
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount ===0) {
        clearInterval(timer);
        gameOver();
    }

  }, 1000);
}

startButton.addEventListener("click", startQuiz);

//declare interval var at top of page
//then set value to interval = setInterval(function(){})etc
// clearInterval(name of the variable you want to stop)
// function quizQuestions(){}

// function showScore(){}

//show first question
// quizQuestions();

//display score at end if timer runs out or no more questions left
//NEED TO UNDERSTAND HOW TO MAKE SUBMIT BUTTON AND HOW TO CALCULATE SCORE
submitButton.addEventListener('click', showScore);

// i've been the questions in an array, is this a good idea?
// var codingQuestions = [
//     {
//         question: "Which answer is correct",
//         answers: {
//             1: "INCORRECT",
//             2: "INCORRECT",
//             3: "CORRECT",
//             4: "INCORRECT"
//         },
//         correctAnswer: "3"
//     },
//     {
//         question: "Which answer is FALSE",
//         answers: {
//             1: "FALSE",
//             2: "TRUE",
//             3: "TRUE",
//             4: "TRUE"
//         },
//         correctAnswer: "1"
//     },
//     {
//         question: "Which answer is says maybe",
//         answers: {
//             1: "ALWAYS",
//             2: "ALWAYS",
//             3: "ALWAYS",
//             4: "MAYBE"
//         },
//         correctAnswer: "4"
//     },
//     {
//         question: "Number 1 is correct",
//         answers: {
//             1: "CORRECT",
//             2: "INCORRECT",
//             3: "INCORRECT",
//             4: "INCORRECT"
//         },
//         correctAnswer: "1"
//     },
//     {
//         question: "Number 2 is correct",
//         answers: {
//             1: "INCORRECT",
//             2: "CORRECT",
//             3: "INCORRECT",
//             4: "INCORRECT"
//         },
//         correctAnswer: "2"
//     },
//     {
//         question: "Number 4 is correct",
//         answers: {
//             1: "INCORRECT",
//             2: "INCORRECT",
//             3: "INCORRECT",
//             4: "CORRECT"
//         },
//         correctAnswer: "4"
//     },
//     {
//         question: "Number 2 is PERFECT",
//         answers: {
//             1: "INCORRECT",
//             2: "PREFECT",
//             3: "INCORRECT",
//             4: "INCORRECT"
//         },
//         correctAnswer: "2"
//     },
//     {
//         question: "Number 1 is LOVE",
//         answers: {
//             1: "LOVE",
//             2: "INCORRECT",
//             3: "INCORRECT",
//             4: "INCORRECT"
//         },
//         correctAnswer: "1"
//     },
//     {
//         question: "Number 1 is the best",
//         answers: {
//             1: "BEST",
//             2: "INCORRECT",
//             3: "INCORRECT",
//             4: "INCORRECT"
//         },
//         correctAnswer: "1"
//     },
// ];

// do one div that holds all of our questions and just change what is displayed

// function quizQuestions(){
//     //this will store the html output
//     var output = [];

//     //for each question I need
//     codingQuestions.forEach(
//         (currentQuestion, questionNumber) => {

//             //variable to store the list of possible answers
//             var answers = [];

//             // and for each available answer
//             for (number in currentQuestion.answers){
//                 answers.push(

//                 )
//             }
//         }
//     )
// }