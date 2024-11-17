class Proyectil {
  constructor(posX, posY) {
    this.posX = posX; 
    this.posY = posY; 
    this.vel = 10;
    this.anchura = 30; 
    this.altura = 10;  
    this.foto = loadImage("data/Bala.png");
  }

  cambioPantalla() {
    this.posX += this.vel; 
    this.dibujar();     
  }

  dibujar() {
    push();
    if (this.foto) {
      image(this.foto, this.posX, this.posY - this.altura / 2, this.anchura, this.altura); 
    }
    pop();
  }
}
