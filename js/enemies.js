class Enemy {
    constructor(game) {
        this.game = game;
        this.wave = 0;
        this.horde = [];
    }

    createHord() {
        //CREATES A NEW HORD IN START OF GAME OR WHEN IS A NEW WAVE AND CHANGE THE SPEED OF WAVES LARGER THAN 2
        this.wave++;
        this.horde = [];
        for (let i = 0; i < 10; i++) {
            let randomX = Math.floor(Math.random() * 400 + 50);
            let randomSpeed = 0;
            if (this.wave > 2) {
                randomSpeed = Math.floor(Math.random() * 400 + 400);
            } else {
                randomSpeed = Math.floor(Math.random() * 300 + 300);
            }
            this.horde.push({ x: randomX, y: 0, health: 1, speed: randomSpeed / 1000, collision: false });
        }
    }

    drawEnemy() {

        // DRAW AND MOVE ENEMY

        const player = this.game.player;
        for (let index = 0; index < this.horde.length; index++) {
            if (this.horde[index].y >= 0 && this.horde[index].y < 450) {
                this.horde[index].y = this.horde[index].y + this.horde[index].speed;

                //DRAW ENEMY
                const context = this.game.context;
                context.save();
                //context.fillStyle = 'black';
                //context.fillRect(this.horde[index].x, this.horde[index].y, 20, 20);

                const enemyDraw = new Image();
                enemyDraw.src = '/images/enemy.gif';
                context.drawImage(enemyDraw, this.horde[index].x, this.horde[index].y, 25, 25);

                context.restore();

            } else if (this.horde[index].y >= 450) {
                this.horde.splice(index, 1);
                player.lifes--;
            }
        }
    }

    runLogicCollision() {
        const player = this.game.player;

        //CHECK PLAYER COLLISION WITH OBSTACLES (CHECK COLLISION TOP, LEFT AND RIGHT)
        for (let i = 0; i < this.horde.length; i++) {
            if (player.y <= this.horde[i].y + 22 &&
                this.horde[i].x >= player.x - 20 &&
                this.horde[i].x <= player.x + 30 &&
                player.lifes > 0) {
                player.lifes--;
                this.horde.splice(i, 1);
            }
            //CHECK ARROW COLLISION
            for (let a = 0; a < player.arrows.length; a++) {
                for (let i = 0; i < this.horde.length; i++)

                    if (player.arrows[a].y < this.horde[i].y + 22 &&
                    this.horde[i].x >= player.arrows[a].x - 5 &&
                    this.horde[i].x <= player.arrows[a].x + 20 &&
                    player.lifes > 0) {
                    this.horde.splice(i, 1);
                    player.arrows[a].collision = true;
                    player.points = player.points + 30;
                }
            }
        }
    }
}