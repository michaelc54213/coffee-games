var gameoverState = {

	create: function(scoreNumber, yGravity, introMusic) {
		var winLabel = game.add.text(20, 80, 'Game Over! Your score was: ' + playState.scoreNumber,  {font: '40px Arial', fill: '#00ff00' });

		//instructions on how to restart the game
		var startLabel = game.add.text(80, game.world.height-80, 'press the "W" key to restart', {font: '25px Arial', fill: '#ffffff' });

		//we define the wkey as Phaser.Keyboard.W so that we can act
		//when the player presses it
		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		//when the player presses the W key, we call the restart function
		wkey.onDown.addOnce(this.restart, this);
	},

	restart: function() {
		game.state.start('menu');
		game.sound.stopAll();
	}
}
