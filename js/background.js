const background = new Image();
background.src = './images/background.png';

class Background {
  constructor(game) {
    this.game = game;
  }

  draw() {
    const context = this.game.context;
    context.drawImage(background, 0, 0, 500, 500);
  }
}
