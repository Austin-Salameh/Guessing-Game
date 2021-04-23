'use strict';

let score = 20;
let highscore = 0;
let lowscore = 20;

function displayMessage(message){
    document.querySelector('.message').textContent= message;
}

 function secretNum(){
    return Math.trunc(Math.random() * 20)+1
}

function displayScore(score){
    document.querySelector('.score').textContent= score;
}

let secretNumber = secretNum();

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess)
    displayScore(score);

    //when there is no input
    if(!guess){
        displayMessage('No number entered!');

        //When the player wins
    } else if(guess === secretNumber){
         displayMessage("Congrats you got it!!");
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        
        //set high score based on the score
        if(score > highscore){
            highscore = score;
        document.querySelector('.title').textContent = "Congrats New HighScore!"
        document.querySelector('.highscore').textContent = highscore; 
        } else if(score < highscore){
            lowscore = score;
            document.querySelector('.lowscore').textContent = lowscore;
        }

    //refactored the number too high and low by adding them in one block using a ternary operator
    } else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Number is too high!' : 'Number is too low!');
        score--;
            document.querySelector('.score').textContent = 
        score;
        } else {
            displayMessage("You lose :(");
            displayScore(0);
            document.querySelector('body').style.backgroundColor = "red";
    }
}

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = secretNum();
    document.querySelector('.number').style.width= '15rem',
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    displayScore(score);
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('.title').textContent = 'Guess My Number!';
})

});




