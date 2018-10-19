

var answersRight = 0;
var answersWrong = 0;
var timer = 61;
var intervalId;

//Game Start
$(document).ready(function(){

//Stop timer when the Finish button is clicked
$("#button").click(function(){
    stop();
});

//Count down timer
function timeDown() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    $(".timeRemainingDiv").html("<h4>Time Remaining: " + timer + "</h4>");
    if (timer == 0){
        stop();
        alert("Time is up!");
        check();
        alert("You got " + answersRight + " answers right and " + answersWrong + " answers wrong. Better luck next time!");
    }
}

function stop() {
    clearInterval(intervalId);
}

timeDown();
    
});

//Checks whether the answer is right or wrong
function check(){
    
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;

    if (question1 == "true"){
        answersRight++;
    } else {
        answersWrong ++;
    }
    if (question2 == "true"){
        answersRight++;
    } else {
        answersWrong ++;
    }
    if (question3 == "false"){
        answersRight++;
    } else {
        answersWrong ++;
    }
    if (question4 == "true"){
        answersRight++;
    } else {
        answersWrong ++;
    }
    if (question5 == "true"){
        answersRight++;
    } else {
        answersWrong ++;
    }
    if (question6 == "false"){
        answersRight++;
    } else {
        answersWrong ++;
    }
    if (question7 == "true"){
        answersRight++;
    } else {
        answersWrong ++;
    }

    $("#afterSubmit").css("visibility", "visible");
    $("#numCorrect").html("Answers Right: " + answersRight);
    $("#numWrong").html("Answers Wrong: " + answersWrong);
};


