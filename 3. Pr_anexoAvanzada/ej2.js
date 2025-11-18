function txtVacio() {
  var dni = document.getElementById("dni").value;

  if (dni === "") {
    alert("Es necesario introducir la informacion requerida")
    return false;
  }

    return true;
}