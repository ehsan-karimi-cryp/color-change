const textAndNumbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
var randomElement = "#";
const colorButton = document.querySelector(".color-button");
const colorText = document.querySelector(".color-text");
const bodyElement = document.querySelector(".body-element");
function changeBackgroundColor() {
  for (let i = 0; i < 6; i++) {
    let arrayElement = Math.floor(Math.random() * textAndNumbers.length);
    randomElement = randomElement + textAndNumbers[arrayElement];
  }
  bodyElement.style.backgroundColor = randomElement;
  colorText.innerHTML = "Color is " + randomElement;
  randomElement = "#"
}

colorButton.addEventListener("click", changeBackgroundColor);
