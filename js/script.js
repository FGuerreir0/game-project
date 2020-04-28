const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

const $buttonStart = document.getElementById('start');
const $buttonReset = document.getElementById('reset');
const $buttonPause = document.getElementById('pause');


$buttonStart.addEventListener('click', () => {
    game.start();
});

$buttonReset.addEventListener('click', () => {
    game.reset();
});

$buttonPause.addEventListener('click', () => {
    if (game.running) {
        $buttonPause.innerText = 'Resume';
        game.pause();
    } else {
        $buttonPause.innerText = 'Pause';
        game.pause();

    }
});