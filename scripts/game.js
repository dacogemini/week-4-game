// Selects a random number to be shown at the start of the game

var loss = 0;
var win = 0;
var status = 0;
var genNum = Math.floor(Math.random() * (102) + 19);
var gemOne = Math.floor(Math.random() * 12) + 1;
var gemTwo = Math.floor(Math.random() * 12) + 1;
var gemThree = Math.floor(Math.random() * 12) + 1;
var gemFour = Math.floor(Math.random() * 12) + 1;


function calculate() {
    status = gemOne + gemTwo;
}


$(document).ready(function () {
    $("#go").html(genNum);
    $("#g1").html(gemOne);
    $("#g2").html(gemTwo);
    $("#g3").html(gemThree);
    $("#g4").html(gemFour);
    $('#win').text(win);
    $('#loss').text(loss);
    $('#status').text(status);
    $("#g1").hide();
    $("#g2").hide();
    $("#g3").hide();
    $("#g4").hide();
    $('#g1').click(function calculate () {
     
      
    });
    $('.gem-bx-2').click(function () {
        math = math + blue;
        config();
    });
    $('#yellow').click(function () {
        math = math + yellow;
        config();
    });
    $('#green').click(function () {
        math = math + green;
        config();
    });    
   
});
console.log(genNum);
console.log(gemOne);
console.log(gemTwo);
console.log(gemThree);
console.log(gemFour);
console.log(status);


