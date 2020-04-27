class Hero {
    constructor(game) {
        this.game = game;
        this.lives = 3;
        this.x = 220;
        this.y = 450;
        this.position = 'up';
        this.shootArrow = false;
        this.arrows = [];
    }

    shoot() {
        if (this.shootArrow) {
            this.shootArrow = false;
            this.arrows.push({ x: this.x, y: this.y, collision: false });
            this.drawArrow();
        }
    }
    move() {
        switch (this.position) {
            case 'right':
                this.x = this.x + 20;
                //console.log('x:' + this.x);
                break;
            case 'left':
                this.x = this.x - 20;
                // console.log('x:' + this.x);
                break;
            case 'down':
                this.y = this.y + 20;
                // console.log('y:' + this.y);
                break;
            case 'up':
                this.y = this.y - 20;
                //console.log('y:' + this.y);
                break;
        }
    }

    draw() {
        const context = this.game.context;
        context.save();
        context.fillStyle = 'red'; //player
        context.fillRect(this.x, this.y, 30, 30);
        context.restore();
    }

    drawArrow() {
        for (let index = 0; index < this.arrows.length; index++) {
            if (this.arrows[index].y > 0) {
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
            console.log(this.arrows.length);
        }

    }
}