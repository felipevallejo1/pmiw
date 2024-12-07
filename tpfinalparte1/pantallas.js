let textos = [];
let opciones = [];
let siguientes = [];
let fondos = [];

function infoPantallas() {
 
  // Menú
  textos[0] = "Resident Evil";
  fondos[0] = 1;
  opciones[0] = [
    ["JUGAR", 140 - 60, 420, 120, 40, 0],
    ["CREDITOS", 500 - 60, 420, 120, 40, 1]
  ];
  siguientes[0] = [1, 14];
  
  //Llegada a la Ciudad
  textos[1] = "Llegas a la ciudad infestada y frenas a cargar gasolina";
  fondos[1] = 2;
  opciones[1] = [
    ["CONTINUAR", 460, 440, 200, 40, 0]
  ];
  siguientes[1] = [2];
  
  // Ruido en la tienda
  textos[2] = "Escuchas un ruido extraño dentro de la tienda";
  fondos[2] = 3;
  opciones[2] = [
    ["Entrar a revisar", 40, 413, 200, 40, 0],
    ["Ignorarlo e irse", 333, 413, 200, 40, 1]
  ];
  siguientes[2] = [3, 4];
  
  //Zombie te mata
  textos[3] = "Al entrar, escuchas un ruido en la máquina registradora,\n donde un zombie se abalanza sobre ti, y mueres.";
  fondos[3] = 4;
  opciones[3] = [
    ["MENÚ", 80, 450, 80, 30, 0]
  ];
  siguientes[3] = [0];
  
  // Vas al centro de policia
  textos[4] = "Terminas de cargar gasolina y te diriges al \n centro de policía para reunirte con tus compañeros";
  fondos[4] = 6;
  opciones[4] = [
    ["CONTINUAR", 433, 443, 200, 40, 0]
  ];
  siguientes[4] = [5];
   
  // Puerta Bloqueada
  textos[5] = "Apenas llegas ves la puerta principal bloqueada";
  fondos[5] = 7;
  opciones[5] = [
    ["Buscar la llave en el cuartel", 40, 413, 200, 40, 1],
    ["Entrar por el fondo", 333, 413, 200, 40, 0]
  ];
  siguientes[5] = [6, 10];
  
  //Zona Forense
  textos[6] = "Para llegar a la central, debes pasar\n por la zona forense, que está infestada";
  fondos[6] = 8;
  opciones[6] = [
    ["CONTINUAR", 460, 440, 120, 30, 0]
  ];
  siguientes[6] = [7];
  
  // Vas corriendo
  textos[7] = "Al haber tantos, disparar no tendría sentido, así que pasas corriendo";
  fondos[7] = 13;
  opciones[7] = [
    ["CONTINUAR", 460, 440, 120, 30, 0]
  ];
  siguientes[7] = [8];

  // Abandonar la Ciudad
  textos[8] = "Llegas al Centro Policial y tus compañeros coinciden en que \n lo mejor es abandonar la ciudad y juntarse con las fuerzas armadas";
  fondos[8] = 14;
  opciones[8] = [
    ["FIN", 460, 440, 120, 30, 0]
  ];
  siguientes[8] = [9];

  // Has escapado
  textos[9] = "Tú y tus compañeros abandonan la ciudad infestada. Has Escapado.";
  fondos[9] = 6;
  opciones[9] = [
    ["CRÉDITOS", 460, 440, 120, 30, 0]
  ];
  siguientes[9] = [14];
 
  // Encontraste la llave
  textos[10] = "Por suerte, la llave se encontraba allí,\n pero has hecho ruido y alertado a un par de zombies";
  fondos[10] = 9;
  opciones[10] = [
    ["Siguiente", 440, 440, 200, 40, 0]
  ];
  siguientes[10] = [11];
  
  // Casa de en frente
  textos[11] = "Tras dispararle a dos y escapar de los otros,\n tuviste que desviarte y acabaste en el patio de la casa de en frente";
  fondos[11] = 10;
  opciones[11] = [
    ["CONTINUAR", 460, 440, 120, 30, 0]
  ];
  siguientes[11] = [12];
 
  // Niña atrapada
  textos[12] = "Allí, ves a una niña atrapada en un árbol,\n con zombies intentando atacarla";
  fondos[12] = 11;
  opciones[12] = [
    ["Ayudarla", 40, 433, 200, 40, 0],
    ["Dirigirse a la central", 333, 433, 200, 40, 1]
  ];
  siguientes[12] = [13, 8];
  
  // Atrajiste mas zombies. Moriste
  textos[13] = "Disparaste a los zombies, pero los disparos atrajeron muchos\n más zombies, y quedaste rodeado en la casa, ambos morirán.";
  fondos[13] = 12;
  opciones[13] = [
    ["Menu", 460, 440, 120, 30, 0]
  ];
  siguientes[13] = [0];
  
  // Créditos
  textos[14] = "Resident Evil\nProgramado por Luciano Testa y Felipe Vallejo";
  fondos[14] = 0;
  opciones[14] = [
    ["Volver al Menú", 0, 450, 200, 40, 0]
  ];
  siguientes[14] = [0];
}
