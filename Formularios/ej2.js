function aplicarColor() {
  var select = document.getElementById('colorSelect');
  var texto = document.getElementById('texto');
  texto.style.color = select.value;
}