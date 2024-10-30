// Felipe Vallejo 88164/7 Video: https://youtu.be/Ev8vjUcegPI  Comision 5 
let obra;
let mapeado;
let ultimaPosicion = 0;

function preload() {
  obra = loadImage("data/imagenAO.jpg");
}

function setup() {
  createCanvas(800, 400);
  stroke(0, 255, 0);
}

function draw() {
  background(10);
  
  let brillo = calcularBrillo(mouseY);
  tint(brillo); 

  for (let valor = 400; valor < 800; valor += 16) {
    mapeado = map(valor, 400, 800, 0, 12);

    if (valor <= ultimaPosicion) {
      strokeWeight(mapeado);
    } else {
      strokeWeight(1);
    }

    line(valor, 0, valor, 400);

    if (ultimaPosicion > 0) {
      for (let y = 0; y < 400; y += 16) {
        line(400, y, 800, y);
      }
    }
  }
  image(obra, 0, 0);
}


function cambiarColorAleatorio(minimo, maximo) {
  let r = 0;
  let g = random(minimo, maximo);
  let b = random(minimo, maximo);
  stroke(r, g, b);
}

function calcularBrillo(posicionY) {
  
return map(posicionY, 0, height, 50, 255);
}

function mouseDragged() {
  ultimaPosicion = mouseX;
}

function keyPressed() {
  if (keyCode === 82) { // Tecla R
    background(10);
    stroke(0, 255, 0);
    ultimaPosicion = 0;
  }
  if (keyCode === 32) { // Barra espaciadora
    mapeado = map(0, 0, 600, 0, 255);
    cambiarColorAleatorio(170, 255); // Cambia a un color aleatorio dentro de los rangos que uno le pasa
  }
}
