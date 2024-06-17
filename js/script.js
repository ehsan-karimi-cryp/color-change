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
const randomElement = () => {
  return Math.floor(Math.random() * textAndNumbers.length);
};
const colorButton = document.querySelector(".color-button");
const colorText = document.querySelector(".color-text");
const bodyElement = document.querySelector(".body-element");

function changeBackgroundColor() {
  let elementsOfArray = "#";
  for (let i = 0; i < 6; i++) {
    let arrayElement = randomElement();
    elementsOfArray = elementsOfArray + textAndNumbers[arrayElement];
  }
  bodyElement.style.backgroundColor = elementsOfArray;
  colorText.innerHTML = "Color is " + elementsOfArray;
  colorButton.style.transform = "scale(1.2)";
  setTimeout(()=> {colorButton.style.transform = "scale(1)";} , 100)
  randomElement = "#";
}

colorButton.addEventListener("click", changeBackgroundColor);
