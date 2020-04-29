class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.setKeyBindings();
    this.background = new Background(this);
  }

  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      switch (event.keyCode) {
        case 37:
          event.preventDefault();
          if (this.player.x >= 10) {
            this.player.position = 'left';
            this.player.move();
          }
          break;
        case 38:
          event.preventDefault();
          if (this.player.y >= 10) {
            this.player.position = 'up';
            this.player.move();
          }
          break;
        case 39:
          event.preventDefault();
          if (this.player.x <= 460) {
            this.player.position = 'right';
            this.player.move();
          }
          break;
        case 40:
          event.preventDefault();
          if (this.player.y <= 460) {
            this.player.position = 'down';
            this.player.move();
          }
          break;
        case 32:
          event.preventDefault();
          this.player.direction = 'up';
          this.player.shootArrow = true;
      }
    });
  }

  start() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      delete this.timeout;
    }
    this.running = true;

    //CREATE ALL CLASSES
    this.player = new Hero(this);
    this.horde = new Horde(this);
    this.extralife = new Extra(this);
    this.gameover = new Gameover(this);

    //CREATE A NEW HORD
    this.horde.createHord();

    //LOOP LOGIC
    this.speed = 30;
    this.loop();
  }

  pause() {
    this.running = !this.running;
    if (this.running) {
      this.loop();
    }
    /*
    if (this.running) {
      this.running = false;
    } else {
      this.running = true;
      this.loop();
    }
    */
  }

  runLogic() {
    this.player.runArrowLogic();
    this.horde.runLogic();
    this.extralife.collisionOffer();
    this.player.shoot();
    this.player.checkHeroLife();

    //CREATE A NEW WAVE IF THE PLAYER HAS LIVES AND THE ARRAY OF HORDE IS EMPTY
    if (this.horde.enemies.length === 0 && this.player.lifes > 0) {
      this.extralife.runLogic();
      this.horde.createHord();
    }
  }

  loop() {
    this.runLogic();
    this.score();
    this.lifes();
    this.draw();

    if (this.running) {
      this.timeout = setTimeout(() => {
        this.loop();
      }, 200 / this.speed);
    }
  }

  draw() {
    this.clear();
    this.background.draw();
    this.player.draw();
    this.horde.draw();
    this.extralife.draw();
    this.player.drawArrow();

    if (this.player.lifes < 1) {
      this.startClicked = false;
      this.startButton();
      this.gameover.drawGameOver();
    }
  }

  clear() {
    this.context.clearRect(0, 0, 500, 500);
  }

  score() {
    const $score = document.getElementById('points');
    $score.innerText = `Points: ${this.player.points}`;
  }

  lifes() {
    const $lifes = document.getElementById('lifes');
    $lifes.innerHTML = `<p id='lifes'>Lifes: 
        ${this.player.lifes}
         <img src="/images/1.png" alt="heart" width=20px height=20px></p>`;
  }

  startButton() {
    if (!this.startClicked) {
      const $buttonStart = document.getElementById('start');
      $buttonStart.innerText = `Start`;
    }
  }
}
