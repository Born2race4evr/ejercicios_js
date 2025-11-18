function numEnlaces() {
  //cojo los enlaces
  var enlaces = document.getElementsByTagName("a");

  //referencio el div y lo imprimo con InnerHTML
  document.getElementById("resultado").innerHTML = "Hay: " + enlaces.length + " Enlaces";
}

function refEnlaces() {
  //cojo los enlaces
  var enlaces = document.getElementsByTagName("a");

  //Introduzco texto para luego almacenar los sources
  var texto = "Referencias enlaces:<br>";

  //Recorro los enlaces y le digo que de cada 1 quiero el contenido del
  //href y lo almaceno el la variable del texto
  for (var i = 0; i < enlaces.length; i++) {
    texto += enlaces[i].href + "<br>";
  }
  //referencio el div y lo imprimo con InnerHTML
  document.getElementById("resultado").innerHTML = texto;
}

function refPorParrafo() {
  //cojo los enlaces
  var parrafos = document.getElementsByTagName("p");

  //Hago una variable para luego almacenar los sources
  var texto = "";

  //Hago un recorrido que cojerá los enlaces e indicará el número del
  //parrafo del que voy a extraer la info

  //Recorro los enlaces y le digo que de cada 1 quiero el contenido del
  //href y lo almaceno el la variable del texto
  for (var i = 0; i < parrafos.length; i++) {
    var enlaces = parrafos[i].getElementsByTagName("a");
    texto += "Parrafo " + (i + 1) + ":<br>";
    for (var j = 0; j < enlaces.length; j++) {
      texto += enlaces[j].href + "<br>";
    }
  }
  //referencio el div y lo imprimo con InnerHTML
  document.getElementById("resultado").innerHTML = texto;
}
