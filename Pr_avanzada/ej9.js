function abreCierra(){
  var ventana = window.open("","ventanaSec", "width=800,height=600");

  ventana.document.write(`
    <html>
      <head><title>Ventana2</title></head>
      <body>
        <button onclick="window.close()">Cerrar</button>
      </body>
    </html>
  `);
}