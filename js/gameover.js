class Gameover {
  constructor(game) {
    this.game = game;
  }

  drawGameOver() {
    const playerScore = this.game.player.points;
    const context = this.game.context;

    // DRAW RECTANGLES
    //OUTSIDE
    context.fillStyle = 'white';
    context.fillRect(10, 10, 480, 250);
    //INSIDE
    context.fillStyle = 'black';
    context.fillRect(15, 15, 470, 240);

    //DRAW GAMEOVER TEXT
    context.textAlign = 'center';
    context.font = '55px fantasy';
    context.fillStyle = 'white';
    context.fillText(`Gameover`, 250, 100);

    // DRAW POINTS TEXT
    context.font = '30px fantasy';
    context.fillStyle = 'white';
    context.fillText(`Points: ${playerScore}`, 250, 160);

    //INFORMATION START BUTTON
    context.font = '13px fantasy';
    context.fillStyle = 'white';
    context.fillText(`Press start to play again`, 250, 240);
  }
}
