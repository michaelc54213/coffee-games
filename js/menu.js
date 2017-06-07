var menuState = {
	create: function() {
		var introMusic = game.add.audio('intro'); 

		introMusic.play(); //adds intro music to menu
		introMusic.loopFull(0.4); //loops intro audio

		var nameLabel = game.add.text(120, 80, 'Catch The Fruit!', {font: '50px Arial', fill: '#fff'});
		var instructionLabel = game.add.text(20, game.world.height - 130, 'Use left arrow key to move left, and right arrow key to move right', {font: '20px Arial', fill: '#fff'});
		var startLabel = game.add.text(150, game.world.height - 80, 'press the w key to start', {font: '25px Arial', fill: '#fff'});
		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		wkey.onDown.addOnce(this.start, this);
	},

	start: function() {
		game.state.start('play');
	},
}
