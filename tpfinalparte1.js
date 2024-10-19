// https://youtu.be/HLkUN54WGHE
let player;
let imagenes = [];
let pantalla;
let click = false;

function preload() {
  soundFormats('mp3');
  player = loadSound('/data/musica_fondo.mp3');
  for (let i = 0; i <= 14; i++) {
    imagenes[i] = loadImage('data/' + i + ".jpg");
  }
}

function setup() {
  createCanvas(640, 480);
  player.loop()
    pantalla = 0;
}

function draw() {
  dibujarPantallas(pantalla);
}

//Manejo de Pantallas y Musica al Clickear
function mouseClicked() {
  click = true;
  if (pantalla === 0) {
    
    if (mouseX > (320 - 60) && mouseX < (320 + 60) && mouseY > 280 && mouseY < 320) {
      player.loop(); 
      
    }
    
  }
}
