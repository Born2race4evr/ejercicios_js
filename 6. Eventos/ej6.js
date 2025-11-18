window.onload = function() {
  // Selecciono todos los botones de la página
  const botones = document.querySelectorAll("button");

  // Recorro los botones
  for (let i = 0; i < botones.length; i++) {
    // A cada uno les añado la función
    botones[i].onclick = function() {
      alert("Has pulsado sobre un botón");
    };
  }
  //otra manera con foreach
  /*botones.forEach(boton => {
    boton.addEventListener("click", function() {
      alert("Has pulsado sobre un botón");
    });
  });*/
};
