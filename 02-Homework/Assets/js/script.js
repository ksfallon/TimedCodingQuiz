var headerContainer = document.querySelector('.header-container');
var startButton = document.querySelector('.start-button');
var timerContainer = document.querySelector('.timer-container');
var timerElement = document.querySelector('.timer-count');
var questionContainer = document.querySelector('.question-container');
var quizQuestions = document.querySelector('question');
var quizAnswers = document.querySelector('answers');
var correctAnswers = document.querySelector('correct-answer')
var finalscoreContainer = document.querySelector('.finalscore-container')
var finalScore = document.querySelector('finalscore');
var playerInitials = document.querySelector('initials');
var highscoreContainer = document.querySelector('.highscore-container');
var clearButton = document.querySelector('clear-button');
var goBackButton = document.querySelector('goBack');

var timer;
var timerCount;
var storedHighScores = [];

// questions array for quiz: question, answers, correct answer
var codingQuestions = [
    {
        question: "Which answer is correct",
        answers: {
            1: "INCORRECT",
            2: "INCORRECT",
            3: "CORRECT",
            4: "INCORRECT"
        },
        correctAnswer: "3"
    },
    {
        question: "Which answer is FALSE",
        answers: {
            1: "FALSE",
            2: "TRUE",
            3: "TRUE",
            4: "TRUE"
        },
        correctAnswer: "1"
    },
    {
        question: "Which answer is says maybe",
        answers: {
            1: "ALWAYS",
            2: "ALWAYS",
            3: "ALWAYS",
            4: "MAYBE"
        },
        correctAnswer: "4"
    },
    {
        question: "Number 1 is correct",
        answers: {
            1: "CORRECT",
            2: "INCORRECT",
            3: "INCORRECT",
            4: "INCORRECT"
        },
        correctAnswer: "1"
    },
    {
        question: "Number 2 is correct",
        answers: {
            1: "INCORRECT",
            2: "CORRECT",
            3: "INCORRECT",
            4: "INCORRECT"
        },
        correctAnswer: "2"
    },
    {
        question: "Number 4 is correct",
        answers: {
            1: "INCORRECT",
            2: "INCORRECT",
            3: "INCORRECT",
            4: "CORRECT"
        },
        correctAnswer: "4"
    },
    {
        question: "Number 2 is PERFECT",
        answers: {
            1: "INCORRECT",
            2: "PREFECT",
            3: "INCORRECT",
            4: "INCORRECT"
        },
        correctAnswer: "2"
    },
    {
        question: "Number 1 is LOVE",
        answers: {
            1: "LOVE",
            2: "INCORRECT",
            3: "INCORRECT",
            4: "INCORRECT"
        },
        correctAnswer: "1"
    },
    {
        question: "Number 1 is the best",
        answers: {
            1: "BEST",
            2: "INCORRECT",
            3: "INCORRECT",
            4: "INCORRECT"
        },
        correctAnswer: "1"
    },
];

// init runs right as the window is opened
function init(){
    
    //get previous high scores - should this be later on tho?
    getHighScores()
}

//need to create a storedHighScores variable
function getHighScores(){
  //get stored array of intials and scores from client storage.
  var storedHighScores = localStorage.getItem('highScores');
  //if stored value doesn't exist, show nothing
  if (storedHighScores === null) {
      highScoreList = [];
  }  else {
    //   if intials and high scores are retrieved from client storage set highscore list to this array
    highScoreList = storedHighScores
  }
  //render highScoreList to page
  //**should i show it as an array or do two separate getHighScores and getInitals?
  finalscoreContainer.textContent = highScoreList;
}

function startQuiz(){
    // click start button
    document.getElementById('.header-container').style.visibility = 'hidden';
    document.getElementById('.timer-container').style.visibility = 'visible';
    
    startTimer()
    quizQuestions()
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

function setScore(){}
// localStorage.setItem()
    // if select correct answer add points to localstorage

function highscoreDisplay(){}
// localStorage.setItem()
// add name from prompt and high score to list.

function resetGame(){}
// will take you back to home screen with game instructions
//goBackButton.addEventListener('click', resetGame);

//declare interval var at top of page
//then set value to interval = setInterval(function(){})etc
// clearInterval(name of the variable you want to stop)
// function quizQuestions(){}

// function showScore(){}

//show first question
// quizQuestions();

//display score at end if timer runs out or no more questions left
//NEED TO UNDERSTAND HOW TO MAKE SUBMIT BUTTON AND HOW TO CALCULATE SCORE
// submitButton.addEventListener('click', showScore);

// i've been the questions in an array, is this a good idea?

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