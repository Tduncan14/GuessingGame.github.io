var choices = ["link","zelda", "mario","donkey","pikachu"];
var aiChoices = choices[Math.floor(Math.random)*choices.length];
var wins = 0;
var loses = 0;
var lives = 1;
var text;
var userChoice = [];

function play() {
  for( var i = 0 ; i < aiChoices.length; i++){
     userChoice[i]= "_";
  }
   text = userChoice.join("");
   document.getElementById("win").innerHTML= text ;

    function word() {
       var let = document.getElementById("let").value;

       if (let.length >0){
       for(var i = 0; i<choices.length; i++){

       if( choices[i]=== let){
         UserChoice[i]= let;

        alert("keep Going");
      }
      }
    }
  }
}
// create a win condition

// create a  lose condition /

// make a computer have a choice

// take player have a choice 

// compare computer choice with userchoice and  the decision is decided

// after one incorrect tries the person loses */

