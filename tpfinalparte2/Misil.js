class Misil {
  constructor(velocidad) {
    this.posicionMisil();
    this.lado = 80;
    this.velocidad = velocidad;
    this.img = loadImage("data/misil.png");
  }

  cambioPantalla(vel) {
    this.Motion(vel);
    this.dibujar();
  }

  Motion(vel) {
    this.y += vel + 0.5;
    if (this.y > height + 150) {
      this.posicionMisil();
    }
  }

  dibujar() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.img, 0, 0, this.lado, this.lado);
    pop();
  }

  posicionMisil() {
    this.x = random(100, width - 100);
    this.y = -150 - random(100, 400);
 
  }

  sistemaColision(x, y) {
    return dist(this.x, this.y, x, y) < this.lado / 2;
  }
}
