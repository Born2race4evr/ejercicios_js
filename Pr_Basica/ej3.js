var mes = prompt("Introduce un mes del año")

switch (mes){
  case "enero" : case "febrero" : case "diciembre":
    alert("estamos en invierno");
    break;
  case "marzo" : case "abril" : case "mayo":
    alert("estamos en primavera");
    break;
  case "junio" : case "julio" : case "agosto":
    alert("estamos en verano");
    break;
  case "septiembre" : case "octubre" : case "noviembre":
    alert("estamos en otoño");
    break;
    default:
      alert("no existe este mes");
      break;
}