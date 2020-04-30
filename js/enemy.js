const enemyDraw = new Image();
enemyDraw.src = '/images/enemy.gif';

const enemyDrawDark = new Image();
enemyDrawDark.src = '/images/darkenemy.png';

class Enemy {
  constructor(game, speedIncrement, wave) {
    this.game = game;
    this.speedIncrement = speedIncrement;
    this.wave = wave;

    let randomX = Math.floor(Math.random() * 450);
    let randomSpeed = 0;
    randomSpeed = Math.floor(Math.random() * 300 + this.speedIncrement);

    this.x = randomX;
    this.y = 0;
    this.speed = randomSpeed / 1000;
    this.collision = false;
  }

  draw() {
    const context = this.game.context;
    if (this.wave < 7) {
      context.save();
      context.drawImage(enemyDraw, this.x, this.y, 25, 25);
      context.restore();
    } else {
      context.save();
      context.drawImage(enemyDrawDark, this.x, this.y, 30, 30);
      context.restore();
    }
  }
}
