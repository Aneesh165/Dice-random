var randomNumber = Math.floor(Math.random() * 6) + 1; //numbers  from 1 - 6
var randomImage = "dice" + randomNumber + ".png"; // dice1.png - dice6.png
var randomSource = "./images/" + randomImage; //  ./images/dice1.png - ./images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "./images/dice" + randomNumber2 + ".png";
var image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImage2);

if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins !!!";
} else if (randomNumber2 > randomNumber) {
  document.querySelector("h1").innerHTML = "🚩Player 2 wins !!!";
} else {
  document.querySelector("h1").innerHTML = "Draw !!!";
}
