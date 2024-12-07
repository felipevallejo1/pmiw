let player;
let imagenes = [];
let pantalla = 0;
let click = false;

function preload() {
  soundFormats('mp3');
  player = loadSound('data/musica_fondo.mp3');
  for (let i = 0; i <= 14; i++) {
    imagenes[i] = loadImage('data/' + i + ".jpg");
  }
}

function setup() {
  createCanvas(640, 480);
  infoPantallas();
}

function draw() {
  dibujarPantalla(pantalla);
}

function mouseClicked() {
  click = true;
  if (pantalla === 0 && !player.isPlaying()) {
    player.loop(); 
  }

  
  for (let i = 0; i < opciones[pantalla].length; i++) {
    let opcion = opciones[pantalla][i];
    
    if (
      mouseX > opcion[1] && mouseX < opcion[1] + opcion[3] && mouseY > opcion[2] &&  mouseY < opcion[2] + opcion[4] 
     ) {
      pantalla = siguientes[pantalla][opcion[5]]; 
      click = false;
      break; 
    }
  }
}
