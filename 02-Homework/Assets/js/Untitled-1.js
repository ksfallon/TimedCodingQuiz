if(codingQuestions[questionIndex].correct == choice){
    questionIndex++
    //say correct
    //add 5 points
} else{}
    questionIndex++

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

//
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
};