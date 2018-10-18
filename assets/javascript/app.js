

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
var currentQuestion;
var askQuestionsArr = [askQuestion1(), askQuestion2(), askQuestion3(), askQuestion4(), askQuestion5(), askQuestion6(), askQuestion7()]
var currentQuestionAsked = askQuestionsArr[0];


//Game Start
$(document).ready(function(){

    // function trueCorrect(event) {
    //     if (event.keyCode == 84 || 70) {
    //         if (event.keyCode == 84){
    //             alert("Correct! Nice Job");
    //             answersRight++;
    //             stop();
    //             answer = "right";
    //         } else if (event.keyCode == 70){
    //             alert("Incorrect! Nice try");
    //             answersWrong++;
    //             stop();
    //             answer = "wrong"
    //         } else {
    //         alert("That is not an answer!");
    //         }
    //     }
    // }

    // function falseCorrect(event) {
    //     if (event.keyCode == 84 || 70) {
    //         if (event.keyCode == 70){
    //             alert("Correct! Nice Job");
    //             answersRight++;
    //             stop();
    //             answer = "right";
    //         } else if (event.keyCode == 84){
    //             alert("Incorrect! Nice try");
    //             answersWrong++;
    //             stop();
    //             answer = "wrong"
    //         } else {
    //         alert("That is not an answer!");
    //         }
    //     }
    // }

//onkeyup functions - have all of the checking logic in one function
 $(document).keyup(function(event) {
     if (currentQuestion == questionArr[0], questionArr[1], questionArr[3], questionArr[4], questionArr[6]) {
        if (event.keyCode == 84 || 70) {
            if (event.keyCode == 84){
                alert("Correct! Nice Job");
                answersRight++;
                stop();
                currentQuestionAsked = askQuestionsArr++;
                setInterval(currentQuestionAsked, 3000);
                answer = "right";
            } else if (event.keyCode == 70){
                alert("Incorrect! Nice try");
                answersWrong++;
                stop();
                answer = "wrong"
            } else {
            alert("That is not an answer!");
            }
        }
     } else if (currentQuestion == questionArr[2], questionArr[5]){
        if (event.keyCode == 84 || 70) {
            if (event.keyCode == 70){
                alert("Correct! Nice Job");
                answersRight++;
                stop();
                answer = "right";
            } else if (event.keyCode == 84){
                alert("Incorrect! Nice try");
                answersWrong++;
                stop();
                answer = "wrong"
            } else {
            alert("That is not an answer!");
            }
        }
     }
    
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
        currentQuestion = questionArr[0];    
        resetTimer();
        $(".questionDiv").html(questions.q1);
        };   
        
        

function askQuestion2() { 
        currentQuestion = questionArr[1];    
        resetTimer();
        $(".questionDiv").html(questions.q2);
        document.onkeyup = null;
        setTimeout(askQuestion3, 3000);
        };
        

        

    function askQuestion3() { 
        currentQuestion = questionArr[2];    
        resetTimer();
        $(".questionDiv").html(questions.q3);
        document.onkeyup = null;
        setTimeout(askQuestion4, 3000);
        };
        
        

    function askQuestion4() { 
        currentQuestion = questionArr[3];    
        resetTimer();
        $(".questionDiv").html(questions.q4);
        document.onkeyup = null;
        setTimeout(askQuestion5, 3000);
        };
       

    function askQuestion5() {
        currentQuestion = questionArr[4];    
        resetTimer();
        $(".questionDiv").html(questions.q5);
        document.onkeyup = null;
        setTimeout(askQuestion6, 3000);
        };
        

    function askQuestion6() {
        currentQuestion = questionArr[5];    
        resetTimer();
        $(".questionDiv").html(questions.q6);
        document.onkeyup = null;
        setTimeout(askQuestion7, 3000);
        };   
        
    

    function askQuestion7() {
        currentQuestion = questionArr[6];    
        resetTimer();
        $(".questionDiv").html(questions.q7);
        document.onkeyup = null;
        setTimeout(askQuestion6, 3000);
        };
        

askQuestion1();

});


