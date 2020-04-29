class Horde {
  constructor(game) {
    this.game = game;
    this.wave = 0;
    this.enemiesNumber = 10;
    this.enemies = [];
    this.speedIncrement = 200;
  }

  createHord() {
    //CREATES A NEW HORD IN START OF GAME OR WHEN IS A NEW WAVE AND CHANGE THE SPEED OF WAVES LARGER THAN 2
    this.wave++;
    if (this.wave % 2 === 0) {
      this.enemiesNumber += 1;
      this.speedIncrement += 10;
    }
    this.enemies = [];
    for (let i = 0; i < this.enemiesNumber; i++) {
      const enemy = new Enemy(this.game, this.speedIncrement, this.wave);
      this.enemies.push(enemy);
    }
  }

  runLogic() {
    // MOVE ENEMY
    const player = this.game.player;

    for (let index = 0; index < this.enemies.length; index++) {
      const enemy = this.enemies[index];

      if (enemy.y < 460) {
        enemy.y += enemy.speed;
      } else {
        this.enemies.splice(index, 1);
        player.lifes--;
      }
    }

    //CHECK PLAYER COLLISION WITH OBSTACLES (CHECK COLLISION TOP, LEFT AND RIGHT)
    for (let index = 0; index < this.enemies.length; index++) {
      if (
        player.y <= this.enemies[index].y + 22 &&
        this.enemies[index].x >= player.x - 20 &&
        this.enemies[index].x <= player.x + 30 &&
        player.lifes > 0
      ) {
        player.lifes--;
        this.enemies.splice(index, 1);
      }

      //CHECK ARROW COLLISION
      for (let a = 0; a < player.arrows.length; a++) {
        for (let k = 0; k < this.enemies.length; k++) {
          const enemy = this.enemies[k];
          const arrow = player.arrows[a];

          if (
            arrow.y < enemy.y + 22 &&
            enemy.x >= arrow.x - 5 &&
            enemy.x <= arrow.x + 20 &&
            player.lifes > 0
          ) {
            this.enemies.splice(k, 1);
            arrow.collision = true;
            player.points = player.points + 30;
          }
        }
      }
    }
  }

  draw() {
    for (let enemy of this.enemies) {
      enemy.draw();
    }
  }
}
