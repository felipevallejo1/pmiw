function botonRectangular(x, y, tamX, tamY) {
  fill(0);  // Fondo negro para el botón
  noStroke();
  rect(x, y, tamX, tamY);  // Dibuja el rectángulo
}

function dibujarPantalla(pantalla) {
  var pantallaActual = pantallas[pantalla];
  tint(255);
  background(255);
  image(imagenes[pantallaActual.fondo], 0, 0, 640, 480);

  // Caja negra para el texto de la pantalla
  fill(0);  // Fondo negro para el texto explicativo
  noStroke();
  rect(0, 360, width, 150);  // Dibuja una caja negra para el texto explicativo

  fill(255);  // Texto blanco
  textAlign(CENTER);
  textSize(20);
  text(pantallaActual.texto, width / 2,400);  // Dibuja el texto dentro de la caja negra

  // Dibujar los botones con las opciones
  for (var i = 0; i < pantallaActual.opciones.length; i++) {
    var opcion = pantallaActual.opciones[i];
    botonRectangular(opcion.x, opcion.y, opcion.ancho, opcion.alto);  // Dibuja el botón debajo del texto

    fill(255);  // Texto blanco para las opciones
    textSize(18);
    text(opcion.texto, opcion.x + opcion.ancho / 2, opcion.y + opcion.alto / 2); // Dibuja el texto centrado sobre el botón
  }
}
