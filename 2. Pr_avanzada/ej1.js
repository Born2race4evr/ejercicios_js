var precio_ini = parseInt(prompt("Introduce el precio del artículo"));


function precio_final(precio_ini) {
  var por_iva = precio_ini * 0.21;

  var precioConIva = (precio_ini + por_iva).toFixed(2);

  return precioConIva;
}

var total = precio_final(precio_ini);

alert("El precio total es " + total);
