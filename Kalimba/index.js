var numberOfDrumButtons = document.querySelectorAll(".kalimba").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".kalimba")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "1":
      var tom1 = new Audio("sounds/do.mp3");
      tom1.play();
      break;

    case "2":
      var tom2 = new Audio("sounds/re.mp3");
      tom2.play();
      break;

    case "3":
      var tom3 = new Audio('sounds/mi.mp3');
      tom3.play();
      break;

    case "4":
      var tom4 = new Audio('sounds/fa.mp3');
      tom4.play();
      break;

    case "5":
      var snare = new Audio('sounds/so.mp3');
      snare.play();
      break;

    case "6":
      var crash = new Audio('sounds/la.mp3');
      crash.play();
      break;

    case "7":
      var kick = new Audio('sounds/ti.mp3');
      kick.play();
      break;

      case "8":
      var kick = new Audio('sounds/doo.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
