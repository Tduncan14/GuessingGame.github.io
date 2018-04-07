var randWordArr=["red","blue"];
var randomWord = randomWordArr[Math.floor(Math.random()*randomWordArr.length)];
var s;
var tries= 3;
var answerArray=[];

function play () {
    for (var i=0; i<randomWord.length;1++ ){
        answerArray[1]="__"
    }
    s= answerArray.join("");
    document.getElementById("answer").innerHtml;

function letter(){
    var letter=document.getElementById("letter").value;

    if(letter.length>0){
        for(var i=0;i<randomWord.length;i++){
            if (randWord[i]===letter){
                answerArray[i]=letter;

        }
    }
}
}
}