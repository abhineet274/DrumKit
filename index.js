
var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      add_audio(this.innerHTML);
      add_animation(this.innerHTML);
    });
}
document.addEventListener("keypress",function(event){
  add_audio(event.key);
  add_animation(event.key);
});
function add_audio(key)
{
    switch(key)
    {
      case "w":new Audio("sounds/crash.mp3").play(); break;
      case "a":new Audio("sounds/kick-bass.mp3").play(); break;
      case "s":new Audio("sounds/snare.mp3").play(); break;
      case "d":new Audio("sounds/tom-1.mp3").play(); break;
      case "j":new Audio("sounds/tom-2.mp3").play(); break;
      case "k":new Audio("sounds/tom-3.mp3").play(); break;
      case "l":new Audio("sounds/tom-4.mp3").play(); break;
    }
}
function add_animation(key){
  var activeButton=document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}
