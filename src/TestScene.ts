import Phaser from 'phaser';
import { idle, walkR, jumpR } from './animations';

export class TestScene extends Phaser.Scene {
  constructor() {
    super('Test-demo');
  }

  preload() {
    this.load.image('ball', './assets/images/ball_static_1.png');
    this.load.image('ballStatic2', './assets/images/ball_static_2.png');
    this.load.image('ballWalk1', './assets/images/ball_walk_1.png');
    this.load.image('ballWalk2', './assets/images/ball_walk_2.png');
    this.load.image('ballJump', './assets/images/ball_jump.png');
  }

  create() {
    this.anims.create({
      key: 'static',
      frames: idle,
      frameRate: 2,
      repeat: -1,
    });

    this.anims.create({
      key: 'walkR',
      frames: walkR,
      frameRate: 4,
      repeat: -1,
    });

    this.anims.create({
      key: 'jumpR',
      frames: jumpR,
      frameRate: 1,
      repeat: -1,
    });

    this.add.sprite(400, 300, 'ball').play('walkR');
  }
}
