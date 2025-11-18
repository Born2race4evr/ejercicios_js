function cambiarColor() {
  var seleccionado = document.querySelector('input[name="color"]:checked');
  var texto = document.getElementById('texto');

  if (seleccionado) {
    texto.style.color = seleccionado.value;
  }
}
