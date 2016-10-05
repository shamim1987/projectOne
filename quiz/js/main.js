$(document).ready(function() {
    console.log("Good 2 Go");

    var player;
    //This is the player;
    var index = 0;
    //This variable dictates the position number of the qns ans ans in the array
    var playerOneScore = 0;
    var playerTwoScore = 0;
    //The variables abv dictate the player's scores
    var answers = [0, 0, 1, 1, 0];
    //This array is the answer key
    var playerChoice;
    //This variable dictates the player's answer based on the option he/she clicked
    var divs = ['.one', '.two', '.three', '.four', '.five', '.six']
        //This array contains the question divs

    $(divs[index]).addClass('shown');
    //by default, each class is hidden. As we cycle thru the qns, they appear as we answer them.
    player = 1
        //This variable dictates the current player
    $('.a').click(function() {
        console.log(player);
        playerChoice = 0;
        if (player === 1) {
            updateScoreP1();
            //This function switches player's after they make a selection.
        } else if (player === 2) {
            updateScoreP2();
        }
    });
    $('.b').click(function() {
        console.log(player)
        playerChoice = 1;
        if (player === 1) {
            updateScoreP1();

        } else if (player === 2) {
            updateScoreP2();
        }
    });

    function checkAnswer(index, playerChoice) {
        if (answers[index] == playerChoice) {
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

    function nextQuestion() {
        $(divs[index]).removeClass('shown');
        console.log($(divs[index]));
        index = index + 1;
        console.log($(divs[index]));
        $(divs[index]).addClass('shown');
    };

    function updateQuestion() {
        var $updateQnP1 = $('.pOneQn');
        var $updateQnP2 = $('.pTwoQn');
        var question = [1, 2, 3, 4, 5, 'Finito']
        $updateQnP1.text('Question ' + question[index]);
        $updateQnP2.text('Question ' + question[index]);

    };

    function updateScoreP1() {
        var $updateScorePl1 = $('.pOneScore');

        if (player === 1) {
            var ansCheck = checkAnswer(index, playerChoice)
            if (ansCheck === true) {
                playerOneScore = playerOneScore + 10;
                console.log(playerOneScore)
            }

        }

    }

    function updateScoreP2() {
        var $updateScorePl2 = $('.pTwoScore');
        if (player === 2) {
            var ansCheck = checkAnswer(index, playerChoice);
            if (ansCheck === true) {
                playerTwoScore = playerTwoScore + 10;
                console.log(playerTwoScore);
            }

        };
    }

    function displayScores() {
        var $updateScorePl1 = $('.pOneScore');
        var $updateScorePl2 = $('.pTwoScore');
        $updateScorePl1.text('Your Score is: ' + playerOneScore);
        $updateScorePl2.text('Your Score is: ' + playerTwoScore);
    }
    var $btn = $('.begin');
    $btn.click(function() {
        console.log('button works yay');
        nextQuestion();
        updateQuestion();
        displayScores();

    });

    var $btn1 = $('.P2');
    $btn1.click(function() {
        console.log('man Im good,2 u r up');
        switchPlayer();
        var $turn = $('.turn');
        if (player === 1) {
            $turn.text('Player 1 you are up!')
        } else if (player === 2) {
            $turn.text('Player 2 its your go!')
        }
    });

    var $btn2 = $('.restart');
    $btn2.click(function() {
        var $updateScorePl1 = $('.pOneScore');
        var $updateScorePl2 = $('.pTwoScore');
        var $updateQnP1 = $('.pOneQn');
        var $updateQnP2 = $('.pTwoQn');
        console.log('reset me');
        $(divs[5]).removeClass('shown');
        index = 0;
        console.log($(divs[index]));
        $(divs[index]).addClass('shown');
        $updateQnP1.text('Question 1');
        $updateQnP2.text('Question 1');
        $updateScorePl1.text('Your Score is: Zilch baby!! ');
        $updateScorePl2.text('Your Score is: Zilch too Mate!! ');

    });
       var $btn3=$('.winner')
       $btn3.click(function() {
         console.log('last button phew');
         winner();
       });
    function winner(){
     if (playerOneScore > playerTwoScore) {
        alert('Player 1 wins Mate! Sorry Player 2')
      } else if (playerTwoScore > playerOneScore) {
        alert('Player 2 wins Mate! Sorry Player 1')
      }
    }

});
