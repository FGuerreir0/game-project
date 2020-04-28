class Extra {
    constructor(game) {
        this.game = game;
        this.offer = [];
    }

    offerLogic() {

            //RANDOM COORDENATES FOR APPEAR THE OFFER
            // HAS A RANDOM TO SORT IF THE OFFER IS DRAW INTO CANVAS OR NOT

            let question = Math.round(Math.random());
            if (question === 0) {
                this.offer = [];
                let randomY = Math.floor(Math.random() * (400 - 250) + 250);
                let randomX = Math.floor(Math.random() * 200);
                this.offer.push(randomX, randomY);
            } else {
                this.offer = [];
            }
        }
        //}

    drawOffer() {

        //DRAW  OFFER

        const context = this.game.context;

        if (this.offer.length) {
            context.save();
            const offer = new Image();
            offer.src = '/images/1.png';
            context.drawImage(offer, this.offer[0], this.offer[1], 25, 25);
            context.restore();
        }
    }

    collisionOffer() {

        //LOGIC FOR THE COLLISION IF THE PLAYER COORDENATES IS THE SAME AS THE OFFER

        const player = this.game.player;
        if (this.offer) {
            if (player.y <= this.offer[1] + 22 &&
                this.offer[0] >= player.x - 20 &&
                this.offer[0] <= player.x + 30 &&
                player.lifes > 0) {
                player.lifes++;
                this.offer = [];
            }
        }
    }

}