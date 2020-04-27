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

    runLogic() {
        this.goblin.runLogic();
    }


    loop() {
        this.runLogic();
        this.player.shoot();
        this.draw();

        setTimeout(() => {
            this.loop();
        }, 200 / 30);
    }

    draw() {
        this.clear();
        this.player.draw();
        this.player.drawArrow();
        this.goblin.drawEnemy();
    }

    clear() {
        this.context.clearRect(0, 0, 500, 500);
    }
}