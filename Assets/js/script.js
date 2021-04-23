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

// questions array for quiz: question, answers, correct answer
var codingQuestions = [
  {
    question: 'Which answer is correct',
    choice1: '1. INCORRECT',
    choice2: '2. INCORRECT',
    choice3: '3. CORRECT',
    choice4: '4. INCORRECT',
    correct: '3',
  },
  {
    question: 'Which answer is FALSE',
    choice1: '1. FALSE',
    choice2: '2. TRUE',
    choice3: '3. TRUE',
    choice4: '4. TRUE',
    correct: '1',
  },
  {
    question: 'Which answer is says maybe',
    choice1: '1. ALWAYS',
    choice2: '2. ALWAYS',
    choice3: '3. ALWAYS',
    choice4: '4. MAYBE',
    correct: '4',
  },
  {
    question: 'Number 1 is correct',
    choice1: '1. CORRECT',
    choice2: '2. INCORRECT',
    choice3: '3. INCORRECT',
    choice4: '4. INCORRECT',
    correct: '1',
  },
  {
    question: 'Number 2 is correct',
    choice1: '1. INCORRECT',
    choice2: '2. CORRECT',
    choice3: '3. INCORRECT',
    choice4: '4. INCORRECT',
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
    choices1: '1. LOVE',
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
      // window.localStorage.setItem('score + 5') ?
    } else {
      message.textContent = 'incorrect';
      timerCount = timerCount - 10;
    }
    questionIndex++;
    questionDisplay();
  });
}