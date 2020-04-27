const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

const $buttonStart = document.getElementById('start');

$buttonStart.addEventListener('click', () => {
    game.start();
});

window.addEventListener('keydown', (event) => {
    event.preventDefault();
    switch (event.keyCode) {
        case 37:
            event.preventDefault();
            if (game.player.x >= 10) {
                game.player.position = 'left';
                game.player.move();
            }
            break;
        case 38:
            event.preventDefault();
            if (game.player.y >= 10) {
                game.player.position = 'up';
                game.player.move();
            }
            break;
        case 39:
            event.preventDefault();
            if (game.player.x <= 460) {
                game.player.position = 'right';
                game.player.move();
            }
            break;
        case 40:
            event.preventDefault();
            if (game.player.y <= 460) {
                game.player.position = 'down';
                game.player.move();
            }
            break;
        case 32:
            event.preventDefault();
            game.player.shootArrow = true;
    }
});