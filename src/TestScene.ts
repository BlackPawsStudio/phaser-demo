import Phaser from 'phaser';
import { Player } from './Player';

export class TestScene extends Phaser.Scene {
  private player: Player;
  private isPressed: {
    left: boolean;
    right: boolean;
    up: boolean;
  };
  private gravity: number;

  constructor() {
    super('Test-demo');
    this.player = new Player(this);
    this.isPressed = {
      left: false,
      right: false,
      up: false,
    };
    this.gravity = 0;
  }

  preload() {
    this.load.image('ballr', './assets/images/ball_static_1r.png');
    this.load.image('ballStatic2r', './assets/images/ball_static_2r.png');
    this.load.image('ballWalk1r', './assets/images/ball_walk_1r.png');
    this.load.image('ballWalk2r', './assets/images/ball_walk_2r.png');
    this.load.image('ballJumpR', './assets/images/ball_jumpr.png');

    this.load.image('balll', './assets/images/ball_static_1l.png');
    this.load.image('ballStatic2l', './assets/images/ball_static_2l.png');
    this.load.image('ballWalk1l', './assets/images/ball_walk_1l.png');
    this.load.image('ballWalk2l', './assets/images/ball_walk_2l.png');
    this.load.image('ballJumpL', './assets/images/ball_jumpl.png');
  }

  create() {
    this.player.create();
    this.player.stop();
    this.createControls();
  }

  createControls() {
    const rightButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    const leftButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    const upButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

    rightButton.addListener('down', () => {
      this.isPressed.right = true;
      if (!this.player.isJumping) {
        this.player.turnRight();
        this.player.walk();
      }
    });

    leftButton.addListener('down', () => {
      this.isPressed.left = true;
      if (!this.player.isJumping) {
        this.player.turnLeft();
        this.player.walk();
      }
    });
    upButton.addListener('down', () => {
      this.player.jump();
      this.isPressed.up = true;
      setTimeout(() => {
        this.player.isJumping = true;
        this.gravity = 10;
        this.player.sprite?.setY(this.player.sprite?.y - this.gravity);
      }, 500);
    });

    rightButton.addListener('up', () => {
      this.player.stop();
      this.isPressed.right = false;
    });
    leftButton.addListener('up', () => {
      this.player.stop();
      this.isPressed.left = false;
    });
    upButton.addListener('up', () => {
      this.isPressed.up = false;
    });
  }

  update() {
    if (this.isPressed.left) {
      this.player.moveLeft();
    }
    if (this.isPressed.right) {
      this.player.moveRight();
    }

    if (this.player.sprite) {
      if (this.player.sprite.y < 300) {
        this.gravity = this.gravity - 0.3;
      } else {
        if (this.player.isJumping) {
          this.player.stop();
        }
        this.player.isJumping = false;
      }
      if (this.player.sprite) {
        if (this.player.sprite.y < 300) {
          this.player.sprite.setY(this.player.sprite.y - this.gravity);
        }
      }
    }
  }
}
