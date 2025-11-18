var texto = document.getElementById("texto");

function resize(event) {
  if (event.type === "mouseover") {
    //event.target.style.fontSize = "16pt";
    this.style.fontSize = "12pt";

  } else if (event.type === "mouseout") {
    event.target.style.fontSize = "12pt";
  }
}

texto.addEventListener("mouseover", resize);
texto.addEventListener("mouseout", resize);
