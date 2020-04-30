const $canvas = document.querySelector('canvas');
this.context = $canvas.getContext('2d');

//AUDIO

//INSTRUCTIONS IMAGE BEGIN BEFORE START IS CLICKED
const instruction = new Image();
instruction.src = './images/instructions1.png';

//DRAW IMAGE
window.addEventListener('load', () => {
  this.context.drawImage(instruction, 0, 0, 500, 500);
  let audio = document.getElementById('audio');
  audio.preload = 'auto';
});

const game = new Game($canvas, audio);
const $buttonStart = document.getElementById('start');
const $buttonPause = document.getElementById('pause');
const $buttonMute = document.getElementById('mute');

//START BUTTON
$buttonStart.addEventListener('click', () => {
  game.startClicked = true;
  if (game.startClicked) {
    $buttonStart.innerText = 'Restart';

    // START GAME PLAY AUDIO
    audio.play();
  } else {
    $buttonStart.innerText = 'Start';
  }
  game.start();
});

// PAUSE GAME BUTTON
$buttonPause.addEventListener('click', () => {
  if (game.running) {
    $buttonPause.innerText = 'Resume';
    audio.pause();
  } else {
    $buttonPause.innerText = 'Pause';
    audio.play();
  }

  game.pause();
});

//MUTE AUDIO BUTTON
$buttonMute.addEventListener('click', () => {
  if (audio.paused === false) {
    $buttonMute.innerText = 'Unmute';
    // START PLAY AUDIO
    audio.pause();
  } else {
    $buttonMute.innerText = 'Mute';
    audio.play();
  }
});
