

//Game Starts - push a true or false question to the html
//The countdown will start at 8 and go down to 0 - the user has 8 seconds to answer the question
//The user will press t for true and f for false
//If the user chooses the correct answer, Alert Congratulations, add one to "correct", and start a 3 second timeout to the next question
//If the user chooses the wrong answer, Alert Loser, add one to "wrong", and start a 3 second timeout to the next question
//If the countdown reaches 0 seconds, Alert Loser (or "Out of Time!"), add one to "wrong", and start a 3 second timeout to the next question
//Push a new question to the page (consider using objects to accomplish this) and restart the 8 second timer
//Once the user has answered all of the questions, display a new page that has the number of answers correct, number of answers wrong, and an option to restart
//If the user pushes restart, put right and wrong answers to 0, start at question 1, restart the timer


var answersRight = 0;
var answersWrong = 0;
var questions = {
    q1: "True or False: Approximately one quarter of human bones are in the feet", //true
    q2: "True or False: Popeye has four nephews named Peepeye, Poopeye, Pipeye, and Pupeye", //true
    q3: "True or False: In ancient Rome, a special room called a vomitorium was available for diners to purge food during and after meals", //false
    q4: "True or False: The average person will shed approximately 40 pounds of skin during their lifetime", //true
    q5: "True or False: Sneezes regularly exceed 100 mph", //true
    q6: "True or False: The Great Wall of China is visible from the moon", //false
    q7: "True or False: Virtually all Las Vegas Casinos ensure that there are no visible clocks" //true
};
var questionArr = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5, questions.q6, questions.q7,];
var timer = 13;
var intervalId;
var answer = "";
var letter;
 

//Game Start
$(document).ready(function(){

//Right and Wrong

    function right() {
        alert("Correct! Nice Job");
        answersRight++;
        stop();
        answer = "right";
    }

    function wrong() {
        alert("Incorrect! Nice try");
        answersWrong++;
        stop();
        answer = "wrong"
    }

//Count down timer
    function timeDown() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        timer--;
        $(".timeRemainingDiv").html("<h4>Time Remaining: " + timer + "</h4>");
        if (timer == 0){
            stop();
            alert("time is up!");
            answersWrong++;
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function resetTimer() {
        timer = 13;
        timeDown();
        decrement();
    }

//Ask questions
    function askQuestion1() {
        resetTimer();
        $(".questionDiv").html(questions.q1);
            $(document).keyup(function(event) {
                if (event.keyCode == 84 || 70) {
                    if (event.keyCode == 84){
                        right();
                        setTimeout(askQuestion2, 3000);
                    } else if (event.keyCode == 70){
                        wrong();
                        setTimeout(askQuestion2, 3000);
                    } else {
                    alert("That is not an answer!");
                    }
                }   
            })
            if (timer == 0){
                setTimeout(askQuestion2, 3000);
            };
        };
        

function askQuestion2() { //Starting at Question 2 I am starting to get double answers (right or wrong)
        $(".questionDiv").html(questions.q2);
        resetTimer();
            $(document).keyup(function(event) {
                if (event.keyCode == 84 || 70) {
                    if (event.keyCode == 84){
                        right();
                        setTimeout(askQuestion3, 3000);
                    } else if (event.keyCode == 70){
                        wrong();
                        setTimeout(askQuestion3, 3000);
                    } else {
                    alert("That is not an answer!");
                    }
                }   
            })
            if (timer == 0){
                setTimeout(askQuestion3, 3000);
            };
        };
        

    function askQuestion3() { //Starting at question 3, the seconds are going by twice as fast and I get 3 incorrect answers before the correct answer
        $(".questionDiv").html(questions.q3);
        resetTimer();
            $(document).keyup(function(event) {
                if (event.keyCode == 84 || 70) {
                    if (event.keyCode == 70){
                        right();
                        setTimeout(askQuestion4, 3000);
                    } else if (event.keyCode == 84){
                        wrong();
                        setTimeout(askQuestion4, 3000);
                    } else {
                    alert("That is not an answer!");
                    }
                }   
            })
            if (timer == 0){
                setTimeout(askQuestion4, 3000);
            };
        };

    function askQuestion4() { //The game speeds up so exponentially fast that it is unplayable.
        $(".questionDiv").html(questions.q4);
        resetTimer();
            $(document).keyup(function(event) {
                if (event.keyCode == 84 || 70) {
                    if (event.keyCode == 84){
                        right();
                        setTimeout(askQuestion5, 3000);
                    } else if (event.keyCode == 70){
                        wrong();
                        setTimeout(askQuestion5, 3000);
                    } else {
                    alert("That is not an answer!");
                    }
                }   
            })
            if (timer == 0){
                setTimeout(askQuestion5, 3000);
            };
        };

    function askQuestion5() {
        $(".questionDiv").html(questions.q5);
        resetTimer();
            $(document).keyup(function(event) {
                if (event.keyCode == 84 || 70) {
                    if (event.keyCode == 84){
                        right();
                        setTimeout(askQuestion6, 3000);
                    } else if (event.keyCode == 70){
                        wrong();
                        setTimeout(askQuestion6, 3000);
                    } else {
                    alert("That is not an answer!");
                    }
                }   
            })
            if (timer == 0){
                setTimeout(askQuestion6, 3000);
            };
        };

    function askQuestion6() {
        $(".questionDiv").html(questions.q6);
        resetTimer();
            $(document).keyup(function(event) {
                if (event.keyCode == 84 || 70) {
                    if (event.keyCode == 70){
                        right();
                        setTimeout(askQuestion7, 3000);
                    } else if (event.keyCode == 84){
                        wrong();
                        setTimeout(askQuestion7, 3000);
                    } else {
                    alert("That is not an answer!");
                    }
                }   
            })
            if (timer == 0){
                setTimeout(askQuestion7, 3000);
            };
        };

    function askQuestion7() {
        $(".questionDiv").html(questions.q7);
        resetTimer();
            $(document).keyup(function(event) {
                if (event.keyCode == 84 || 70) {
                    if (event.keyCode == 84){
                        right();
                        //Show final answer screen
                    } else if (event.keyCode == 70){
                        wrong();
                        //Show final answer screen
                    } else {
                    alert("That is not an answer!");
                    }
                }   
            })
            if (timer == 0){
            //Show final answer screen
            };
        };


askQuestion1();

});


