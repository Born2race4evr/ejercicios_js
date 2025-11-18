window.onload = function() {
  var enlace = document.getElementById("link");

  enlace.onclick = function(event) {
    event.preventDefault();
    alert("Navegación cancelada");
  };
};
