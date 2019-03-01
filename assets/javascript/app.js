//golobal variables
var time = 30;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var notAnswered = 0;

// question Array
var questionsList = [
    {
        question: "The world War 1 begin 1917",
        answerList: ["True", "False"],
        answer: 1

    },
    {
        question: "Chicago Bulls retire in honor of Michael Jordan 23 times",
        answerList: ["True", "False"],
        answer: 0
    },
    {
        question: " The planet in our solar system which has the most moons is Mercury",
        answerList: ["True", "False"],
        answer: 1
    },
    {
        question: "the capital city of Iran is Isfahan",
        answerList: ["True", "False"],
        answer: 1
    },

    {
        question: "the Longest River in the world is Amazon",
        answerList: ["True", "False"],
        answer: 0
    },

];
// testing
console.log(questionsList[0].answerList[1]);
console.log(questionsList[0].question);

// on click funtion

$(".startBtn").on("click", function () {
    $(this).hide();

    // Displaying the intitial time set
    $("#timeLeft").html("<h5> Time Remaining: seconds</h5> " + "<br>");

    // calling the countdown time function here
    run();

    // displaying the questions 

    // question 1

    $("#question1").html(questionsList[0].question);
    $("#answer1").html("<input type='radio' name = 'answer1' value = '0' " + "<label> " + questionsList[0].answerList[0] + "</label> "
        + "<input type = 'radio' name = 'answer1' value = '1' " + "<label> " + questionsList[0].answerList[1] + "</label>" + "<br>"+"<hr>");


    $("#question2").html(questionsList[1].question);
    $("#answer2").html("<input type='radio' name = 'answer2' value = '0' " + "<label> " + questionsList[1].answerList[0] + "</label> "
        + "<input type = 'radio' name = 'answer2' value = '1' " + "<label> " + questionsList[1].answerList[1] + "</label>" + "<br>"+"<hr>");

    $("#question3").html(questionsList[2].question);
    $("#answer3").html("<input type='radio' name = 'answer3' value = '0' " + "<label> " + questionsList[2].answerList[0] + "</label> "
        + "<input type = 'radio' name = 'answer3' value = '1' " + "<label> " + questionsList[2].answerList[1] + "</label>" + "<br>"+"<hr>");

    $("#question4").html(questionsList[3].question);
    $("#answer4").html("<input type='radio' name = 'answer4' value = '0' " + "<label> " + questionsList[3].answerList[0] + "</label> "
        + "<input type = 'radio' name = 'answer4' value = '1' " + "<label> " + questionsList[3].answerList[1] + "</label>" + "<br>"+"<hr>");

    $("#question5").html(questionsList[4].question);
    $("#answer5").html("<input type='radio' name = 'answer5' value = '0' " + "<label> " + questionsList[4].answerList[0] + "</label> "
        + "<input type = 'radio' name = 'answer5' value = '1' " + "<label> " + questionsList[4].answerList[1] + "</label>" + "<br>"+"<hr>");


    // Done Button

    $("#doneBtn").html("<button type = 'btn'>Done</button>");

    // the function of the click on Done button
    $("#doneBtn").on("click", function () {

        keepingScore();

        displayResults();

    })

})

// time countdown funtion

function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    time--;

    $("#timeLeft").html("<h5> Time Remaining:" + time + "seconds</h5> " + "<br>");


    // if time is 0 then run the stop function
    if (time === 0) {
        stop();
    }
}

function stop() {

    clearInterval(intervalId);
}

// function displaying the results and hiding all the other things.

function displayResults() {

    $("#timeLeft").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#doneBtn").hide();


    $("#finalMessage").html("<h4>All Done!!</h4>")
    $("#correct").html("correct answers: " + correctAnswers);
    $("#incorrect").html("incorrect answers: " + incorrectAnswers);
    $("#notAnswered").html("Not answered: " + notAnswered);
}

// function of letting user answer the questions

function keepingScore() {

    var userAnswer1 = $("input[name = 'answer1']:checked").val();
    var userAnswer2 = $("input[name = 'answer2']:checked").val();
    var userAnswer3 = $("input[name = 'answer3']:checked").val();
    var userAnswer4 = $("input[name = 'answer4']:checked").val();
    var userAnswer5 = $("input[name = 'answer5']:checked").val();



    //QUESTION 1
    if (userAnswer1 === undefined) {
        notAnswered++;
    }
    else if (userAnswer1 == questionsList[0].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }
    //QUESTION 2
    if (userAnswer2 === undefined) {
        notAnswered++;
    }
    else if (userAnswer2 == questionsList[1].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }


    //QUESTION 3

    if (userAnswer3 === undefined) {
        notAnswered++;
    }
    else if (userAnswer3 == questionsList[2].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }

    //QUESTION 4

    if (userAnswer4 === undefined) {
        notAnswered++;
    }
    else if (userAnswer4 == questionsList[3].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }

    //QUESTION 5
    if (userAnswer5 === undefined) {
        notAnswered++;
    }
    else if (userAnswer1 == questionsList[4].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }
}

