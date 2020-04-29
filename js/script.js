const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

const $buttonStart = document.getElementById('start');
const $buttonPause = document.getElementById('pause');

$buttonStart.addEventListener('click', () => {
  game.startClicked = true;
  if (game.startClicked) {
    $buttonStart.innerText = 'Restart';
  } else {
    $buttonStart.innerText = 'Start';
  }
  game.start();
});

$buttonPause.addEventListener('click', () => {
  if (game.running) {
    $buttonPause.innerText = 'Resume';
  } else {
    $buttonPause.innerText = 'Pause';
  }
  game.pause();
});
