function aplicarEstilos() {
  var negrita = document.getElementById('negrita').checked;
  var cursiva = document.getElementById('cursiva').checked;
  var texto = document.getElementById('texto');

  texto.style.fontWeight = negrita ? 'bold' : 'normal';
  texto.style.fontStyle = cursiva ? 'italic' : 'normal';
}
