const slowImg = new Image();
slowImg.src = '/images/slowdown.png';

class Slow {
  constructor(game) {
    this.game = game;
    this.slowdown = [];
  }

  runLogic() {
    //RANDOM COORDENATES TO APPEAR THE POWERUP
    const wave = this.game.horde.wave;

    let question = Math.round(Math.random());
    console.log(question);
    if (question === 0) {
      this.slowdown = [];
      let randomY = Math.floor(Math.random() * (400 - 250) + 250);
      let randomX = Math.floor(Math.random() * 200);
      this.slowdown.push({ x: randomX, y: randomY });
    } else {
      this.slowdown = [];
    }
  }

  draw() {
    //DRAW SLOWDOWN IMAGE
    const context = this.game.context;
    const power = this.slowdown[0];

    if (this.slowdown.length) {
      context.save();
      context.drawImage(slowImg, power.x, power.y, 30, 30);
      context.restore();
    }
  }

  collisionPower() {
    //LOGIC FOR THE COLLISION IF THE PLAYER COORDENATES IS THE SAME AS THE POWERUP
    const player = this.game.player;
    const wave = this.game.horde.wave;
    const power = this.slowdown[0];

    if (power) {
      if (player.y <= power.y + 22 && power.x >= player.x - 20 && power.x <= player.x + 30) {
        //SLOWING DOWN THE ENEMIES
        for (let index = 0; index < this.game.horde.enemies.length; index++) {
          const enemy = this.game.horde.enemies[index];
          enemy.speed = 0.25; // CONTROLS THE SLOWDOWN POWER
        }
        this.slowdown = [];
      }
    }
  }
}
