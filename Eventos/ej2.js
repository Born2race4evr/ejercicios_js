window.onload = function() {
  var texto = document.getElementById("texto");

  texto.onmouseover = aumentar;
  texto.onmouseout = disminuir;
};

function aumentar() {
  this.style.fontSize = "16pt";
}

function disminuir() {
  this.style.fontSize = "12pt";
}
