class BotonInicio {
  constructor(mensaje, posX, posY, anchura, altura) {
    this.msj = mensaje;
    this.anchura = anchura;
    this.altura = altura;
    this.posX = posX;
    this.posY = posY;
    
  }

  cambioPantalla() {
    push();
    translate(this.posX, this.posY);
    fill(255,0,0);
    rectMode(CENTER);
    rect(0, 0, this.anchura, this.altura, 5);
    fill(255);
    textAlign(CENTER, CENTER);
    text(this.msj,0,0);
    pop();
  }

 sistemaColision() {
    return mouseX > this.posX - this.anchura / 2 &&
      mouseX < this.posX + this.anchura / 2 &&
      mouseY > this.posY - this.altura / 2 &&
      mouseY < this.posY + this.altura / 2;
  }
}
