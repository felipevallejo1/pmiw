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
  image(obra, 0,0);
}

function mouseDragged() {
  ultimaPosicion = mouseX;
}

function keyPressed() {
  if (keyCode === 82) { // 'r' 
    background(10);
    stroke(0, 255, 0);
    ultimaPosicion = 0;
  }
  if (keyCode === 32) { // Espaciadora
    mapeado = map(0, 0, 600, 0, 255);
    stroke(0, random(170, 255), random(170, 255));
  }
}
