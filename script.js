const gameContainer = document.getElementById("game");

let notClicked = false;
let cardsClicked = 0;
let firstCard = '';
let secCard = '';

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

function match() {
  matched = document.querySelectorAll('.match');
  firstCard.classList.add('match');
  firstCard.classList.remove('clicked');
  secCard.classList.add('match');
  secCard.classList.remove('clicked');
  firstCard = '';
  secCard = '';
  cardsClicked = 0;

}

// function reset() {
  

// }

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  let liveCard = event.target;
  
  if(cardsClicked < 2) {
      cardsClicked ++
      // liveCard.classList.add('clicked')
      liveCard.style.backgroundColor = liveCard.classList[0];

      if(cardsClicked === 1) {
        firstCard = liveCard
        firstCard.classList.add('clicked');
      } else {
        secCard = liveCard === firstCard ? null: liveCard;
        secCard.classList.add('clicked')
      }

      if(cardsClicked === 2) {
        console.log('we are flipped!')
        if(firstCard.className === secCard.className) {
          console.log("we match!")
          match();
         }
      } else {   
        setTimeout(function() { 
          firstCard.style.backgroundColor = '';
          secCard.style.backgroundColor = '';
          firstCard.classList.remove("clicked");
          secCard.classList.remove("clicked");
          firstCard = null;
          secCard = null;
          notClicked = false;
          cardsClicked = 0;
        }, 2000);
      }
    // reset();
   }
}

// when the DOM loads
createDivsForColors(shuffledColors);