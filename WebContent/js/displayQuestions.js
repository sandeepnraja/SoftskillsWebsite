$(document).ready(function(){
//remove below alert before merging code to production.
alert("No issues in JS code!!");
//load questions from json file. Hard-coded here for testing purpose.
// var questions = $.getJSON("questions.js", function(jsonObject){
//});
var questions = [
		{"qno":"1","qsn":"This is question number ONE"},
		{"qno":"2","qsn":"This is question number TWO"},
		{"qno":"3","qsn":"This is question number THREE"},
		{"qno":"4","qsn":"This is question number FOUR"},
		{"qno":"5","qsn":"This is question number FIVE"},
		{"qno":"6","qsn":"This is question number SIX"},
		{"qno":"7","qsn":"This is question number SEVEN"},
		{"qno":"8","qsn":"This is question number EIGHT"},
		{"qno":"9","qsn":"This is question number NINE"},
		{"qno":"10","qsn":"This is question number TEN"}
];
var now_showing = 0, 
		disable_prev = 0, 
		disable_next = questions.length - 1, 
		current_question, 
		qsn_num = questions[0]["qno"],
    $question = $("#display_question").find("p"),
    $prev_btn = $("#prev_btn"),
    $next_btn = $("#next_btn"),
    $prev_btn_a = $("#prev_btn a"),
    $next_btn_a = $("#next_btn a");
function displayQuestion(){
	current_question = questions[now_showing];
	$question.html("").append(current_question["qsn"]);
};
function togglePrevNextBtns(){
//toggling previous and next based on current question number
if(disable_prev == now_showing){
		$prev_btn.addClass("disabled");
  	$prev_btn_a.bind('click', false);
	}else if(disable_next == now_showing){
		$next_btn.addClass("disabled");
  	$next_btn_a.bind('click', false);
	}else{
		$prev_btn.removeClass("disabled");
  	$prev_btn_a.unbind('click', false);
    $next_btn.removeClass("disabled");
  	$next_btn_a.unbind('click', false);  
	}
}
displayQuestion();
togglePrevNextBtns();
$("#prev_btn").click(function(){
	now_showing--;
  displayQuestion();
  togglePrevNextBtns();
});
$("#next_btn").click(function(){
	now_showing++;
  displayQuestion();
  togglePrevNextBtns();
});

alert("qsn_num: "+typeof (qsn_num)+" "+qsn_num);
alert("now_showing: "+typeof (now_showing)+" "+now_showing);
});