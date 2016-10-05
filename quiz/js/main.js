$(document).ready(function() {
    console.log("Good 2 Go");
    var questionIndex = 0;
    var player;
    var playerOneScore = 0;
    var playerTwoScore = 0;
    var answers = [0, 0, 1, 1, 0];
    var playerChoice;
    var divs = ['.one', '.two', '.three', '.four', '.five']
    $(divs[questionIndex]).addClass('shown');
    player = 1
    $('.a').click(function() {
        playerChoice = 0;
        if (player === 1) {
            var ansCheck = checkAnswer(questionIndex, playerChoice)
            console.log(ansCheck)
            if (ansCheck === true) {
                playerOneScore += 10;
            } else {
                playerOneScore;
            };
            console.log(playerOneScore);
            switchPlayer();
        } else if (player === 2) {
            var ansCheck = checkAnswer(questionIndex, playerChoice);
            console.log(ansCheck);
            if (ansCheck === true) {
                playerTwoScore += 10;
            } else {
                playerTwoScore
            };
            console.log(playerTwoScore);
            switchPlayer();
        }
    });
    $('.b').click(function() {
        playerChoice = 1;
        if (player === 1) {
            var ansCheck = checkAnswer(questionIndex, playerChoice);
            console.log(ansCheck);
            if (ansCheck === true) {
                playerOneScore += 10;
            } else {
                playerOneScore;
            };
            console.log(playerOneScore);
            switchPlayer();
        } else if (player === 2) {
            var ansCheck = checkAnswer(questionIndex, playerChoice);
            console.log(ansCheck);
            if (ansCheck === true) {
                playerTwoScore += 10;
            } else {
                playerTwoScore;
            };
            console.log(playerTwoScore)
            switchPlayer();
        }
    });
    //nextQuestion();

    function checkAnswer(questionIndex, playerChoice) {
        if (answers[questionIndex] == playerChoice) {
            return true;
        } else {
            return false;
        }
    };

    function switchPlayer() {
        if (player === 1) {
            player = 2;
        } else {
            player = 1;
        }
    }
    var $btn = $('.begin');
    $btn.click(function() {
            console.log('button works yay');
              nextQuestion();
            function nextQuestion() {
                $(divs[questionIndex]).removeClass('shown');
                console.log($(divs[questionIndex]));
                questionIndex = questionIndex + 1;
                console.log($(divs[questionIndex]));
                $(divs[questionIndex]).addClass('shown');
          };
        });
});

             /*

                      function numberOfQuestions() {
                      var classNames=["one","two","three","four","five","six","seven","eight","nine","ten"]
                      for (var i = 0; i < classNames.length; i++) {
                              return classNames[i]

                              }
                            }
                      //It should return an integer that is the number of questions in a game
                      currentQuestion()

                      //It should return an integer that is the zero-based index of the current question in the quiz
                      correctAnswer()

                      //It should return an integer that is the zero-based index the correct answer for the currrent question
                      numberOfChoices()

                      //It should return an integer that is the number of choices for the current question
                      playTurn(choice)

                      //It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
                      isGameOver()

                      //It should return a true or false if the quiz is over.
                      whoWon()

                      //It should return 0 if the game is not yet over, else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.+

                      restart()

                      //It should restart the game so it can be played again.
*/
