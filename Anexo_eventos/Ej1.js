window.onload = function() {
  var formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", function(evento) {
    var texto1 = document.getElementById("campo1").value;
    var texto2 = document.getElementById("campo2").value;
    var texto3 = document.getElementById("campo3").value;

    if (texto1 === "" || texto2 === "" || texto3 === "") {
      alert("Envío cancelado: hay campos vacíos");
      evento.preventDefault();
    } else {
      alert("Formulario enviado correctamente");
    }
  });
};
