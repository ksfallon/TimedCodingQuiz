var starterContainer = document.getElementById('starter-container');
var startButton = document.getElementById('start');
// var timerContainer = document.getElementById('timer-container');
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
var finalScoreContainer = document.getElementById('finalscore-container');
var finalScore = document.getElementById('score');
var playerInitials = document.getElementById('initials');
var submitButton = document.getElementById('submit');
var highScoreContainer = document.getElementsByClassName('highscore-container');
var clearButton = document.getElementById('clear-button');
var goBackButton = document.getElementById('goBack');
var message = document.getElementById('message');
var hSList = document.getElementById('list');

var timer;
var tCounter;
var currentScore = 0


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
    question: 'The condition in an if / else statement is enclosed within ____.',
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

var userScore = document.getElementById("score")
var storedHighScores 

function renderHighScores() {
  console.log('called render high scores');
  var initialsAndScores = JSON.stringify(localStorage.getItem("highScores"));
  console.log("string yet? " , initialsAndScores);
  // hSList.textContent = initialsAndScores
}

function localHighScores() {
  var playerInitials = document.getElementById('initials').value;
  var grabHighScores = JSON.parse(localStorage.getItem('highScores'));
  console.log('grab high scores from local storage ', grabHighScores)
  console.log('the current score is ', currentScore)
  

var playerScore = { initials: playerInitials, score: currentScore}

if (localStorage.getItem('highScores') === null) {
  
  localStorage.setItem('highScores', JSON.stringify([playerScore]))
} else {
  var storedHighScores = JSON.parse(localStorage.getItem('highScores'))

  localStorage.setItem('highScores', JSON.stringify(storedHighScores.concat([playerScore])) )
}
  //  renderHighScores();
};


var questionIndex = 0;
var lastQuestion = codingQuestions.length - 1;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
  // hide starterCounter and show questinContainer
  starterContainer.style.display = 'none';
  questionContainer.style.display = 'block';
  //tCounter = 75 - can this be done in global variable?
  tCounter = 75;
  // make questions visible
  questionDisplay();
  //need timer to start immediately
  startTimer();
}

function startTimer() {
  timer = setInterval(function () {
    tCounter--;
    timerElement.textContent = tCounter;
    if (tCounter <= 0) {
      clearInterval(timer)
      questionContainer.style.display = 'none';
      finalScoreContainer.style.display = 'block';
    }
  }, 1000);
}
//displays questions and runs through them
function questionDisplay() {
  
  // need the questions to go away on last question click and need final score and intial form to pop up
  if(questionIndex > lastQuestion){
    //need questions to disappear
    questionContainer.style.display = 'none';
    // display final sccore and seconds left
    finalScore.innerHTML = "Your Final Score: " + currentScore + " With " + tCounter + " seconds remaining!";
    localStorage.setItem
    clearInterval(timer);
    localHighScores();
    finalScoreContainer.style.display = 'block';

  } else {
  var presentQuestion = codingQuestions[questionIndex];
  questionEl.textContent = presentQuestion.question;
  choice1El.textContent = presentQuestion.choice1;
  choice2El.textContent = presentQuestion.choice2;
  choice3El.textContent = presentQuestion.choice3;
  choice4El.textContent = presentQuestion.choice4;
}
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
      currentScore = currentScore + 10
      // window.localStorage.setItem('score + 5') ?
    } else {
          message.textContent = 'incorrect';
          tCounter = tCounter - 10;
          // if (count > 0) {
            currentScore = currentScore - 3
    }
    questionIndex++;
    questionDisplay();

   });
}

submitButton.addEventListener("click", function (event){
  event.preventDefault();
  
  localHighScores();
  // finalscoreContainer.style.display = 'none';
  // timerContainer.style.display = 'none';
  // highScoreContainer.style.display = 'block';
})






