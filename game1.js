var gamePattern=[];
var userPattern=[];
var colors=["red","blue","green","yellow"];

var isStarted=true;
var level=0;

$(document).keypress(function(){
  if(isStarted){
  $('#level-title').text("Level "+level);
  nextSequence();
  isStarted=false;

  }
});
$('.btn').click(function(){
  var userChosenColor=$(this).attr("id");
  userPattern.push(userChosenColor);

  soundPlay(userChosenColor);
  animatePress(userChosenColor);
  matchPattern(userPattern.length-1);

});

var matchPattern=function(userPatternLength){
  if(userPattern[userPatternLength]===gamePattern[userPatternLength]){
    if(userPattern.length==gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else{
        soundPlay("wrong");
        $('#level-title').text("Game Over, Press any Button to start again");
        $("body").addClass("game-over");

        setTimeout(function(){
          $("body").removeClass("game-over");
        },200);

        startOver();
      }
  }





var nextSequence=function(){
    userPattern=[];
    level++;

    $("#level-title").text("Level "+level);
    var randomColorNumber=Math.floor(Math.random()*4);
    var chosenColor=colors[randomColorNumber];
    gamePattern.push(chosenColor);
    $("#"+chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    soundPlay(chosenColor);

}


var soundPlay=function(colorName){
  var audio=new Audio(colorName+".mp3");
  audio.play();
}
var animatePress=function(name){
  $("#"+name).addClass("pressed");
  setTimeout(function(){
    $("#"+name).removeClass("pressed");
  },100);
}
var startOver=function(){
  level=0;
  gamePattern=[];
  isStarted=true;
}
 