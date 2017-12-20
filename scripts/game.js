// Selects a random number to be shown at the start of the game


var genNum = Math.floor(Math.random() * (102) + 19);
var gemOne = Math.floor(Math.random() * 12) + 1;
var gemTwo = Math.floor(Math.random() * 12) + 1;
var gemThree = Math.floor(Math.random() * 12) + 1;
var gemFour = Math.floor(Math.random() * 12) + 1;
var score = 0;
var loss = 0;
var win = 0;


$(document).ready(function () {

    $("#go").html(genNum);
    $("#g1").html(gemOne);
    $("#g2").html(gemTwo);
    $("#g3").html(gemThree);
    $("#g4").html(gemFour);
    $('#win').html(win);
    $('#loss').html(loss);
    $('#score').html(score);
    $("#g1").hide();
    $("#g2").hide();
    $("#g3").hide();
    $("#g4").hide();
    // =================================

$("#red").click(function () {
    score = score + gemOne;
    $('#score').html(score);
    checkWin();
});
$("#purple").click(function () {
    score = score + gemTwo;
    $('#score').html(score);
    checkWin();
});
$("#green").click(function () {
    score = score + gemThree;
    $('#score').html(score);
    checkWin();
});
$("#orange").click(function () {
    score = score + gemFour;
    $('#score').html(score);
    checkWin();
});
});
function checkWin() {
    if (score === genNum) {
        $("#win").html("You Win!");
        $("#text-w").hide();
        $("#text-l").hide();
        $("#loss").hide();
    }
    else if (score > genNum) {
        $("#loss").html("You Lose :(");
        $("#text-l").hide();
        $("#text-w").hide();
        $("#win").hide();
    }}


if (score == genNum) {
    $("#win").html("You Win!");
} else if (score > genNum) {
    $("#loss").html("You Lose!");
}
console.log(genNum);
console.log(gemOne);
console.log(gemTwo);
console.log(gemThree);
console.log(gemFour);
