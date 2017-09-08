var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
 


var countdown;
var time = 90;
var theTimer = setInterval(countdown, 1000);

function countdown() {
	time--;
	$("#timer").html(time);
	
}

var a1 = $("input[name=q1]:checked", "#question1").val();
console.log(a1);

