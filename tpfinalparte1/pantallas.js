var pantallas = [
  // Pantalla 0: Menú de inicio
  {
    id: 0,
    fondo: 1,
    texto: "Resident Evil",
    opciones: [
      { texto: "JUGAR", x: 140 - 60, y: 420, ancho: 120, alto: 40, id: 0 },  // opción 0
      { texto: "CREDITOS", x: 500 - 60, y: 420, ancho: 120, alto: 40, id: 1 }  // opción 1
    ],
    siguiente: [1, 14] // Si es opción 0 pasa a pantalla 1, si es opción 1 pasa a pantalla 14
  },
  
  // Pantalla 1: Llegada a la ciudad
  {
    id: 1,
    fondo: 2,
    texto: "Llegas a la ciudad infestada y frenas a cargar gasolina",
    opciones: [
      { texto: "CONTINUAR", x: 460, y: 440, ancho: 200, alto: 40, id: 0 }
    ],
    siguiente: [2]
  },
  
  // Pantalla 2: Gasolinera
  {
    id: 2,
    fondo: 3,
    texto: "Escuchas un ruido extraño dentro de la tienda",
    opciones: [
      { texto: "Entrar a revisar", x: 40, y: 413, ancho: 200, alto: 40, id: 0 },
      { texto: "Ignorarlo e irse", x: 333, y: 413, ancho: 200, alto: 40, id: 1 }
    ],
    siguiente: [3, 4]
  },

  // Pantalla 3: Entrar a revisar
  {
    id: 3,
    fondo: 4,
    texto: "Al entrar, escuchas un ruido en la máquina registradora,\n donde un zombie se abalanza sobre ti, y mueres.",
    opciones: [
      { texto: "MENÚ", x: 80, y: 450, ancho: 80, alto: 30, id: 0 }
    ],
    siguiente: [0]
  },

  // Pantalla 4: Ignorar
  {
    id: 4,
    fondo: 6,
    texto: "Terminas de cargar gasolina y te diriges al \n centro de policía para reunirte con tus compañeros",
    opciones: [
      { texto: "CONTINUAR", x: 433, y: 443, ancho: 200, alto: 40, id: 0 }
    ],
    siguiente: [5]
  },

  // Pantalla 5: Llegas al cuartel
  {
    id: 5,
    fondo: 7,
    texto: "Apenas llegas ves la puerta principal bloqueada",
    opciones: [
      { texto: "Buscar la llave en el cuartel", x: 40, y: 413, ancho: 200, alto: 40, id: 1 },
      { texto: "Entrar por el fondo", x: 333, y: 413, ancho: 200, alto: 40, id: 0 }
    ],
    siguiente: [6, 10]
  },

  // Pantalla 6: Vas por el fondo
  {
    id: 6,
    fondo: 8,
    texto: "Para llegar a la central, debes pasar\n por la zona forense, que está infestada",
    opciones: [
      { texto: "CONTINUAR", x: 460, y: 440, ancho: 120, alto: 30, id: 0 }
    ],
    siguiente: [7]
  },

  // Pantalla 7: Forense
  {
    id: 7,
    fondo: 13,
    texto: "Al haber tantos, disparar no tendría sentido, así que pasas corriendo",
    opciones: [
      { texto: "CONTINUAR", x: 460, y: 440, ancho: 120, alto: 30, id: 0 }
    ],
    siguiente: [8]
  },

  // Pantalla 8: Yendo a la central
  {
    id: 8,
    fondo: 14,
    texto: "Llegas al Centro Policial y tus compañeros coinciden en que \n lo mejor es abandonar la ciudad y juntarse con las fuerzas armadas",
    opciones: [
      { texto: "FIN", x: 460, y: 440, ancho: 120, alto: 30, id: 0 }
    ],
    siguiente: [9]
  },

  // Pantalla 9: Fin
  {
    id: 9,
    fondo: 6,
    texto: "Tú y tus compañeros abandonan la ciudad infestada. Has Escapado.",
    opciones: [
      { texto: "MENÚ", x: 460, y: 440, ancho: 120, alto: 30, id: 0 }
    ],
    siguiente: [0]
  },

  // Pantalla 10: Alertar Zombies
  {
    id: 10,
    fondo: 9,
    texto: "Por suerte, la llave se encontraba allí,\n pero has hecho ruido y alertado a un par de zombies",
    opciones: [
      { texto: "Siguiente", x: 440, y: 440, ancho: 200, alto: 40, id: 0 }
    ],
    siguiente: [11]
  },

  // Pantalla 11: Patio
  {
    id: 11,
    fondo: 10,
    texto: "Tras dispararle a dos y escapar de los otros,\n tuviste que desviarte y acabaste en el patio de la casa de en frente",
    opciones: [
      { texto: "CONTINUAR", x: 460, y: 440, ancho: 120, alto: 30, id: 0 }
    ],
    siguiente: [12]
  },

  // Pantalla 12: Niña Árbol
  {
    id: 12,
    fondo: 11,
    texto: "Allí, ves a una niña atrapada en un árbol,\n con zombies intentando atacarla",
    opciones: [
      { texto: "Ayudarla", x: 40, y: 433, ancho: 200, alto: 40, id: 0 },
      { texto: "Dirigirse a la central", x: 333, y: 433, ancho: 200, alto: 40, id: 1 }
    ],
    siguiente: [13, 8]
  },

  // Pantalla 13: Ayudarla
  {
    id: 13,
    fondo: 12,
    texto: "Disparaste a los zombies, pero los disparos atrajeron muchos\n más zombies, y quedaste rodeado en la casa, ambos morirán.",
    opciones: [
      { texto: "Menu", x: 460, y: 440, ancho: 120, alto: 30, id: 0 }
    ],
    siguiente: [0]
  },

  // Pantalla 14: Créditos
  {
    id: 14,
    fondo: 0,
    texto: "Resident Evil\nProgramado por Luciano Testa y Felipe Vallejo",
    opciones: [
      { texto: "Volver al Menú", x: 0, y: 450, ancho: 200, alto: 40, id: 0 }
    ],
    siguiente: [0]
  }
];
