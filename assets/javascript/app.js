

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
var timer = 8;
var intervalId;
var answer;


//Game Start
$(document).ready(function(){

//Keyup Event Listener
$(document).keyup(function(event) {
    letter = String.fromCharCode(event.keyCode);
    console.log(letter);
});

//True and False Definitions
function trueFalse(){
    if (letter = "t"){
        answer = "true";
        console.log(answer);
    } else if (letter = "f"){
        answer = "false";
        console.log(answer);
    }
};

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



//Ask questions
    function askQuestion1() {
        $(".questionDiv").html(questions.q1);
        trueFalse();
        if (answer == "true") {
            alert("Correct! Nice Job");
            answersRight++;
            stop();
            setTimeout(askQuestion2, 3000);
        } else if (answer == "false") {
            alert("Incorrect! Nice try");
            answersWrong++;
            stop();
            setTimeout(askQuestion2, 3000);
        }
    }

    function askQuestion2() {
        $(".questionDiv").html(questions.q2);
        trueFalse();
        if (answer == "true") {
            alert("Correct! Nice Job");
            answersRight++;
            stop();
            setTimeout(askQuestion3, 3000);
        } else if (answer == "false") {
            alert("Incorrect! Nice try");
            answersWrong++;
            stop();
            setTimeout(askQuestion3, 3000);
        }
    }

    function askQuestion3() {
        $(".questionDiv").html(questions.q3);
        trueFalse();
        if (answer == "false") {
            alert("Correct! Nice Job");
            answersRight++;
            stop();
            setTimeout(askQuestion4, 3000);
        } else if (answer == "true") {
            alert("Incorrect! Nice try");
            answersWrong++;
            stop();
            setTimeout(askQuestion4, 3000);
        }
    }

    function askQuestion4() {
        $(".questionDiv").html(questions.q4);
        trueFalse();
        if (answer == "true") {
            alert("Correct! Nice Job");
            answersRight++;
            stop();
            setTimeout(askQuestion5, 3000);
        } else if (answer == "false") {
            alert("Incorrect! Nice try");
            answersWrong++;
            stop();
            setTimeout(askQuestion5, 3000);
        }
    }

    function askQuestion5() {
        $(".questionDiv").html(questions.q5);
        trueFalse();
        if (answer == "true") {
            alert("Correct! Nice Job");
            answersRight++;
            stop();
            setTimeout(askQuestion6, 3000);
        } else if (answer == "false") {
            alert("Incorrect! Nice try");
            answersWrong++;
            stop();
            setTimeout(askQuestion6, 3000);
        }
    }

    function askQuestion6() {
        $(".questionDiv").html(questions.q6);
        trueFalse();
        if (answer == "false") {
            alert("Correct! Nice Job");
            answersRight++;
            stop();
            setTimeout(askQuestion7, 3000);
        } else if (answer == "true") {
            alert("Incorrect! Nice try");
            answersWrong++;
            stop();
            setTimeout(askQuestion7, 3000);
        }
    }

    function askQuestion7() {
        $(".questionDiv").html(questions.q7);
        trueFalse();
        if (answer == "true") {
            alert("Correct! Nice Job");
            answersRight++;
            stop();
            //setTimeout(ResultsPage, 3000);
        } else if (answer == "false") {
            alert("Incorrect! Nice try");
            answersWrong++;
            stop();
            //setTimeout(ResultsPage, 3000);
        }
    }

  timeDown();
  askQuestion1();

});



