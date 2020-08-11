var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];
var userClickedPattern = [];
var level = 0;
function nextSequence(){
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random()*4);
  level++;
  $("h1").text("Level "+level);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentlevel){
  if(userClickedPattern[currentlevel] === gamePattern[currentlevel]){

    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function(){nextSequence()},1000);
    }
  }
  else{
    $("h1").text("Restart your game");
  }

}
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
}
var started=false;

  $(document).on("keydown",function(){
    if(started===false){
      $("h1").text("Level "+level);
      nextSequence();
      started=true;

    }
  });
