function botonRectangular(x, y, tamX, tamY) {
  fill(0); 
  noStroke();
  rect(x, y, tamX, tamY);
}

function dibujarPantalla(pantalla) {
  tint(255);
  background(255);
  image(imagenes[fondos[pantalla]], 0, 0, 640, 480); 

 
  fill(0);
  noStroke();
  rect(0, 360, width, 150);

  fill(255); 
  textAlign(CENTER);
  textSize(20);
  text(textos[pantalla], width / 2, 400); 

 
  for (let i = 0; i < opciones[pantalla].length; i++) {
    let opcion = opciones[pantalla][i];
    botonRectangular(opcion[1], opcion[2], opcion[3], opcion[4]); 

    fill(255); 
    textSize(18);
    text(opcion[0], opcion[1] + opcion[3] / 2, opcion[2] + opcion[4] / 2 + 6);
  }
}
