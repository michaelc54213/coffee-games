var game = new Phaser.Game(600, 600, Phaser.CANVAS, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('preload', preloadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('gameOver', gameoverState);

game.state.start('boot');
