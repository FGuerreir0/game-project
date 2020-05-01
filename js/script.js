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
const $buttonSurvive = document.getElementById('survive');
const $buttonPause = document.getElementById('pause');
const $buttonMute = document.getElementById('mute');

//START BUTTON
$buttonStart.addEventListener('click', () => {
  game.startClicked = true;
  game.surviveClicked = false;
  if (game.startClicked) {
    $buttonStart.innerText = 'Restart';
    $buttonSurvive.innerText = 'Survive';
    // START GAME PLAY AUDIO
    audio.play();
  } else {
    $buttonStart.innerText = 'Campaign';
    $buttonSurvive.innerText = 'Survive';
  }
  game.start();
});

//Survive BUTTON
$buttonSurvive.addEventListener('click', () => {
  game.startClicked = true;
  game.surviveClicked = true;
  if (game.startClicked) {
    $buttonSurvive.innerText = 'Restart';
    $buttonStart.innerText = 'Campaign';
    // START GAME PLAY AUDIO
    audio.play();
  } else {
    $buttonStart.innerText = 'Campaign';
    $buttonSurvive.innerText = 'Survive';
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
