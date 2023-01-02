let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let button = document.getElementById("randomButton");
let body = document.getElementById("gradient");

setGradient();

function getRandomColor(){
  let letters = "0123456789ABCDEF";
  let rngColor = "#";

  for (let i = 0; i < 6; i++) {
    rngColor += letters[Math.floor(Math.random() * 16)];
  }

  return rngColor;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value 
	+ ", " + color2.value + ")";
	
	css.textContent = body.style.background + ";";
}

function setRandomColor(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

button.addEventListener("click", setRandomColor);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);