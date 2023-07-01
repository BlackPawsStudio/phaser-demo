import { idleL, idleR, jumpL, jumpR, walkL, walkR } from './animations';

export class Player {
  public isFacingLeft: boolean;
  public ctx: Phaser.Scene;
  public isJumping: boolean;
  public sprite: Phaser.GameObjects.Sprite | null;
  public playerSpeed: number;

  constructor(ctx: Phaser.Scene) {
    this.isFacingLeft = false;
    this.isJumping = false;
    this.ctx = ctx;
    this.sprite = null;
    this.playerSpeed = 2;
  }

  create() {
    this.sprite = this.ctx.add.sprite(400, 300, 'ballr').setScale(0.5);
    this.addAnimations();
  }

  addAnimations() {
    if (this.sprite) {
      this.sprite.anims.create({
        key: 'idleR',
        frames: idleR,
        frameRate: 2,
        repeat: -1,
      });

      this.sprite.anims.create({
        key: 'walkR',
        frames: walkR,
        frameRate: 6,
        repeat: -1,
      });

      this.sprite.anims.create({
        key: 'jumpR',
        frames: jumpR,
        frameRate: 2,
        repeat: 0,
      });

      this.sprite.anims.create({
        key: 'idleL',
        frames: idleL,
        frameRate: 2,
        repeat: -1,
      });

      this.sprite.anims.create({
        key: 'walkL',
        frames: walkL,
        frameRate: 6,
        repeat: -1,
      });

      this.sprite.anims.create({
        key: 'jumpL',
        frames: jumpL,
        frameRate: 2,
        repeat: 0,
      });
    }
  }

  turnLeft() {
    this.isFacingLeft = true;
  }

  turnRight() {
    this.isFacingLeft = false;
  }

  jump() {
    if (this.sprite) {
      this.sprite.anims.play(`jump${this.isFacingLeft ? 'L' : 'R'}`);
    }
  }

  walk() {
    if (this.sprite) {
      this.sprite.anims.play(`walk${this.isFacingLeft ? 'L' : 'R'}`);
    }
  }

  moveRight() {
    this.sprite?.setX(this.sprite?.x + this.playerSpeed);
  }

  moveLeft() {
    this.sprite?.setX(this.sprite?.x - this.playerSpeed);
  }

  stop() {
    if (this.sprite) {
      this.sprite.anims.play(`idle${this.isFacingLeft ? 'L' : 'R'}`);
    }
  }
}
