class Enemy {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.horde = [];
    }

    createHord() {
        for (let i = 0; i < 16; i++) {
            let randomX = Math.floor(Math.random * 300);
            let randomY = Math.floor(Math.random * 300);
            this.horde.push[{ x: randomX, y: randomY, health: 1 }];
        }
        console.log(this.horde);
    }

}