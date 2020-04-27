class Enemy {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.horde = [];
    }

    createHord() {
        this.horde = [];
        for (let i = 0; i < 10; i++) {
            let randomX = Math.floor(Math.random() * 400 + 50);
            let randomSpeed = Math.floor(Math.random() * 400 + 300);
            this.horde.push({ x: randomX, y: 0, health: 1, speed: randomSpeed / 1000, collision: false });
        }
        console.log(this.horde);
    }

    drawEnemy() {
        for (let index = 0; index < this.horde.length; index++) {
            if (this.horde[index].y >= 0 && this.horde[index].y < 450) {
                this.horde[index].y = this.horde[index].y + this.horde[index].speed;
                const context = this.game.context;
                context.save();
                context.fillStyle = 'green';
                context.fillRect(this.horde[index].x, this.horde[index].y, 20, 20);
                context.restore();
            } else if (this.horde[index].y >= 450) {
                let removed = this.horde.splice(index, 1);

            }
        }
    }

    runLogic() {
        const player = this.game.player;


        //CHECK PLAYER COLLISION WITH OBSTACLES
        for (let a = 0; a < player.arrows.length; a++) {
            for (let i = 0; i < this.horde.length; i++) {
                if (player.y < this.horde[i].y + 22 &&
                    this.horde[i].x >= player.x - 20 &&
                    this.horde[i].x <= player.x + 30) {
                    let removed = this.horde.splice(i, 1);

                    //CHECK ARROW COLLISION

                } else if (player.arrows[a].y < this.horde[i].y + 22 &&
                    this.horde[i].x >= player.arrows[a].x - 5 &&
                    this.horde[i].x <= player.arrows[a].x + 20) {
                    let removed = this.horde.splice(i, 1);
                }
            }
        }


    }

}