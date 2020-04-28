class Hero {
    constructor(game) {
        this.game = game;
        this.lives = 5;
        this.x = 220;
        this.y = 450;
        this.position = 'up';
        this.shootArrow = false;
        this.arrows = [];
        this.points = 0;
    }

    shoot() {

        //SAVE POSIITON OF SHOOTED ARROWS

        if (this.shootArrow) {
            this.shootArrow = false;
            this.arrows.push({ x: this.x, y: this.y, collision: false });
            this.drawArrow();
        }
    }
    move() {
        switch (this.position) {
            case 'right':
                this.x = this.x + 25;
                break;
            case 'left':
                this.x = this.x - 25;
                break;
            case 'down':
                this.y = this.y + 25;
                break;
            case 'up':
                this.y = this.y - 25;
                break;
        }
    }

    draw() {

        //DRAW PLAYER

        const context = this.game.context;
        context.save();
        context.fillStyle = 'red'; //player
        context.fillRect(this.x, this.y, 30, 30);
        context.restore();
    }

    drawArrow() {

        //PHYSICS AND DRAW ARROW

        for (let index = 0; index < this.arrows.length; index++) {
            if (this.arrows[index].y > 0 && this.arrows[index].collision === false) {
                this.arrows[index].y = this.arrows[index].y - 5;
                //DRAW ARROW
                const context = this.game.context;
                context.save();
                context.fillStyle = 'black';
                context.fillRect(this.arrows[index].x + 15, this.arrows[index].y - 20, 4, 15);
                context.restore();
            } else {
                this.arrows.shift();
            }
        }

    }

}