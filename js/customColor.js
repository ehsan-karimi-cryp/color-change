const inputColor = document.querySelector(".input-color");
const colorButton = document.querySelector(".color-button");
const bodyElement = document.querySelector(".body-element");

function changeColor() {
  if (inputColor.value.length !== 6) {
    alert("You have to enter hexadecimal color code with six characters.");
  } else {
    bodyElement.style.backgroundColor = "#" + inputColor.value;
    colorButton.style.transform = "scale(1.2)";
    setTimeout(()=> {colorButton.style.transform = "scale(1)";} , 100)
  }
}

colorButton.addEventListener("click", changeColor);
