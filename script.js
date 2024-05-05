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
var automaticChange = true;
var automaticChangeFunction = "change";
var randomElement = "#";
var colorChangeInterval;
const colorButton1 = document.querySelector(".color-button1");
const colorButton2 = document.querySelector(".color-button2");
const colorText = document.querySelector(".color-text");
const bodyElement = document.querySelector(".body-element");

function changeBackgroundColor() {
  for (let i = 0; i < 6; i++) {
    let arrayElement = Math.floor(Math.random() * textAndNumbers.length);
    randomElement = randomElement + textAndNumbers[arrayElement];
  }
  bodyElement.style.backgroundColor = randomElement;
  colorText.innerHTML = "Color is " + randomElement;
  randomElement = "#";
}

colorButton1.addEventListener("click", changeBackgroundColor);
colorButton2.addEventListener("click", () => {
  if (automaticChange === true && automaticChangeFunction === "change") {
    colorChangeInterval = setInterval(changeBackgroundColor, 500);
    automaticChange = false;
    automaticChangeFunction = "stopChange";
    colorButton2.innerHTML = "Stop Change";
  } else if (
    automaticChange === false &&
    automaticChangeFunction === "stopChange"
  ) {
    clearInterval(colorChangeInterval);
    colorButton2.innerHTML = "Change Automatically";
    automaticChange = true;
    automaticChangeFunction = "change";
  }
});
