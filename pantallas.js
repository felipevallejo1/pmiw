function actualizarPantallas(_pantalla, _camino) {
  if (_pantalla == 0) {
    if (_camino) { // Jugar
      pantalla = 1;
    } else { // Creditos
      pantalla = 14;
    }
  }
  
  if (_pantalla == 1) {
    if (_camino) {
      pantalla = 2;
    }
  }
  
  if (_pantalla == 2) {
    if (_camino) {
      pantalla = 3;
    } else {
      pantalla = 4;
    }
  }
  
  if (_pantalla == 4) {
    if (_camino) {
      pantalla = 5;
    }
  }
  
  if (_pantalla == 5) {
    if (_camino) {
      pantalla = 6;
    } else {
      pantalla = 10;
    }
  }
  
  if (_pantalla == 6) {
    if (_camino) {
      pantalla = 7;
    }
  }
  
  if (_pantalla == 7) {
    if (_camino) {
      pantalla = 8;
    }
  }
  
  if (_pantalla == 8) {
    if (_camino) {
      pantalla = 9;
    }
  }
  
  if (_pantalla == 10) {
    if (_camino) { // Jugar
      pantalla = 11;
    }
  }
  
  if (_pantalla == 11) {
    if (_camino) {
      pantalla = 12;
    }
  }
  
  if (_pantalla == 12) {
    if (_camino) {
      pantalla = 13;
    } else {
      pantalla = 8;
    }
  }
  
  if (_pantalla == 13) {
    if (_camino) {
      pantalla = 14;
    }
  }
  
  if (_pantalla == 3) {
    if (_camino) {
      pantalla = 0;
    }
  }
  
  if (_pantalla == 9) {
    if (_camino) {
      pantalla = 0;
    }
  }
  
  if (_pantalla == 14) {
    if (_camino) {
      pantalla = 0;
    }
  }
}

// Contenido de las pantallas
function dibujarPantallas(pantalla) {

  // Menú de inicio
  if (pantalla == 0) {
    fill(255);
    tint(150, 150);
    image(imagenes[1], 0, 0, 640, 480);
    textAlign(CENTER);
    textSize(65);
    text("Resident Evil", width / 2, height / 2);

    textSize(35);
    text("JUGAR", width / 2, 300);

    textSize(25);
    text("CREDITOS", width / 2, 350);

    fill(0, 0, 0, 0);
    noStroke();
    botonRectangular(320 - 60, 280, 120, 40, 0);

    fill(0, 0, 0, 0);
    noStroke();
    botonRectangular(320 - 60, 330, 120, 40, 1);
  }
  // Pantalla 1: Llega Leon
  else if (pantalla == 1) {
    tint(255, 255);
    background(255);
    image(imagenes[2], 0, 0, 640, 480);
    fill(0);
    rect(0, 355, 800, 600);
    fill(255);
    textSize(25);
    text("Llegas a la ciudad infestada y frena a cargar gasolina", 315, 380);
    text("CONTINUAR", 560, 460);
    botonRectangular(460, 440, 200, 40, 0);
  }
  
  // Pantalla 2: Gasolinera
  if (pantalla == 2) {
    tint(255, 255);
    background(255);
    image(imagenes[3], 0, 0, 640, 480);
    fill(0);
    stroke(0);
    rect(0, 355, 800, 600);
    fill(255);
    text("Escuchas un rudio extraño dentro de la tienda", 300, 380);

    strokeWeight(2);
    fill(0, 0, 0, 0);
    stroke(255);
    rect(100, 505, 200, 65);
    fill(255);
    text("Entrar a revisar", 140, 433);
    botonRectangular(40, 413, 200, 40, 0);

    fill(0, 0, 0, 0);
    stroke(255);
    rect(400, 505, 250, 65);
    fill(255);
    text("Ignorarlo e irse", 433, 433);
    botonRectangular(333, 413, 200, 40, 1);
  }
  
  // Pantalla 3: Entrar a Revisar
  if (pantalla == 3) {
    tint(255, 255);
    background(255);
    image(imagenes[4], 0, 0, 640, 480);
    fill(0);
    stroke(0);
    rect(0, 355, 800, 600);
    fill(255);
    textSize(20);
    text("Al entrar, escuchas un ruido en la maquina registradora, \ndonde un zombie se abalanza sobre ti, y mueres.", 300, 380);
    text("MENÚ", 80, 470);
    botonRectangular(80, 450, 80, 30, 0);
  }

  // Pantalla 4: Ignorarlo
  if (pantalla == 4) {
    tint(255, 255);
    background(255);
    image(imagenes[6], 0, 0);
    fill(0);
    stroke(0);
    rect(0, 355, 800, 600);
    fill(255);
    textSize(20);
    text("Terminas de cargar gasolina y te diriges \nal centro de policía para reunirte con tus compañeros", 300, 380);
    text("CONTINUAR", 560, 460);
    botonRectangular(433, 413, 200, 40, 0);
  }

  // Pantalla 5: Llegas a la central
  if (pantalla == 5) {
    tint(255, 255);
    background(255);
    image(imagenes[7], 0, 0, 640, 480);
    fill(0);
    stroke(0);
    rect(0, 355, 800, 600);
    fill(255);
    text("Apenas llegas ves la puerta principal bloqueada", width / 2, 380);
    fill(255);
    strokeWeight(2);
    fill(0, 0, 0, 0);
    stroke(255);
    text("Buscar la llave en el cuartel", 170, 433);
    botonRectangular(40, 413, 200, 40, 1);

    fill(0, 0, 0, 0);
    stroke(255);
    rect(400, 505, 250, 65);
    fill(255);
    text("Entrar por el fondo", 453, 433);
    botonRectangular(333, 413, 200, 40, 0);
  }

  // Pantalla 6: Vas por el fondo
  if (pantalla == 6) {
    tint(255, 255);
    background(255);
    image(imagenes[8], 0, 0, 640, 480);
    fill(0);
    stroke(0);
    rect(0, 355, 800, 600);
    fill(255);
    textSize(18);
    text("Para llegar a la central, debes pasar por la zona forense, que está infestada", width / 2, 400);
    text("CONTINUAR", 560, 460);
    botonRectangular(560, 440, 120, 30, 0);
  }

  // Pantalla 7: Forense
  if (pantalla == 7) {
    tint(255, 255);
    background(255);
    image(imagenes[13], 0, 0, 640, 480);
    fill(0);
    stroke(0);
    rect(0, 355, 800, 600);
    fill(255);
    text("Al haber tantos, disparar no tendria sentido, asi que pasas corriendo", width / 2, 400);
    text("CONTINUAR", 560, 460);
    //botonRectangular(333, 413, 200, 40, 0);
    botonRectangular(560, 440, 120, 30, 0);
  }

  // Pantalla 8: Yendo a la central
if (pantalla == 8) {
  tint(255, 255);
  background(255);
  image(imagenes[14], 0, 0, 640, 480);
  fill(0);
  stroke(0);
  rect(0, 355, 800, 600);
  fill(255);
  textAlign(CENTER);
  textSize(18);
  text("Llegas al Centro Policial y tus compañeros coinciden en \n que lo mejor es abandonar la ciudad y juntarse con las fuerzas armadas", width / 2, 380);
  text("FIN", 600, 460);
  botonRectangular(560, 440, 120, 30, 0);
}

// Pantalla 9: Fin
if (pantalla == 9) {
  tint(255, 255);
  background(255);
  image(imagenes[6], 0, 0, 640, 480);
  fill(0);
  stroke(0);
  rect(0, 355, 800, 600);
  fill(255);
  textAlign(CENTER);
  text("Tu y tus compañeros abandonan la ciudad infestada. Has Escapado.", width / 2, 380);
  text("MENÚ", 600, 460);
  botonRectangular(560, 440, 120, 30, 0);
}

// Pantalla Alertar Zombies
if (pantalla == 10) {
  tint(255, 255);
  background(255);
  image(imagenes[9], 0, 0, 640, 480);
  fill(0);
  stroke(0);
  rect(0, 355, 800, 600);
  fill(255);
  textAlign(CENTER);
  text("Por suerte, la llave se encontraba allí, \n pero has hecho ruido y alertado a un par de zombies", width / 2, 380);
  text("Siguiente", 580, 460);
  botonRectangular(540, 440, 200, 40, 0);
}

// Pantalla 11: Patio
if (pantalla == 11) {
  tint(255, 255);
  background(255);
  image(imagenes[10], 0, 0, 640, 480);
  fill(0);
  stroke(0);
  rect(0, 355, 800, 600);
  fill(255);
  textAlign(CENTER);
  text("Tras dispararle a dos y escapar de los otros, \n tuviste que desviarte y acabaste en el patio de la casa de en frente", width / 2, 400);
  text("CONTINUAR", 575, 460);
  botonRectangular(560, 440, 120, 30, 0);
}

// Pantalla 12: Niña Arbol
if (pantalla == 12) {
  tint(255, 255);
  background(255);
  image(imagenes[11], 0, 0, 640, 480);
  fill(0);
  stroke(0);
  rect(0, 305, 800, 600);
  fill(255);
  textAlign(CENTER);
  text("Allí, ves a una niña atrapada en un árbol, \n con zombies intentando atacarla", width / 2, 350);
  strokeWeight(2);
  fill(0, 0, 0, 0);
   stroke(255);
  text("Ayudarla", 140, 433);
  botonRectangular(40, 413, 200, 40, 0);

  fill(0, 0, 0, 0);
  stroke(255);
  rect(400, 505, 250, 65);
  fill(255);
  text("Dirigirse a la central", 433, 433);
  botonRectangular(333, 413, 200, 40, 1);
}

// Pantalla 14: Ayudarla
if (pantalla == 13) {
  tint(255, 255);
  background(255);
  image(imagenes[12], 0, 0, 640, 480);
  fill(0);
  stroke(0);
  rect(0, 355, 800, 600);
  fill(255);
  textAlign(CENTER);
  textSize(18);
  text("Disparaste a los zombies, pero los disparos atrayeron muchos más zombies,\n y quedaste rodeado en la casa, ambos morirán.", width / 2, 400);
  text("CREDITOS", 600, 460);
  botonRectangular(560, 440, 120, 30, 0);
}

// Pantalla de créditos
if (pantalla == 14) {
  tint(100, 100);
  background(0);
  image(imagenes[0], 0, 0, 640, 480);
  fill(255);
  textSize(35);
  textAlign(CENTER);
  text("Resident Evil", width / 2, 150);
  textSize(30);
  text("Programado por Luciano Testa y Felipe Vallejo", width / 2, 250);
  text("Escrito por Luciano Testa y Felipe Vallejo", width / 2, 300);
  text("Autor: Shinji Mikami", width / 2, 340);
  textSize(30);
  text("Volver al Menú", 100, 470);
  botonRectangular(0, 450, 200, 40, 0);
}
}
