let audioButtons = document.getElementsByClassName("audio-button");
let audios = document.getElementsByTagName("audio");

for (let button in audioButtons) {
    audioButtons[button].addEventListener("click", function() {
        audios[button].play();
    });
}