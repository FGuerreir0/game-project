const offer = new Image();
offer.src = '/images/1.png';

class Extra {
  constructor(game) {
    this.game = game;
    this.offer = [];
  }

  runLogic() {
    //RANDOM COORDENATES FOR APPEAR THE OFFER
    // HAS A RANDOM TO SORT IF THE OFFER IS DRAW INTO CANVAS OR NOT

    let question = Math.round(Math.random());
    if (question === 0) {
      this.offer = [];
      let randomY = Math.floor(Math.random() * (400 - 250) + 250);
      let randomX = Math.floor(Math.random() * 200);
      this.offer.push({ x: randomX, y: randomY });
    } else {
      this.offer = [];
    }
  }
  //}

  draw() {
    //DRAW  OFFER
    const context = this.game.context;
    const life = this.offer[0];

    if (this.offer.length) {
      context.save();
      context.drawImage(offer, life.x, life.y, 25, 25);
      context.restore();
    }
  }

  collisionOffer() {
    //LOGIC FOR THE COLLISION IF THE PLAYER COORDENATES IS THE SAME AS THE OFFER
    const player = this.game.player;
    const life = this.offer[0];

    if (life) {
      if (
        player.y <= life.y + 22 &&
        life.x >= player.x - 20 &&
        life.x <= player.x + 30 &&
        player.lifes > 0
      ) {
        player.lifes++;
        this.offer = [];
      }
    }
  }
}
