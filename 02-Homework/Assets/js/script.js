var headerContainer = document.getElementById('header-container');
console.log("headercontainer", headerContainer)
var startButton = document.getElementById('start');
var timerContainer = document.getElementById('timer-container');
var timerElement = document.getElementById('timer-count');
var questionContainer = document.getElementById('question-container');
var question = document.getElementById('question');
var choices = document.getElementsByClassName('choice');
var choice1 = document.getElementById('choice1');
console.log("choice1", choice1)
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
var finalscoreContainer = document.getElementById('finalscore-container')
var finalScore = document.getElementById('finalscore');
var playerInitials = document.getElementById('initials');
var submitButton = document.getElementById('submit');
var highscoreContainer = document.getElementById('highscore-container');
var clearButton = document.getElementById('clear-button');
var goBackButton = document.getElementById('goBack');

var timer;
var timerCount;
var storedHighScores = [];
var intialList ='';
var finalScores = '';

// questions array for quiz: question, answers, correct answer
var codingQuestions = [
    {
        question: "Which answer is correct",
        choice1: "1. INCORRECT",
        choice2: "2. INCORRECT",
        choice3: "3. CORRECT",
        choice4: "4. INCORRECT",
        correct: "3"
    },
    {
        question: "Which answer is FALSE",
        choice1: "1. FALSE",
        choice2: "2. TRUE",
        choice3: "3. TRUE",
        choice4: "4. TRUE",
        correct: "1"
    },
    {
        question: "Which answer is says maybe",
        choice1: "1. ALWAYS",
        choice2: "2. ALWAYS",
        choice3: "3. ALWAYS",
        choice4: "4. MAYBE",
        correct: "4"
    },
    {
        question: "Number 1 is correct",
        choice1: "1. CORRECT",
        choice2: "2. INCORRECT",
        choice3: "3. INCORRECT",
        choice4: "4. INCORRECT",
        correct: "1"
    },
    {
        question: "Number 2 is correct",
        choice1: "1. INCORRECT",
        choice2: "2. CORRECT",
        choice3: "3. INCORRECT",
        choice4: "4. INCORRECT",
        correct: "2"
    },
    {
        question: "Number 4 is correct",
        choice1: "1. INCORRECT",
        choice2: "2. INCORRECT",
        choice3: "3. INCORRECT",
        choice4: "4. CORRECT",
        correct: "4"
    },
    {
        question: "Number 2 is PERFECT",
        choice1: "1. INCORRECT",
        choice2: "2. PREFECT",
        choice3: "3. INCORRECT",
        choice4: "4. INCORRECT",
        correct: "2"
    },
    {
        question: "Number 1 is LOVE",
        choices1: "1. LOVE",
        choice2: "2. INCORRECT",
        choice3: "3. INCORRECT",
        choice4: "4. INCORRECT",
        correct: "1"
    },
    {
        question: "Number 1 is the best",
        choice1: "1. BEST",
        choice2: "2. INCORRECT",
        choice3: "3. INCORRECT",
        choice4: "4. INCORRECT",
        correct: "1"
    },
];
var counter = 0;
var questionIndex = 0;
// var lastQuestion = codingQuestions.length - 1;
// init runs right as the window is opened
startButton.addEventListener("click", startQuiz);


function startQuiz(){
     // hide headerCounter
    headerContainer.style.display = 'none';
    //show timer
    timerContainer.style.display = 'block';
    questionContainer.style.display = 'block';
    // click start button
    timerCount = 75;
    // make questions visible
     //need quizQuestions to pop up
    questionDisplay();
    //need timer to start immediately
    //runQuiz ();
    startTimer();
    
}

function startTimer(){
  timer = setInterval(function(){
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount ===0) {
        // alert("Time is up!")
        clearInterval(timer);
        showScore();
    }

  }, 1000);
}
//show first question
function questionDisplay(){

    console.log('display questions' , codingQuestions[counter].choice1);
    question.textContent = codingQuestions[counter].question
    choice1.textContent = codingQuestions[counter].choice1
    choice2.textContent = codingQuestions[counter].choice2
    choice3.textContent = codingQuestions[counter].choice3
    choice4.textContent = codingQuestions[counter].choice4
};

var i = 0, length = choices.length;
for(i; i < length; i++){
choices[i].addEventListener("click", function() {
    var correctAnswer = codingQuestions[counter].correct

    if (correctAnswer === this.getAttribute('data-id')) {
        message.textContent = ("correct!")
        // window.localStorage.setItem('score + 5') ?

    } else {
        message.textContent = ("incorrect")
        timerCount = timerCount - 10
    }

    counter++;
})
// function runQuiz (){
// //     for (var questIndex = 0; questIndex <= lastQuestion; questIndex++){
// //         ProgressEvent.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
// //     }
// //if choice is === correct say correct and show next question
//   if(codingQuestions[questionIndex].correct == choice){
//       questionIndex++
//       //say correct
//       //add 5 points
//   } else{}
//   // else say wrong, 
//   //subtract 10 seconds and show next question
//   //timerCount -=5;
// }
// }
function showScore(){
    timerContainer.style.display = 'none';
    questionContainer.style.display = 'none';
}

// localStorage.setItem()
//
//need to create a storedHighScores variable
// function getHighScores(){
//     //get stored array of intials and scores from client storage.
//     var storedHighScores = localStorage.getItem('highScores');
//     //if stored value doesn't exist, show nothing
//     if (storedHighScores === null) {
//         highScoreList = [];
//     }  else {
//       //   if intials and high scores are retrieved from client storage set highscore list to this array
//       highScoreList = storedHighScores
//     }
//     //render highScoreList to page
//     //**should i show it as an array or do two separate getHighScores and getInitals?
//     finalscoreContainer.textContent = highScoreList;
    
//         //**get previous high scores - should this be later on tho?
//         getHighScores()
// }

function resetGame(){}
// will take you back to home screen with game instructions
//goBackButton.addEventListener('click', resetGame);

//declare interval var at top of page
//then set value to interval = setInterval(function(){})etc
// clearInterval(name of the variable you want to stop)
// function quizQuestions(){}

// function showScore(){}
}
