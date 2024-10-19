function botonRectangular(x, y, tamX, tamY, ID) {
  
  if (mouseX > x && mouseX < x + tamX && mouseY > y && mouseY < y + tamY) {
    if (click) {
      click = false;

     
      if (ID == 0 && pantalla == 0) { 
        actualizarPantallas(pantalla, true);
      } else if (ID == 1 && pantalla == 0) { 
        actualizarPantallas(pantalla, false);
      } 
      
      else if (ID == 0 && pantalla == 1) { 
        actualizarPantallas(pantalla, true);
      } 
      
      else if (ID == 0 && pantalla == 2) { 
        actualizarPantallas(pantalla, true);
      } else if (ID == 1 && pantalla == 2) {
        actualizarPantallas(pantalla, false);
      } 
      
      else if (ID == 0 && pantalla == 4) {
        actualizarPantallas(pantalla, true);
      } 
      
      else if (ID == 0 && pantalla == 5) {
        actualizarPantallas(pantalla, true);
      } else if (ID == 1 && pantalla == 5) {
        actualizarPantallas(pantalla, false);
      } 
      
      else if (ID == 0 && pantalla == 6) {
        actualizarPantallas(pantalla, true);
      } 
     
      else if (ID == 0 && pantalla == 7) {
        actualizarPantallas(pantalla, true);
      } 
      
      else if (ID == 0 && pantalla == 9) {
        actualizarPantallas(pantalla, true);
      } else if (ID == 1 && pantalla == 9) {
        actualizarPantallas(pantalla, false);
      } 
      
      else if (ID == 0 && pantalla == 10) {
        actualizarPantallas(pantalla, true);
      } else if (ID == 1 && pantalla == 10) {
        actualizarPantallas(pantalla, false);
      } 
      
      else if (ID == 0 && pantalla == 11) {
        actualizarPantallas(pantalla, true);
      } 
      
      else if (ID == 0 && pantalla == 12) {
        actualizarPantallas(pantalla, true);
      } else if (ID == 1 && pantalla == 12) {
        actualizarPantallas(pantalla, false);
      } 
      
      else if (ID == 0 && pantalla == 14) {
        actualizarPantallas(pantalla, true);
      } 
      
      else if (ID == 0 && pantalla == 15) {
        actualizarPantallas(pantalla, true);
      } 
      
      else if (ID == 0 && pantalla == 3) { 
        actualizarPantallas(pantalla, true);
      } 
      
      else if (ID == 0 && pantalla == 8) { 
        actualizarPantallas(pantalla, true);
      } 
      
      else if (ID == 0 && pantalla == 13) { 
        actualizarPantallas(pantalla, true);
      }
    }
  }

  fill(0, 0, 0, 0);
  noStroke();
  rect(x, y, tamX, tamY);
}
