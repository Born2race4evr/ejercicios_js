var txt = document.getElementById("nums")

function sumar() {
  var valor = parseInt(txt.value)
  txt.value = valor + 10
}

function inicializar() {
  txt.value = 0
}