function soloNumeros(event) {
  // Obtengo el código de la tecla pulsada
  var codigo = event.keyCode || event.charCode;

  // Si la tecla no es un número (del 0 al 9), cancelo la entrada
  if (codigo < 48 || codigo > 57) {
    event.preventDefault();
  }
}
