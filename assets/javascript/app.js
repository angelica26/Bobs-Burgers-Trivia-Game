var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
 


var countdown;
var time = 90;
var theTimer = setInterval(countdown, 1000);
var doneButton = $("#done");
var resetButton = $("<button id='reset'>");
resetButton.hide();

function checkAnswers() {
	var q1 = $('input[name="q1"]:radio');
	var selected1 = $('input[name="q1"]:checked').val();
	console.log(selected1);
		if (selected1 === "c") {
			console.log("correct");
			correctAnswers++;
		} else if (selected1 === undefined) {
			unanswered++;
			console.log("unanswered")
		} else {
			incorrectAnswers++;
			console.log("wrong")
		}


	var q2 = $('input[name="q2"]:radio');
	var selected2 = $('input[name="q2"]:checked').val();
	console.log(selected2);
		if (selected2 === "a") {
			console.log("correct");
			correctAnswers++;
		} else if (selected2 === undefined) {
			unanswered++;
			console.log("unanswered")
		} else {
			incorrectAnswers++;
			console.log("wrong")
		}

	var q3 = $('input[name="q3"]:radio');
	var selected3 = $('input[name="q3"]:checked').val();
	console.log(selected3);
		if (selected3 === "b") {
			console.log("correct");
			correctAnswers++;
		} else if (selected3 === undefined) {
			unanswered++;
			console.log("unanswered")
		} else {
			incorrectAnswers++;
			console.log("wrong")
		}

	var q4 = $('input[name="q4"]:radio');
	var selected4 = $('input[name="q4"]:checked').val();
	console.log(selected4);
		if (selected4 === "d") {
			console.log("correct");
			correctAnswers++;
		} else if (selected4 === undefined) {
			unanswered++;
			console.log("unanswered")
		} else {
			incorrectAnswers++;
			console.log("wrong")
		}

	var q5 = $('input[name="q5"]:radio');
	var selected5 = $('input[name="q5"]:checked').val();
	console.log(selected5);
		if (selected5 === "b") {
			console.log("correct");
			correctAnswers++;
		} else if (selected5 === undefined) {
			unanswered++;
			console.log("unanswered");
		} else {
			incorrectAnswers++;
			console.log("wrong");
		}

	var q6 = $('input[name="q6"]:radio');
	var selected6 = $('input[name="q6"]:checked').val();
	console.log(selected6);
		if (selected6 === "c") {
			console.log("correct");
			correctAnswers++;
		} else if (selected6 === undefined) {
			unanswered++;
			console.log("unanswered");
		} else {
			incorrectAnswers++;
			console.log("wrong");
		}

	var q7 = $('input[name="q7"]:radio');
	var selected7 = $('input[name="q7"]:checked').val();
	console.log(selected7);
		if (selected7 === "a") {
			console.log("correct");
			correctAnswers++;
		} else if (selected7 === undefined) {
			unanswered++;
			console.log("unanswered");
		} else {
			incorrectAnswers++;
			console.log("wrong");
		}


	
}

function countdown() {
	time--;
	$("#timer").html(time);
	if (time === 0) {
	clearInterval(theTimer);
	checkAnswers();
	$("#qbox").empty();
	$("#qbox").html("Correct Answers: " + correctAnswers + "<br>" + "Incorrect Answers: " + incorrectAnswers + "<br>" + "Unanswered Questions: " + unanswered);
	resetButton.show();
	resetButton.html("Play Again");
	$("#qbox").append(resetButton);

			$("#reset").on("click", function() {
   		   	location.reload(true);
		});
	};
}



	

doneButton.on("click", function(){
	checkAnswers();
	$("#qbox").empty();
	$("#qbox").html("Correct Answers: " + correctAnswers + "<br>" + "Incorrect Answers: " + incorrectAnswers + "<br>" + "Unanswered Questions: " + unanswered);
	
	resetButton.show();
	resetButton.html("Play Again");
	$("#qbox").append(resetButton);

		$("#reset").on("click", function() {
   		location.reload(true);
		});
});



