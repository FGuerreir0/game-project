class Win {
  constructor(game) {
    this.game = game;
  }

  draw() {
    const playerScore = this.game.player.points;
    const context = this.game.context;

    // DRAW RECTANGLES
    //OUTSIDE
    context.fillStyle = 'black';
    context.fillRect(10, 10, 480, 250);
    //INSIDE
    context.fillStyle = 'White';
    context.fillRect(15, 15, 470, 240);

    //DRAW GAMEOVER TEXT
    context.textAlign = 'center';
    context.font = '55px fantasy';
    context.fillStyle = 'black';
    context.fillText(`Congratulations!`, 250, 100);

    // DRAW POINTS TEXT
    context.font = '20px fantasy';
    context.fillStyle = 'black';
    context.fillText(`You have defend the castle!`, 250, 160);

    context.font = '20px fantasy';
    context.fillStyle = 'black';
    context.fillText(`Points: ${playerScore}`, 250, 200);

    //INFORMATION START BUTTON
    context.font = '13px fantasy';
    context.fillStyle = 'black';
    context.fillText(`Press start to play again`, 250, 240);
  }
}
