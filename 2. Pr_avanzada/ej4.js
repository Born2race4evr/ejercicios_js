if(navigator.platform === "Internet explorer"){
  //document.write(<body onresize={500}></body>);
  window.resizeTo(500, 500);

} else {
  alert("Operación no permitida con este navegador");
}