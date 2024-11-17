class Ciudad {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.anchura = 80;
    this.altura = 50;
    this.viva = true;  
    this.foto = loadImage("data/Ciudad.png"); 
  }

 
  dibujar() {
    if (this.viva) {
      push();
      image(this.foto, this.x, this.y, this.anchura, this.altura);
      pop();
    }
  }

 
  colisiona(Misil) {
    return Misil.x > this.x - this.anchura / 2 &&
           Misil.x < this.x + this.anchura / 2 &&
           Misil.y > this.y - this.altura / 2 &&
           Misil.y < this.y + this.altura / 2;
  }

  
  recibirMisil() {
    this.viva = false;  
  }
}
