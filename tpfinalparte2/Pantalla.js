class Pantalla {
  constructor() {
    this.leon = new Leon();
    this.misil = [];
    this.ciudades = [new Ciudad(100), new Ciudad(300), new Ciudad(500)];
    this.generarMisil();
  }

  dibujar() {
    this.leon.dibujar();

    for (let i = this.misils.length - 1; i >= 0; i--) {
      this.misils[i].Motion();
      this.misils[i].dibujar();

      if (
        this.leon.haDisparado() &&
        this.leon.misil.haImpactado(this.misils[i])
      ) {
        this.misils.splice(i, 1); 
        this.leon.misilDisparado = false; 
      }

      for (let ciudad of this.ciudades) {
        if (!ciudad.destruida && this.misils[i].haImpactado(ciudad)) {
          ciudad.destruir();
          this.misils.splice(i, 1); 
          break;
        }
      }
    }

    for (let ciudad of this.ciudades) {
      ciudad.dibujar();
    }
  }

  teclaPresionada() {
    this.leon.teclaPresionada();
  }

 generarMisil() {
    setInterval(() => {
      if (this.misils.length < 10) {
        this.misils.push(new misilmisil());
      }
    }, 2000);
  }
}
