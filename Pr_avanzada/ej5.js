function mostrarFecha() {

  var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  var fecha = new Date();

  var ano = fecha.getFullYear();

  var mes = meses[fecha.getMonth()];

  var diaMes = fecha.getDate();

  var diaSemana = dias[fecha.getDay()];

  var fechaEnTexto = diaSemana + ", " + diaMes + " de " + mes + " de " + ano;

  document.getElementById("resultado").textContent = fechaEnTexto;
}

