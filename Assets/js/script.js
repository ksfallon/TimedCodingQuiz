var headerContainer = document.getElementById('header-container');
var startButton = document.getElementById('start');
var timerContainer = document.getElementById('timer-container');
var timerElement = document.getElementById('timer-count');
var questionContainer = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var choicesDiv = document.getElementById('choices').children;
console.log('choicesDiv:', choicesDiv);
var choicesEl = document.getElementsByClassName('choice');
var choice1El = document.getElementById('choiceOne');
var choice2El = document.getElementById('choiceTwo');
var choice3El = document.getElementById('choiceThree');
var choice4El = document.getElementById('choiceFour');
var finalscoreContainer = document.getElementById('finalscore-container');
var finalScore = document.getElementById('finalscore');
var playerInitials = document.getElementById('initials');
var submitButton = document.getElementById('submit');
var highscoreContainer = document.getElementById('highscore-container');
var clearButton = document.getElementById('clear-button');
var goBackButton = document.getElementById('goBack');
var message = document.getElementById('message');
var timer;
var timerCount;
var storedHighScores = [];
var intialList = '';
var finalScores = '';
var count = localStorage.getItem("count")

// questions array for quiz: question, answers, correct answer
var codingQuestions = [
  {
    question: 'Commonly used data types DO NOT include:',
    choice1: '1. strings',
    choice2: '2. booleans',
    choice3: '3. alerts',
    choice4: '4. numbers',
    correct: '3',
  },
  {
    question: 'The condition in an if / else statement is enclosed withing ____.',
    choice1: '1. parentheses',
    choice2: '2. quotes',
    choice3: '3. curly brackets',
    choice4: '4. square brackets',
    correct: '1',
  },
  {
    question: 'Arrays in JavaScript can be used to store ____.',
    choice1: '1. numbers and strings',
    choice2: '2. other arrays',
    choice3: '3. booleans',
    choice4: '4. all the above',
    correct: '4',
  },
  {
    question: 'String values must be enclosed within ____ when being assigned to variables.',
    choice1: '1. quotes',
    choice2: '2. commas',
    choice3: '3. curly brackets',
    choice4: '4. parentheses',
    correct: '1',
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choice1: '1. JavaScript',
    choice2: '2. consol.log',
    choice3: '3. for loops',
    choice4: '4. terminal / bash',
    correct: '2',
  },
  {
    question: 'Number 4 is correct',
    choice1: '1. INCORRECT',
    choice2: '2. INCORRECT',
    choice3: '3. INCORRECT',
    choice4: '4. CORRECT',
    correct: '4',
  },
  {
    question: 'Number 2 is PERFECT',
    choice1: '1. INCORRECT',
    choice2: '2. PREFECT',
    choice3: '3. INCORRECT',
    choice4: '4. INCORRECT',
    correct: '2',
  },
  {
    question: 'Number 1 is LOVE',
    choice1: '1. LOVE',
    choice2: '2. INCORRECT',
    choice3: '3. INCORRECT',
    choice4: '4. INCORRECT',
    correct: '1',
  },
  {
    question: 'Number 1 is the best',
    choice1: '1. BEST',
    choice2: '2. INCORRECT',
    choice3: '3. INCORRECT',
    choice4: '4. INCORRECT',
    correct: '1',
  },
];
// var counter = 0;
var questionIndex = 0;
var lastQuestion = codingQuestions.length - 1;
// var lastQuestion = codingQuestions.length - 1;
// init runs right as the window is opened
startButton.addEventListener('click', startQuiz);

function startQuiz() {
  // hide headerCounter
  headerContainer.style.display = 'none';
  //show first quiz question and answers
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

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      // alert("Time is up!")
      clearInterval(timer);
      showScore();
    }
  }, 1000);
}
//show first question
function questionDisplay() {
  var presentQuestion = codingQuestions[questionIndex];

  questionEl.textContent = presentQuestion.question;
  choice1El.textContent = presentQuestion.choice1;
  choice2El.textContent = presentQuestion.choice2;
  choice3El.textContent = presentQuestion.choice3;
  choice4El.textContent = presentQuestion.choice4;

  for (var i = 0; i < lastQuestion; i++) {
    //each time i choose a button/question i'm sent to the next question in 3 secs
  }
}

for (let i = 0; i < choicesDiv.length; i++) {
  choicesDiv[i].addEventListener('click', function () {
    var correctAnswer = codingQuestions[questionIndex].correct;
    
    console.log('click');
    if (correctAnswer === this.getAttribute('data-id')) {
      message.textContent = 'correct!';
      count = count + 10
      localStorage.setItem("count", count);
      // window.localStorage.setItem('score + 5') ?
    } else {
          message.textContent = 'incorrect';
          timerCount = timerCount - 10;
          if (count > 0) {
            count = count - 3
            localStorage.setItem("count", count);
        }
      //window.localStorage.setItem('score - 3')
    }
    questionIndex++;
    questionDisplay();
  });
}

 //display score at end if timer runs out or no more questions left
//NEED TO UNDERSTAND HOW TO MAKE SUBMIT BUTTON AND HOW TO CALCULATE SCORE
// submitButton.addEventListener('click', showScore);

// function showScore(){
//     timerContainer.style.display = 'none';
//     questionContainer.style.display = 'none';
// }

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

// function resetGame(){}
// will take you back to home screen with game instructions
//goBackButton.addEventListener('click', resetGame);

//declare interval var at top of page
//then set value to interval = setInterval(function(){})etc
// clearInterval(name of the variable you want to stop)
// function quizQuestions(){}

// function showScore(){}