// define our first variable
// when someone clicks on the red circle, we want the background to turn red


// define our first variable, the red circle
let redCircle = document.querySelector(".red-circle");

// what happens when someone interacts with the red circle
function turnRed() {
   document.body.style.background = "red";
}

// add an event listener
// when someone clicks on the red circle, change the background red

redCircle.addEventListener("click", turnRed);

// defining the variable blue circle
let blueCircle = document.querySelector(".blue-circle");

function turnBlue() {
    document.body.style.background = "blue";
 }

 blueCircle.addEventListener("click", turnBlue);

 // defining the variable white circle

 let whiteCircle = document.querySelector(".white-circle");

function turnWhite() {
    document.body.style.background = "white";
 }

 whiteCircle.addEventListener("click", turnWhite);

 // defining the variable black circle

 let blackCircle = document.querySelector(".black-circle");

 function turnBlack() {
     document.body.style.background = "black";
  }
 
  blackCircle.addEventListener("click", turnBlack);

  // when user hovers on the word "corner"
  // cat image appears
  // when user hovers off the word "corner"
  // cat image disappears

  let flyingCat = document.querySelector(".cat");
  let hoverCorner = document.querySelector(".show-cat");
    hoverCorner.addEventListener("mouseover", function() {
    flyingCat.classList.add("active");
  })

  hoverCorner.addEventListener("mouseout", function() {
    flyingCat.classList.remove("active");
  })

  // dog images

  let dogs = document.querySelector(".dogs");

  // the word halfway
  let increaseDogImage = document.querySelector(".bigger-dogs");
  increaseDogImage.addEventListener("mouseover", function() {
    dogs.classList.add("active");
  })

  increaseDogImage.addEventListener("mouseout", function() {
    dogs.classList.remove("active");
  })