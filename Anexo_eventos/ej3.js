window.onload = function() {
  var caja = document.getElementById("caja");
  var boton = document.getElementById("boton");

  caja.onclick = function() {
    alert("Has hecho clic en el div");
  };

  boton.onclick = function(event) {
    event.stopPropagation();
    alert("Has hecho clic en el botón");
  };
};
