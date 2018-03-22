(() => {
//Variable Stack
let vidPlayer = document.querySelector('video'), //Grab the video
    pauseButton = document.querySelectorAll('button')[0], //Grab the first button
    playButton = document.querySelectorAll('button')[1], //Grab the second button
    rewindButton = document.querySelectorAll('button')[2];  //Grab the third button

//Functions in the mid
function volOn() {
  vidPlayer.muted = false;
}

function volOff() {
  vidPlayer.muted = true;
}

function playFunction(){
  vidPlayer.play(); //Makes the video player play.
}

function pauseFunction(){
  vidPlayer.pause();
}

function rewindFuntion(){
  
}

vidPlayer.addEventListener('mouseover', volOn);
vidPlayer.addEventListener('mouseout', volOff);

playButton.addEventListener('click', playFunction);
pauseButton.addEventListener('click', pauseFunction);
rewindButton.addEventListener('click', rewindFuntion)
})();
