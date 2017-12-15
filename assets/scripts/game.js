
 

 // Selects a random number to be shown at the start of the game
 
var loss = 0;
var win = 0;
var genNum = Math.floor(Math.random() * (102) + 19); 

function generate () {
    document.getElementById("go").innerHTML = Math.ceil(genNum);
}
console.log(genNum);

 $( document ).ready(function(){
 })