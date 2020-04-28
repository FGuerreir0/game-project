class Hero {
    constructor(game) {
        this.game = game;
        this.lifes = 5;
        this.x = 220;
        this.y = 450;
        this.position = 'up';
        this.shootArrow = false;
        this.arrows = [];
        this.points = 0;
        this.image = new Image();
        this.image.src = 'images/character-down.png';
        this.direction = '';
    }

    shoot() {

        //SAVE POSITON OF SHOOTED ARROWS

        if (this.shootArrow) {
            this.shootArrow = false;
            this.arrows.push({ x: this.x, y: this.y, collision: false });
            this.drawArrow();
        }
    }

    move() {
        switch (this.position) {
            case 'right':
                this.direction = 'right';
                this.x = this.x + 25;
                break;
            case 'left':
                this.direction = 'left';
                this.x = this.x - 25;
                break;
            case 'down':
                this.direction = 'down';
                this.y = this.y + 25;

                break;
            case 'up':
                this.direction = 'up';
                this.y = this.y - 25;
                break;
        }
    }

    draw() {
        //DRAW PLAYER
        const context = this.game.context;


        switch (this.direction) {
            case 'left':
                context.save();
                const characterLeft = new Image();
                characterLeft.src = '/images/characterleft.png';
                context.drawImage(characterLeft, this.x, this.y, 35, 40);
                context.restore();
                break;
            case 'down':
                context.save();
                const characterDown = new Image();
                characterDown.src = '/images/characterdown.png';
                context.drawImage(characterDown, this.x, this.y, 35, 40);
                context.restore();
                break;
            case 'right':
                context.save();
                const characterRight = new Image();
                characterRight.src = '/images/characterright.png';
                context.drawImage(characterRight, this.x, this.y, 35, 40);
                context.restore();
                break;
            case 'dead':
                context.save();
                const characterRip = new Image();
                characterRip.src = '/images/characternolife.png';
                context.drawImage(characterRip, this.x, this.y, 35, 40);
                context.restore();
                break;
            default:
                context.save();
                const characterUp = new Image();
                characterUp.src = '/images/characterup.png';
                context.drawImage(characterUp, this.x, this.y, 35, 40);
                context.restore();
                break;
        }
    }

    checkHeroLife() {
        const context = this.game.context;
        if (this.lifes < 1) {
            this.lifes = 0;
            this.direction = 'dead';
        }
    }

    drawArrow() {

        //PHYSICS AND DRAW ARROW

        for (let index = 0; index < this.arrows.length; index++) {
            if (this.arrows[index].y > 0 && this.arrows[index].collision === false) {
                this.arrows[index].y = this.arrows[index].y - 5;
                //DRAW ARROW
                const context = this.game.context;
                context.save();
                context.fillStyle = 'white';
                context.fillRect(this.arrows[index].x + 15, this.arrows[index].y - 20, 4, 15);
                context.restore();
            } else {
                this.arrows.shift();
            }
        }

    }

}