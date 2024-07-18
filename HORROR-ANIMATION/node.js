function playAudio() {
  var audio = document.getElementById('creaking-audio');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

window.onload = function() {
  document.getElementById('background-music').play();
}
