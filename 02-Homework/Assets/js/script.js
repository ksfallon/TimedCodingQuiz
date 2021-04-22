var headerContainer = document.querySelector('.header-container');
var startButton = document.querySelector('.start');
var timerContainer = document.querySelector('.timer-container');
var timerElement = document.querySelector('.timer-count');
var questionContainer = document.querySelector('.question-container');
var question = document.querySelector('question');
var choice1 = document.querySelector('choice1');
var choice2 = document.querySelector('choice2');
var choice3 = document.querySelector('choice3');
var choice4 = document.querySelector('choice4');
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
        choices1: "1. INCORRECT",
        choice2: "2. INCORRECT",
        choice3: "3. CORRECT",
        choice4: "4. INCORRECT",
        correct: "choice3"
    },
    {
        question: "Which answer is FALSE",
        choice1: "1. FALSE",
        choice2: "2. TRUE",
        choice3: "3. TRUE",
        choice4: "4. TRUE",
        correct: "choice1"
    },
    {
        question: "Which answer is says maybe",
        choice1: "1. ALWAYS",
        choice2: "2. ALWAYS",
        choice3: "3. ALWAYS",
        choice4: "4. MAYBE",
        correct: "choice4"
    },
    {
        question: "Number 1 is correct",
        choice1: "1. CORRECT",
        choice2: "2. INCORRECT",
        choice3: "3. INCORRECT",
        choice4: "4. INCORRECT",
        correct: "choice1"
    },
    {
        question: "Number 2 is correct",
        choice1: "1. INCORRECT",
        choice2: "2. CORRECT",
        choice3: "3. INCORRECT",
        choice4: "4. INCORRECT",
        correct: "choice2"
    },
    {
        question: "Number 4 is correct",
        choice1: "1. INCORRECT",
        choice2: "2. INCORRECT",
        choice3: "3. INCORRECT",
        choice4: "4. CORRECT",
        correct: "choice4"
    },
    {
        question: "Number 2 is PERFECT",
        choice1: "1. INCORRECT",
        choice2: "2. PREFECT",
        choice3: "3. INCORRECT",
        choice4: "4. INCORRECT",
        correct: "choice2"
    },
    {
        question: "Number 1 is LOVE",
        choices1: "1. LOVE",
        choice2: "2. INCORRECT",
        choice3: "3. INCORRECT",
        choice4: "4. INCORRECT",
        correct: "choice1"
    },
    {
        question: "Number 1 is the best",
        choice1: "1. BEST",
        choice2: "2. INCORRECT",
        choice3: "3. INCORRECT",
        choice4: "4. INCORRECT",
        correct: "choice1"
    },
];
var counter = 0;
var lastQuestion = codingQuestions.length - 1;
// init runs right as the window is opened
startButton.addEventListener("click", startQuiz);


function startQuiz(){
     // hide headerCounter
    headerContainer.style.display = 'none';
    //show timer
    timerContainer.style.display = 'block';
    // click start button
    timerCount = 75;
    // make questions visible
     //need quizQuestions to pop up
    startQuestions();
    //need timer to start immediately
    startTimer();
    
}

function startTimer(){
  timer = setInterval(function(){
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount ===0) {
        alert("Time is up!")
        clearInterval(timer);
        gameOver();
    }

  }, 1000);
}



//show first question
function startQuestions(){
    var quest = codingQuestions[counter];

    counter++
    question.innerHTML = quest.question;
    choice1.innerHTML = quest.choice1;
    choice2.innerHTML = quest.choice2;
    choice3.innerHTML = quest.choice3;
    choice4.innerHTML = quest.choice4;

    //if choice is === correct say correct and show next question
    // else say wrong, subtract 10 seconds and show next question
};

// function quizProgress (){
//     for (var questIndex = 0; questIndex <= lastQuestion; questIndex++){
//         ProgressEvent.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
//     }
// }

function showScore(){}
// localStorage.setItem()
//
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
function init(){
    
        //**get previous high scores - should this be later on tho?
        getHighScores()
}

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