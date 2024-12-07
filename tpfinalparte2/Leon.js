class Leon {
  constructor() {
    this.posX = 50;
    this.foto = loadImage("data/Leon.png");
    this.posY = height - 50; 
    this.vel = 8;
    this.anchura = 60;
    this.altura = 80;
    this.proyectiles = [];
    this.municion = 10; 
    this.capacidadMunicion = 10; 
  }

  cambioPantalla() {
    this.Motion();
    this.dibujar();
    this.estadoProyectiles();
  }

  Motion() {
    if (keyIsPressed) {
      if (keyCode === UP_ARROW && this.posY > 0) {
        this.posY -= this.vel;
      } else if (keyCode === DOWN_ARROW && this.posY < height - this.altura) {
        this.posY += this.vel;
      }
    }
  }

  disparar() {
    if (this.municion > 0) { 
      this.proyectiles.push(new Proyectil(this.posX + this.anchura, this.posY + this.altura / 2));
      this.municion--;
     }
    
  }

  recargar() {
    this.municion = this.capacidadMunicion; 
    
  }

  estadoProyectiles() {
    for (let i = this.proyectiles.length - 1; i >= 0; i--) {
      let leon = this.proyectiles[i];
      leon.cambioPantalla();
      if (leon.posX > width) {
        this.proyectiles.splice(i, 1); 
      }
    }
  }

  dibujar() {
    push();
    translate(this.posX, this.posY);
    image(this.foto, -40, 0, this.anchura, this.altura);
    pop();
  }
}
