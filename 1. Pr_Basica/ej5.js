var precio_ini = parseInt(prompt("Introduce el precio del artículo"));

var por_iva = precio_ini * 0.21;

var precioConIva = (precio_ini + por_iva).toFixed(2);

alert("El precio total es " + precioConIva);
