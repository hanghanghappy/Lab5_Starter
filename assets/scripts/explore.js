// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let synth = window.speechSynthesis;
  let voiceSelect = document.getElementById("voice-select");
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      let option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  let speechButton = document.querySelector("button");
  let speechText = document.getElementById("text-to-speak");
  let speechImage = document.querySelector("img");
  speechButton.addEventListener("click", function(e){
    let utterThis = new SpeechSynthesisUtterance(speechText.value);
    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    if (synth.speaking == true){
      speechImage.src = "assets/images/smiling-open.png";
    }
    utterThis.addEventListener("end", function(e){
      speechImage.src = "assets/images/smiling.png";
    })
  })
}