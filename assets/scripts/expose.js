// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();
  let partyHorn = false;
  let hornName = document.getElementById("horn-select");
  let hornImage = document.querySelector("img");
  let hornAudio = document.querySelector("audio");

  hornName.addEventListener('input', function (e) {
    let hornType = e.target.value;
    if (hornType == "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      hornAudio.src = "assets/audio/air-horn.mp3";
      partyHorn = false;
    }
    else if (hornType == "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      hornAudio.src = "assets/audio/car-horn.mp3";
      partyHorn = false;
    }
    else if (hornType == "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      hornAudio.src = "assets/audio/party-horn.mp3";
      partyHorn = true;
    }
  })

  let playButton = document.querySelector("button");
  playButton.addEventListener('click', function (e) {
    if (hornName.value != "select") {
      hornAudio.play();
      if (partyHorn == true) {
        jsConfetti.addConfetti({
          emojis: ['🎉'],
        })
      }
    }
  })

  let volumeControl = document.getElementById("volume");
  let volumeImage = document.querySelectorAll('img')[1];
  volumeControl.addEventListener('input', function (e) {
    hornAudio.volume = e.target.value / 100;
    if (e.target.value >= 67) {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
    else if (e.target.value >= 33 && e.target.value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    }
    else if (e.target.value >= 1 && e.target.value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    }
    else {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    }
  })
}