const powerImg = new Image();
powerImg.src = '/images/power.png';

class Ultimate {
  constructor(game) {
    this.game = game;
  }

  draw() {
    //DRAW SLOWDOWN IMAGE
    const context = this.game.context;

    if (!this.game.ultimateUsed) {
      context.save();
      context.drawImage(powerImg, 470, 470, 30, 30);
      context.restore();
    }
  }
}
