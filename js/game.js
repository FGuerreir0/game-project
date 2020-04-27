class Game {
    constructor($canvas) {
        this.$canvas = $canvas;
        this.context = $canvas.getContext('2d');
    }
    start() {
        this.player = new Hero(this);
        this.goblin = new Enemy(this);
        this.goblin.createHord();
        this.draw();

        this.loop();

    }


    loop() {
        this.player.shoot();
        this.draw();
        this.player.drawArrow();

        setTimeout(() => {
            this.loop();
        }, 200 / 30);
    }

    /* arrowLoop() {
         this.draw();
         setTimeout(() => {
             this.arrowLoop();
         }, 200 / 30);
     }*/

    draw() {
        this.clear();
        this.player.draw();
    }

    clear() {
        this.context.clearRect(0, 0, 500, 500);
    }
}