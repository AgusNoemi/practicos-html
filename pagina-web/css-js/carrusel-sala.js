window.onload = function () {
  const Imagen = [
    '../img/top1-sala.jpg',
    '../img/top2-sala.jpg',
    '../img/top3-sala.jpg',
    '../img/top4-sala.jpg',
    '../img/top5-sala.jpg',
    '../img/top6-sala.jpg'
  ];
  
  let posicionActual = 0;
  let $botonAtras = document.querySelector('#Atras');
  let $botonAdelante = document.querySelector('#Adelante');
  let $imagen = document.querySelector('#imagen');

  //siguiente imagen
  function pasarImagen() {
    if(posicionActual >= Imagen.length - 1) {
      posicionActual = 0;
    }else{
      posicionActual++;
    }
    cambiarImagen();
  }

  //anterior imagen
  function volverImagen() {
    if(posicionActual <= 0) {
      posicionActual = Imagen.length - 1;
    }else{
      posicionActual--;
    }
    cambiarImagen();
  }

  //actualisar imagen
  function cambiarImagen () {
    $imagen.style.backgroundImage = `url(${Imagen[posicionActual]})`;
  }

  
  $botonAdelante.addEventListener('click', pasarImagen);
  $botonAtras.addEventListener('click', volverImagen);

  cambiarImagen();
} 
