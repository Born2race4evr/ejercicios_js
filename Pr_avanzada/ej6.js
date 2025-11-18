function mostrarHoras() {

  var fecha = new Date();

  var hora = fecha.getHours();

  var min = fecha.getMinutes();

  var minsDoble = String(min).padStart(2, '0');

  var saludo;

  if (hora > 6 && hora < 14) {
    saludo = "Buenos días";
  } else if (hora < 20) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }
  var mensaje = saludo + ", son las " + hora + ":" + minsDoble + " horas";

  document.getElementById("resultado").textContent = mensaje;
}

