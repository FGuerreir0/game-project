const characterLeft = new Image();
characterLeft.src = '/images/characterleft.png';
const characterDown = new Image();
characterDown.src = '/images/characterdown.png';
const characterRight = new Image();
characterRight.src = '/images/characterright.png';
const characterRip = new Image();
characterRip.src = '/images/characternolife.png';
const characterUp = new Image();
characterUp.src = '/images/characterup.png';

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
    this.direction = '';
  }

  shoot() {
    //SAVE POSITON OF SHOOTED ARROWS

    if (this.shootArrow && this.lifes > 0) {
      this.shootArrow = false;
      this.arrows.push({ x: this.x, y: this.y, collision: false });
      this.drawArrow();
    }
  }

  move() {
    if (this.lifes > 0) {
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
  }

  draw() {
    //DRAW PLAYER
    const context = this.game.context;

    switch (this.direction) {
      case 'left':
        context.save();
        context.drawImage(characterLeft, this.x, this.y, 35, 40);
        context.restore();
        break;
      case 'down':
        context.save();
        context.drawImage(characterDown, this.x, this.y, 35, 40);
        context.restore();
        break;
      case 'right':
        context.save();
        context.drawImage(characterRight, this.x, this.y, 35, 40);
        context.restore();
        break;
      case 'dead':
        context.save();
        context.drawImage(characterRip, this.x, this.y, 35, 40);
        context.restore();
        break;
      default:
        context.save();
        context.drawImage(characterUp, this.x, this.y, 35, 40);
        context.restore();
        break;
    }
  }

  checkHeroLife() {
    if (this.lifes < 1) {
      this.lifes = 0;
      this.direction = 'dead';
      this.startClicked = false;
    }
  }

  runArrowLogic() {
    for (let index = 0; index < this.arrows.length; index++) {
      const arrow = this.arrows[index];
      if (arrow.y > 0 && arrow.collision === false) {
        arrow.y = arrow.y - 5;
      } else {
        this.arrows.splice(index, 1);
      }
    }
  }

  drawArrow() {
    const context = this.game.context;

    //DRAW ARROW
    for (let arrow of this.arrows) {
      //DRAW ARROW
      context.save();
      context.fillStyle = 'white';
      context.fillRect(arrow.x + 15, arrow.y - 20, 4, 15);
      context.restore();
    }
  }
}
