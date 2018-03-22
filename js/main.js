(() => {
  console.log('I Work');
  //Variable Stack
  let sigils = document.querySelectorAll('.sigilContainer'),
      lightbox = document.querySelector('.lightbox'),
      closeLightBoxButton = lightbox.querySelector('.close-lightbox');
      videoPlayer = document.querySelector('video');

  function showHouseVideo() {
    //debugger;
    lightbox.classList.add('show-lightbox');
    videoPlayer.play();
  }

  function closeLightBox() {
    lightbox.classList.remove('show-lightbox');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }

  //Event handling at the bottom
  sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo))
  closeLightBoxButton.addEventListener('click', closeLightBox);
})();
