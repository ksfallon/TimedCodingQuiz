var startButton = document.createElementId('start-button');
var resetButton = document.createElementId('reset-button');
var timerContainer = document.createElement('timer');

function quizQuestions(){}

function showScore(){}

//show first question
quizQuestions();

//display score at end if timer runs out or no more questions left
//NEED TO UNDERSTAND HOW TO MAKE SUBMIT BUTTON AND HOW TO CALCULATE SCORE
submitButton.addEventListener('click', showScore);

// i've been the questions in an array, is this a good idea?
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
]