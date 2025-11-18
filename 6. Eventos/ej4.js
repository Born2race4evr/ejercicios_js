var texto = document.getElementById("texto");

function aumentar() {
  this.style.fontSize = "16pt";
}

function disminuir() {
  this.style.fontSize = "12pt";
}

texto.addEventListener("mouseover", aumentar);
texto.addEventListener("mouseout", disminuir);
