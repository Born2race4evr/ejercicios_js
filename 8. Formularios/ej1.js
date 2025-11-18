window.onload = function() {
  document.getElementById("nombre").focus();
};

function mostrarInfoLista() {
  var lista = document.getElementById("aficiones");
  var longitud = lista.options.length;
  var indice = lista.selectedIndex;
  var valor = lista.options[indice].value;

  alert(
    "La longitud de la lista es " + longitud + "\n" +
    "El índice seleccionado es " + indice + "\n" +
    "El valor del índice seleccionado es " + valor
  );
}

document.getElementById("observaciones").addEventListener("keydown", function(e){
  if (this.value.length >= 150 && e.key !== "backspace") {
    e.preventDefault();
  }
});

function validarFormulario() {

  var dni = document.getElementById("dni").value;
  var telefono = document.getElementById("telefono").value;
  var mensaje = document.getElementById("mensaje").value;

  if (dni === "") {
    alert(" El campo DNI es obligatorio");
    return false;
  }

  let rTelefono = /^\d{9}$/;
  if (!rTelefono.test(telefono)) {
    alert( "El teléfono debe tener 9 dígitos consecutivos sin espacios ni guiones.");
    return false;
  }

  mensaje.textContent = "";
  alert("Formulario enviado correctamente.");
  return true;
}