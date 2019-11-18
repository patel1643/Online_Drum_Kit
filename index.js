

x = document.querySelectorAll("button")

for(var i = 0; i < x.length; i++){
  x[i].addEventListener("click", function (){
    var buttonName = this.innerHTML;
    buttonAnimation(buttonName);
    makeSound(buttonName);
  })
}


document.addEventListener("keypress", function(event){
  buttonAnimation(event.key);
  makeSound(event.key);
})

function makeSound(key){
  switch (key){

    case "w":
    var wSound = new Audio('sounds/crash.mp3');
    wSound.play();
    break;

    case "a":
     var aSound = new Audio('sounds/kick-bass.mp3');
     aSound.play();
     break;

     case "s":
     var sSound = new Audio('sounds/snare.mp3');
     sSound.play();
     break;

     case "d":
     var dSound = new Audio('sounds/tom-1.mp3');
     dSound.play();
     break;

     case "j":
      var jSound = new Audio('sounds/tom-2.mp3');
      jSound.play();
      break;

      case "k":
      var kSound = new Audio('sounds/tom-3.mp3');
      kSound.play();
      break;

      case "l":
      var lSound = new Audio('sounds/tom-4.mp3');
      lSound.play();
      break;

  }
}

function buttonAnimation(button){
  var activeBtn = document.querySelector("." + button);
  activeBtn.classList.add(".pressed");
  
  
  setTimeout(function(){
    activebtn.classList.remove(".pressed");
  }, 100);
  
  
}
