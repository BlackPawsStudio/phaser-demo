import Phaser from 'phaser';

import { TestScene } from './TestScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'app',
    width: 1200,
    height: 600,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  backgroundColor: '#fbf0e4',
  scene: [TestScene],
};

export default new Phaser.Game(config);
