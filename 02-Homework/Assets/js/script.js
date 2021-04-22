var headerContainer = document.querySelector('.header-container');
var startButton = document.querySelector('.start-button');
var timerContainer = document.querySelector('.timer-container');
var timerElement = document.querySelector('.timer-count');
var questionContainer = document.querySelector('.question-container');
var quizQuestions = document.querySelector('question');
var quizChoices = document.querySelector('choices');
var correctAnswers = document.querySelector('correct')
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
        choices1: "INCORRECT",
        choice2: "INCORRECT",
        choice3: "CORRECT",
        choice4: "INCORRECT",
        correct: "3"
    },
    {
        question: "Which answer is FALSE",
        choice1: "FALSE",
        choice2: "TRUE",
        choice3: "TRUE",
        choice4: "TRUE",
        correct: "1"
    },
    {
        question: "Which answer is says maybe",
        choice1: "ALWAYS",
        choice2: "ALWAYS",
        choice3: "ALWAYS",
        choice4: "MAYBE",
        correct: "4"
    },
    {
        question: "Number 1 is correct",
        choice1: "CORRECT",
        choice2: "INCORRECT",
        choice3: "INCORRECT",
        choice4: "INCORRECT",
        correct: "1"
    },
    {
        question: "Number 2 is correct",
        choice1: "INCORRECT",
        choice2: "CORRECT",
        choice3: "INCORRECT",
        choice4: "INCORRECT",
        correct: "2"
    },
    {
        question: "Number 4 is correct",
        choice1: "INCORRECT",
        choice2: "INCORRECT",
        choice3: "INCORRECT",
        choice4: "CORRECT",
        correct: "4"
    },
    {
        question: "Number 2 is PERFECT",
        choice1: "INCORRECT",
        choice2: "PREFECT",
        choice3: "INCORRECT",
        choice4: "INCORRECT",
        correct: "2"
    },
    {
        question: "Number 1 is LOVE",
        choices1: "LOVE",
        choice2: "INCORRECT",
        choice3: "INCORRECT",
        choice4: "INCORRECT",
        correct: "1"
    },
    {
        question: "Number 1 is the best",
        choice1: "BEST",
        choice2: "INCORRECT",
        choice3: "INCORRECT",
        choice4: "INCORRECT",
        correct: "1"
    },
];

// init runs right as the window is opened
function init(){
    
    //**get previous high scores - should this be later on tho?
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
     // hide headerCounter
    document.getElementById('.header-container').style.visibility = 'hidden';
    // click start button
    timerCount = 75;
    //need to prevent start button from being clicked while game is in progress
    startButton.disabled = true;
    // make questions visible
   // document.getElementById('.timer-container').style.visibility = 'visible';
     //need quizQuestions to pop up
   // quizQuestions()
    //need timer to start immediately
    startTimer()
    
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

//show first question
function quizQuestions(){

};

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