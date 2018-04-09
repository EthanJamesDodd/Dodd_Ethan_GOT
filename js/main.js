(() => {
  console.log('I Work');

  String.prototype.capIt = function() { return this.replace(this.charAt(),this.charAt().toUpperCase()); }

  //Variable Stack
  let sigils = document.querySelectorAll('.sigilContainer'),
      lightbox = document.querySelector('.lightbox'),
      closeLightBoxButton = lightbox.querySelector('.close-lightbox'),
      videoPlayer = document.querySelector('video'),
      playButton = document.querySelector('.controls'),
      imageBanner = document.querySelector('#houseImages');

  function showHouseVideo() {
    let houseText = this.className.split(' ')[1].capIt();
    document.querySelector('h1').textContent = `House ${houseText}`;
    //debugger;
    lightbox.classList.add('show-lightbox');
    //Made the vid play
    videoPlayer.src = `video/House-${houseText}.${videoPlayer.currentSrc.split('.')[1]}`;
    videoPlayer.load();
    videoPlayer.play();

    scrollBanners(this.dataset.offset);
  }

  function scrollBanners(offset) {
    //Move the banner images
    let moveIt = offset * 600 + "px";

    imageBanner.style.right = moveIt;
  }

  function closeLightBox() {
    lightbox.classList.remove('show-lightbox');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }

  function pausePlay(){
    //debugger;
    let theButton = this.firstElementChild;

    //Flip icon to Play, and pause vid
    if(videoPlayer.paused == true) {
      videoPlayer.play();
      theButton.dataset.icon="pause-circle";
    } else {
      videoPlayer.pause();
      theButton.dataset.icon = "play-circle";
    }
  }

  //Event handling at the bottom
  sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo))
  closeLightBoxButton.addEventListener('click', closeLightBox);
  videoPlayer.addEventListener('ended', closeLightBox);
  playButton.addEventListener('click', pausePlay);
})();

/*Use drumkit example to switch the order of video and banner transition*/
