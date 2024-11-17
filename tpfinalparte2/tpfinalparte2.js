// Felipe Vallejo legajo 88164/7 video youtube  https://youtu.be/8UeaWlfam-c

let juego;
let musica;
let play = false;

function preload() {
  soundFormats('mp3');
  musica = loadSound('data/musica_fondo.mp3');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(100);
  juego.cambioPantalla();
}

function keyPressed() {
  if (key === ' ' && juego.pantallaActual === "Juego") {
    juego.leon.disparar();
  }
  if (key === 'R' || key === 'r') {
    juego.leon.recargar(); 
  }
}


function reiniciarJuego() {


}

function mousePressed() {
  juego.mousePressed();
}
