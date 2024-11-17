class Juego {
  constructor() {
    this.iniciar();
    this.foto = loadImage("data/fondoInicio.png");
  }

  iniciar() {
    this.pantallaActual = "inicio";
    this.leon = new Leon();
    this.botonInicio = new BotonInicio("INICIAR", width / 2, height -80, 120, 40);
    
    this.misiles = [];
    this.cant = 6;
    this.velocidad = 0.1;
    this.ciudades = [];
    for (let i = 0; i < 4; i++) {
      let x = 100 + i * 150;
      let y = height - 60;
      this.ciudades.push(new Ciudad(x, y));
    }
    for (let i = 0; i < this.cant; i++) {
      this.misiles[i] = new Misil(this.velocidad);
    }
  }

  cambioPantalla() {
    if (this.pantallaActual === "inicio") {
      this.pantallaInicio();
    } else if (this.pantallaActual === "Juego") {
      this.pantallaJugando();
    } else if (this.pantallaActual === "derrota") {
      this.pantallaDerrota();
    } else if (this.pantallaActual === "victoria") {
      this.pantallaVictoria();
    } else if (this.pantallaActual === "creditos") {
      this.pantallaCreditos();
    }
  }

  pantallaInicio() {
    push();
    background(this.foto);

   
    fill(0, 0, 0, 150);
    rectMode(CORNER);
    rect(width / 2 - 180, height / 4 - 30, 360, 60);

    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("INSTRUCCIONES", width / 2, height / 4);

    fill(0, 0, 0, 150);
    rect(width / 2 - 210, height / 4 + 40, 420, 150);

    fill(255);
    textSize(16);
    textAlign(CENTER, TOP);
    text("Debes proteger las ciudades del ataque de los enemigos.\n Si dejas que un enemigo toque las ciudades, \nle habrás fallado a todos los que confían en ti, \n y perderás el juego. Se dispara con la tecla ENTER, \ntienes 10 balas y recargas con la tecla R. Para moverte, \ndebes usar las flechas -arriba- y -abajo-", width / 2, height / 4 + 50); // Ajuste con salturas de línea

   
    this.botonInicio.cambioPantalla();
    pop();
  }

  pantallaJugando() {
    if (play == false) {
      musica.loop();
      play = true;
    }
    image(this.foto, 0, 0, width, height);
    this.velocidad = 0.5;

    
    push();
    fill(255);
    textSize(24);
    textAlign(RIGHT, TOP);
    text(`Munición: ${this.leon.municion} `, width - 20, 20);
    pop();

 
    for (let i = this.misiles.length - 1; i >= 0; i--) {
      let Misil = this.misiles[i];
      Misil.cambioPantalla(this.velocidad);
      for (let j = this.leon.proyectiles.length - 1; j >= 0; j--) {
        let leon = this.leon.proyectiles[j];
        if (dist(Misil.x, Misil.y, leon.posX, leon.posY) < Misil.lado / 2) {
          this.misiles.splice(i, 1);
          this.leon.proyectiles.splice(j, 1);
          this.cant--;
          break;
        }
      }
    }

    this.leon.cambioPantalla();

    
    for (let i = 0; i < this.misiles.length; i++) {
      if (this.misiles[i].sistemaColision(this.leon.posX, this.leon.posY)) {
        this.pantallaActual = "derrota";
        break;
      }
    }
    if (this.cant == 0) {
      this.pantallaActual = "victoria";
    }
 
    for (let i = this.ciudades.length - 1; i >= 0; i--) {
      let ciudad = this.ciudades[i];
      ciudad.dibujar();

      
      for (let j = this.misiles.length - 1; j >= 0; j--) {
        let Misil = this.misiles[j];
        if (ciudad.colisiona(Misil)) {
          ciudad.recibirMisil(); 
          this.misiles.splice(j, 1); 
          this.cant--;
       
          this.ciudades.splice(i, 1);

          if (this.ciudades.length === 3) {
            this.pantallaActual = "derrota";
          }
          break;
        }
      }
    }
  }

  pantallaDerrota() {
    background(255, 0, 0);


    push();
    fill(255);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("¡Perdiste!", width / 2, height / 2 - 100);
    pop();

    push();
    fill(0);
    rectMode(CENTER);
    rect(width / 2, height / 2, 200, 50);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Menú Principal", width / 2, height / 2 + 8);
    pop();
    push();
    fill(0);
    rectMode(CENTER);
    rect(width / 2, height / 2 + 80, 200, 50);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Créditos", width / 2, height / 2 + 88);
    pop();
  }
  pantallaVictoria() {
    background(0, 255, 0);


    push();
    fill(255);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("¡Ganaste!", width / 2, height / 2 - 100);
    pop();

    push();
    fill(0);
    rectMode(CENTER);
    rect(width / 2, height / 2, 200, 50);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Menú Principal", width / 2, height / 2 + 8);
    pop();
    push();
    fill(0);
    rectMode(CENTER);
    rect(width / 2, height / 2 + 80, 200, 50);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Créditos", width / 2, height / 2 + 88);
    pop();
  }

  pantallaCreditos() {
    background(50);

    // Título
    push();
    fill(255);
    textSize(36);
    textAlign(CENTER, CENTER);
    text("Créditos", width / 2, height / 2 - 150);
    pop();

    push();
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Programado por:", width / 2, height / 2 - 50);
    textAlign(CENTER, CENTER);
    text("Felipe Vallejo y Luciano Testa", width / 2, height / 2);
    pop();

    push();
    fill(0);
    rectMode(CENTER);
    rect(width / 2, height / 2 + 100, 200, 50);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Menú Principal", width / 2, height / 2 + 99);
    pop();
  }
  mousePressed() {
    if (this.pantallaActual === "inicio") {
      if (this.botonInicio.sistemaColision()) {
        this.iniciar();
        this.pantallaActual = "Juego";
      }
    } else if (this.pantallaActual === "derrota") {
      if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100) {
        if (mouseY > height / 2 - 25 && mouseY < height / 2 + 25) {
          this.pantallaActual = "inicio"; // Volver al menú principal
        } else if (mouseY > height / 2 + 55 && mouseY < height / 2 + 105) {
          this.pantallaActual = "creditos"; // Ir a los créditos
        }
      }
    } else if (this.pantallaActual === "creditos") {
      if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
        mouseY > height / 2 + 75 && mouseY < height / 2 + 125) {
        this.pantallaActual = "inicio"; // Volver al menú principal
        reiniciarJuego();
      }
    } else if (this.pantallaActual === "fin") {
      if (this.botonReinicio.colision()) {
        this.iniciar();
        this.pantallaActual = "Juego";
      }
    }
  }
}
