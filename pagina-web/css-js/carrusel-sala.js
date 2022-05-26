imagenS = new Array;
imagenS[0] = "../img/top1-sala.jpg";
imagenS[1] = "../img/top2-sala.jpg";
imagenS[2] = "../img/top3-sala.jpg";
imagenS[3] = "../img/top4-sala.jpg";
imagenS[4] = "../img/top5-sala.jpg";
imagenS[5] = "../img/top6-sala.jpg";

  let posicionActualS = 0;

  function cambiarImagenS() {
    document.imagesalados.src = imagenS[posicionActualS];
  }
  //siguiente imagen
  function pasarImagenS() {
    if(posicionActualS >= 5) {
      posicionActualS = 0;
    }else{
      posicionActualS++;
    }
    cambiarImagenS();
  }
  //anterior imagen
  function volverImagenS() {
    if(posicionActualS <= 0) {
      posicionActualS = 5;
    }else{
      posicionActualS--;
    }
    cambiarImagenS();
  }