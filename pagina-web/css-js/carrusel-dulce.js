imagenD = new Array;
imagenD[0] = "../img/top1-dulce.jpg";
imagenD[1] = "../img/top2-dulce.jpeg";
imagenD[2] = "../img/top3-dulce.jpg";
imagenD[3] = "../img/top4-dulce.jpg";
imagenD[4] = "../img/top5-dulce.jpg";
imagenD[5] = "../img/top6-dulce.jpg";

  let posicionActualD = 0;

  function cambiarImagenD() {
    document.imagenesdulce.src = imagenD[posicionActualD];
  }
  //siguiente imagen
  function pasarImagenD() {
    if(posicionActualD >= 5) {
      posicionActualD = 0;
    }else{
      posicionActualD++;
    }
    cambiarImagenD();
  }
  //anterior imagen
  function volverImagenD() {
    if(posicionActualD <= 0) {
      posicionActualD = 5;
    }else{
      posicionActualD--;
    }
    cambiarImagenD();
  }