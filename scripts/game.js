// Selects a random number to be shown at the start of the game

var loss = 0;
var win = 0;
var genNum = Math.floor(Math.random() * (102) + 19);
var gemOne = Math.floor(Math.random() * 12) + 1;
var gemTwo = Math.floor(Math.random() * 12) + 1;
var gemThree = Math.floor(Math.random() * 12) + 1;
var gemFour = Math.floor(Math.random() * 12) + 1;
var score = gemOne;
$(document).ready(function () {
    $("#go").html(genNum);
    $("#g1").html(gemOne);
    $("#g2").html(gemTwo);
    $("#g3").html(gemThree);
    $("#g4").html(gemFour);
    $('#win').text(win);
    $('#loss').text(loss);
    $('#score').text(score);
    $("#g1").hide(); 
    $("#g2").hide();
    $("#g3").hide();
    $("#g4").hide();

// =================================

    $("#red").click(function(){
        $('#score').html(gemOne);
});
    });
    $("#purple").click(function(){
    $('#score').html(gemTwo);
    });
    $("#green").click(function(){
        $('#score').html(gemThree);
    });
    $("#orange").click(function(){
        $('#score').html(gemFour);
    });

console.log(genNum);
console.log(gemOne);
console.log(gemTwo);
console.log(gemThree);
console.log(gemFour);
console.log(score);
    
