let player;
let imagenes = [];
let pantalla = 0;
let click = false;

function preload() {
  soundFormats('mp3');
  player = loadSound('/data/musica_fondo.mp3');
  for (var i = 0; i <= 14; i++) {
    imagenes[i] = loadImage('data/' + i + ".jpg");
  }
}

function setup() {
  createCanvas(640, 480);
  player.loop();
}

function draw() {
  dibujarPantalla(pantalla);
}

function mouseClicked() {
  click = true;
  var pantallaActual = pantallas[pantalla];

  for (var i = 0; i < pantallaActual.opciones.length; i++) {
    var opcion = pantallaActual.opciones[i];
    if (mouseX > opcion.x && mouseX < opcion.x + opcion.ancho && mouseY > opcion.y && mouseY < opcion.y + opcion.alto) {
      pantalla = pantallas[pantalla].siguiente[opcion.id];
      click = false; // Resetear el click para evitar múltiples transiciones
    }
  }
}
