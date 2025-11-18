function anadirAnimal() {

  //cojo la lista
  var lista = document.getElementById("listaAnimales");

  //creo nuevo elemento en la lista
  var nuevo = document.createElement("li");

  //añado el contenido
  nuevo.textContent = "animal añadido";

  //añado el elemento
  lista.appendChild(nuevo);
}

function insertarAnimal() {

  //cojo la lista
  var lista = document.getElementById("listaAnimales");

  //cojo el primer elemento de tipo li
  var primero = lista.getElementsByTagName("li")[1];

  //creo nuevo elemento en la lista
  var nuevo = document.createElement("li");

  //añado el contenido
  nuevo.textContent = "animal insertado";

  //lo añado después de el primer elemento en la lista
  lista.insertBefore(nuevo, primero);
}

function reemplazarAnimal() {
  //cojo la lista
  var lista = document.getElementById("listaAnimales");

  //cojo el segundo elemento de tipo li
  var segundo = lista.getElementsByTagName("li")[1];

  //si existe un segundo elemento lo reemplazo
  if (segundo) {
    //cojo la lista
    var nuevo = document.createElement("li");

    //cambio el contenido
    nuevo.textContent = "animal reemplazado";

    //lo reemplazo
    lista.replaceChild(nuevo, segundo);
  } else {
    //en el caso de que no haya segundo elemento
    alert("No hay segundo elemento para reemplazar");
  }
}

function borrarAnimal() {
  //cojo la lista
  var lista = document.getElementById("listaAnimales");

  //cojo el segundo elemento de tipo li
  var segundo = lista.getElementsByTagName("li")[1];

  //si existe un segundo elemento lo borro
  if (segundo) {
    lista.removeChild(segundo);
  } else {
    //en el caso de que no haya segundo elemento-
    alert("No hay elemento que borrar");
  }
}

function clonarLista() {
  var lista = document.getElementById("listaAnimales");

  // Lo clono y copio el contenido con true
  var clon = lista.cloneNode(true);

  // Lo añado
  document.body.appendChild(clon);
}

function sublistaDOM() {
  var lista = document.getElementById("listaAnimales");

  //le digo que en león cojo la primera posición
  var leon = lista.getElementsByTagName("li")[0];

  // Creo la nueva lista desordenada
  var sublista = document.createElement("ul");

  // Añado contenido en la lista
  var criaLeon = document.createElement("li");
  criaLeon.textContent = "criaLeon";

  //Lo inserto
  sublista.appendChild(criaLeon);

  //Añado otro elemento en la lista
  var criaLeon2 = document.createElement("li");
  criaLeon2.textContent = "criaLeon 2";

  // Lo inserto
  sublista.appendChild(criaLeon2);

  // Meto la sublista dentro de leon
  leon.appendChild(sublista);
}


function sublistaInnerHTML() {
  var lista = document.getElementById("listaAnimales");

  //le digo que en león cojo la primera posición
  var leon = lista.getElementsByTagName("li")[0];

  // Inserto directamente el HTML de la sublista
  leon.innerHTML += "<ul><li>criaLeon 3</li><li>criaLeon 4</li></ul>";
}
