class Game {
    constructor($canvas) {
        this.$canvas = $canvas;
        this.context = $canvas.getContext('2d');
        this.setKeyBindings();
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
                    this.player.shootArrow = true;
            }
        });
    }

    start() {
        this.running = true;
        this.player = new Hero(this);
        this.enemy = new Enemy(this);
        this.enemy.createHord();
        this.speed = 30;
        this.loop();
    }

    reset() {
        this.start();
    }


    pause() {
        if (this.running) {
            this.running = false;
        } else {

            this.running = true;
            this.loop();
        }
    }


    runLogic() {
        this.enemy.runLogicCollision();
        this.player.shoot();
        if (this.enemy.horde.length === 0 && this.player.lives > 0) {
            this.enemy.createHord();
        }
    }



    loop() {
        this.runLogic();
        this.score();
        this.lives();
        this.draw();
        if (this.running) {
            setTimeout(() => {
                this.loop();
            }, 200 / this.speed);
        }
    }

    draw() {
        this.clear();
        this.player.draw();
        this.player.drawArrow();
        this.enemy.drawEnemy();
    }

    clear() {
        this.context.clearRect(0, 0, 500, 500);
    }

    score() {
        const $score = document.getElementById('points');
        $score.innerText = `Points: ${this.player.points}`;
    }

    lives() {
        const $lives = document.getElementById('lives');
        $lives.innerHTML = `<p id='lives'>Lives: 
        ${ this.player.lives }
         <img src="/images/1.png" alt="heart" width=20px height=20px></p>`;
    }
}