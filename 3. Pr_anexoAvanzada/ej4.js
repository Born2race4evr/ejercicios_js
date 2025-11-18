function adivino() {
  var txt = document.getElementById("num")
  var valor = parseInt(txt.value)

  var random = Math.floor(Math.random() * 10) + 1
  if (valor == random) {
    alert("enhorabuena has acertado")
  } else {
    alert("lástima has fallado")
  }
}