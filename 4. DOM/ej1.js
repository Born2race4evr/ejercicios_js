function anadirParrafo() {
  var div = document.getElementById("divisor");

  // Creo un nuevo elemento <p>
  var nuevo = document.createElement("p");

  // Le añado texto
  nuevo.textContent = "Párrafo añadido";

  // Lo añado a la página
  div.appendChild(nuevo);
}

function insertarParrafo() {
  var div = document.getElementById("divisor");

  // Selecciono el primer párrafo
  var primero = div.getElementsByTagName("p")[1];

  // Lo creo
  var nuevo = document.createElement("p");
  nuevo.textContent = "Párrafo insertado";

  // Inserto después del primero
  div.insertBefore(nuevo, primero);

}

function reemplazarParrafo() {
  var div = document.getElementById("divisor");

  // Cojo el segundo párrafo
  var segundo = div.getElementsByTagName("p")[1];

  // Si existe el segundo párrafo
  if (segundo) {
    // Creo el párrafo y añado el contenido
    var nuevo = document.createElement("p");
    nuevo.textContent = "Párrafo reemplazado";

    // Sustituyo el párrafo
    div.replaceChild(nuevo, segundo);

    //si no hay segundo párrafo  saca la alerta
  } else {
    alert("No hay segundo párrafo para reemplazar");
  }
}

function borrarParrafo() {
  var div = document.getElementById("divisor");

  // Cojo el segundo párrafo
  var segundo = div.getElementsByTagName("p")[1];

  // Si existe, lo borro
  if (segundo) {
    div.removeChild(segundo);
    // Si no saca la alerta
  } else {
    alert("No hay párrafo que borrar");
  }
}

function clonarDiv() {
  var div = document.getElementById("divisor");

  // Lo clono y copio el contenido con true
  var clon = div.cloneNode(true);

  // Lo añado
  document.body.appendChild(clon);
}
